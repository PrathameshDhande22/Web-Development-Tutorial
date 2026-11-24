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
})