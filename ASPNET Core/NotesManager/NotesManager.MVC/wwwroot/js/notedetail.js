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
})