$(function () {
    //#region Plugin Initialization
    // Customize timeago to remove "about" text
    $.timeago.settings.strings = {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        inPast: "any moment now",
        seconds: "seconds",
        minute: "1 minute",
        minutes: "%d minutes",
        hour: "1 hour",
        hours: "%d hours",
        day: "1 day",
        days: "%d days",
        month: "1 month",
        months: "%d months",
        year: "1 year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
    };
    $("time.timeago").timeago();
    //#endregion

    //#region Pin Note
    $("#pin-note").on("click", function () {
        // Note Id
        let noteId = $(this).data("noteid");
        console.log(noteId);

        // Call the API
        $.ajax({
            method: "POST",
            url: `/Notes/Pin/${noteId}`,
            success: function (response) {
                // On Response Success
                if (response?.success) {
                    showToast(response?.data ? "Pinned" : "Unpinned", "success");

                    // Show the button active
                    $("#pin-note").toggleClass("btn-active");
                } else {
                    showToast(response?.message || "Unable to pin the note");
                }
            },
            error: function (err) {
                showToast(err.responseJSON?.message || "Unable to pin the note");
            }
        })
    })
    //#endregion

    //#region Status Change
    let previous_status = $("#status-selected").val();

    $("#status-selected").on("change", function (e) {
        let newstatus = $(this).val()

        // Get the Status text correctly from the option
        let newStatus_text = $(this).find(`option[value="${newstatus}"]`).text().trim();
        let noteid = $(this).data("noteid")

        // Ajax Call
        $.ajax({
            method: "PUT",
            url: `/note/status/${newstatus}?noteid=${noteid}`,
            success: function (response) {
                if (response?.success) {
                    showToast(`Your note is now ${newStatus_text}`, "success");
                    $(".status-badge").text(newStatus_text);
                } else {
                    showToast("Failed to update the status", "error");
                    $("#status-selected").data(previous_status);
                }
            },
            error: function (err) {
                showToast(err.responseJSON?.message || "Failed to update the status");
                $("#status-selected").data(previous_status);
            }
        })

    })
    //#endregion

    //#region Delete Modal Popup
    $("#delete-note").on("click", function () {
        delete_note_dialog.showModal();
    })
    //#endregion

    //#region Note Attachment Upload
    const MAX_FILE_SIZE = 5120 * 1000;
    const MAX_FILES = 10;
    const SUPPORTED_TYPES = ["image/png", "image/jpg", "image/jpeg", "application/pdf"];
    const PDF_ATTACHMENT_TYPE = 1;
    const SIZE_UNITS = ["B", "KB", "MB", "GB"];

    let dropzone$ = $("#drop-zone");
    let fileinput$ = $("#file-dropzone");
    let attachmentList$ = $("#attachment-list");
    let attachmentCount$ = $("#attachment-count");
    let attachmentTemplate = document.getElementById("attachment-template");
    let isUploading = false;

    // Stop the by default browser
    dropzone$.on("dragenter dragover dragleave drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
    })

    dropzone$.on("dragover dragenter", function () {
        $(this).addClass("bg-base-200")
    })

    dropzone$.on("dragleave drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass("bg-base-200")
    })

    dropzone$.on("drop", function (e) {
        handleFiles(e.originalEvent.dataTransfer.files);
    })

    fileinput$.on("change", function () {
        handleFiles(this.files);
        $(this).val("");
    })

    /**
     * Checks a single file against the same rules as FileValidateAttribute on the server.
     * @param {File} file - The file to check
     * @returns {String} The error message, or an empty string when the file is valid
     */
    function getFileError(file) {
        if (!SUPPORTED_TYPES.includes(file.type)) {
            return `${file.name} is not supported. Only PDF, PNG and JPG files can be added`;
        }
        if (file.size > MAX_FILE_SIZE) {
            return `${file.name} is larger than 5 MB`;
        }
        return "";
    }

    /**
     * Validates the selected or dropped files, shows an error toast for each invalid file
     * and uploads only the valid ones.
     * @param {FileList} files - Files from the file input or the drop event
     */
    function handleFiles(files) {
        if (isUploading) {
            showToast("Please wait, files are still uploading", "info");
            return;
        }

        if (!files || files.length === 0) {
            showToast("Please select at least one file", "error");
            return;
        }

        const validFiles = [];
        Array.from(files).forEach((file) => {
            const error = getFileError(file);
            if (error) {
                showToast(error, "error");
            } else {
                validFiles.push(file);
            }
        });

        const remainingSlots = MAX_FILES - attachmentList$.children().length;
        if (remainingSlots <= 0) {
            showToast(`A note can have only ${MAX_FILES} attachments`, "error");
            return;
        }

        if (validFiles.length > remainingSlots) {
            showToast(`A note can have only ${MAX_FILES} attachments. Only the first ${remainingSlots} file(s) will be uploaded`, "info");
            validFiles.splice(remainingSlots);
        }

        if (validFiles.length > 0) {
            uploadFiles(validFiles);
        }
    }

    /**
         * Reads the error message from a failed upload response.
         * Handles the { message } response and the validation problem response with { errors }.
         * @param {Object} err - The jQuery ajax error object
         * @returns {String} The message to show to the user
         */
    function getUploadErrorMessage(err) {
        const response = err.responseJSON;
        if (response?.message) {
            return response.message;
        }

        const validationErrors = Object.values(response?.errors || {}).flat();
        return validationErrors[0] || "Failed to upload the files. Try again later";
    }

    /**
     * Creates the attachment list item from the template for an uploaded attachment.
     * @param {Object} attachment - The uploaded attachment returned by the server
     * @returns {jQuery} The list item element
     */
    function createAttachmentItem(attachment) {
        const item$ = $(attachmentTemplate.content.firstElementChild.cloneNode(true));
        const isPdf = attachment.attachMentType === PDF_ATTACHMENT_TYPE;

        item$.find(`[data-icon="${isPdf ? "image" : "pdf"}"]`).remove();
        item$.find('[data-field="name"]').text(attachment.fileName).attr("title", attachment.fileName);
        item$.find('[data-field="size"]').text(formatFileSize(attachment.size));
        item$.find('[data-field="created"]').attr("datetime", attachment.createdAt);

        item$.find('[data-action="download"]').attr("aria-label", `Download ${attachment.fileName}`).attr("href", `/Notes/DownloadAttachMent/${attachment.id}`);
        item$.find('[data-action="delete"]').attr("aria-label", `Delete ${attachment.fileName}`);
        return item$;
    }

    /**
     * Simple file size formatter (bytes → human readable)
     * @param {Number} bytes - File size in bytes
     * @returns {String} Formatted size (e.g., "1.5 KB", "2.3 MB")
     */
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
    }

    /**
     * Adds the uploaded attachments to the list and updates the attachments count.
     * @param {Object[]} attachments - The uploaded attachments returned by the server
     */
    function showAttachments(attachments) {
        attachmentList$.append(attachments.map(createAttachmentItem));

        const count = attachmentList$.children().length;
        attachmentCount$.text(count).toggleClass("hidden", count === 0);

        $("time.timeago").timeago();
    }

    /**
     * Uploads the files to the note with a single request and shows the result as toasts.
     * @param {File[]} files - Valid files to upload
     */
    function uploadFiles(files) {
        const noteId = dropzone$.data("noteid");
        const formdata = new FormData();
        files.forEach((file) => formdata.append("Files", file));

        isUploading = true;
        fileinput$.prop("disabled", true);
        showToast(`Uploading ${files.length} file(s)...`, "info");

        $.ajax({
            method: "POST",
            url: `/Notes/Attachments/${noteId}`,
            data: formdata,
            processData: false,
            contentType: false,
            success: function (response) {
                const failedFiles = response?.errors || [];
                showAttachments(response?.attachments || []);
                showToast(response?.message || "Files uploaded successfully", failedFiles.length > 0 ? "info" : "success");
                failedFiles.forEach((message) => showToast(message, "error"));
            },
            error: function (err) {
                showToast(getUploadErrorMessage(err), "error");
            },
            complete: function () {
                isUploading = false;
                fileinput$.prop("disabled", false);
            }
        })
    }

    //#endregion

    //#region Note Attachment View
    $(".attachment").on("click", function (e) {
        let attachmentId = $(this).data("attachment-id");

        if (attachmentId) {
            // Ajax Call to load the File Url
            $.ajax({
                method: "GET",
                url: `/Notes/Attachment/${attachmentId}`,
                success: function (response) {
                    console.log(response);
                },
                error: function (err) {
                    showToast(err.responseJSON?.message || "Error occured when viewing the attachment", "error");
                }
            })

            
            view_attachment_dialog.showModal();
        }
    })

    //#endregion
})