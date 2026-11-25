$(function () {
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

    let dropzone$ = $("#drop-zone");
    let fileinput$ = $("#file-dropzone");
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

        if (validFiles.length > MAX_FILES) {
            showToast(`A note can have only ${MAX_FILES} attachments. Only the first ${MAX_FILES} files will be uploaded`, "info");
            validFiles.splice(MAX_FILES);
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
})