$(function () {
    // Elements declaration
    let $deleteDialog = $("#delete_category_dialog");
    let $confirmDelete = $("#confirm-delete-category");
    let $confirmLoading = $confirmDelete.find(".loading");

    // Category id selected for deleting
    let deleteCategoryId;

    //#region Delete Category
    // Delete button click handling
    $(".delete-category").on("click", function () {
        deleteCategoryId = $(this).data("id");
        let notesCount = $(this).data("notes-count");

        // Fill the category details in the dialog
        $("#delete-category-name").text($(this).data("name"));
        $("#delete-category-notes").text(notesCount > 0 ? `This category is used by ${notesCount} note(s).` : "");

        delete_category_dialog.showModal();
    })

    // Confirm delete handling
    $confirmDelete.on("click", function () {
        showDeleteLoading(true);

        $.ajax({
            method: "DELETE",
            url: `${$deleteDialog.data("url")}?id=${deleteCategoryId}`,
            success: function (response) {
                // Remove the category from the table
                $(`#category-${deleteCategoryId}`).remove();
                showToast(response.message, "success");
            },
            error: function (err) {
                showToast(err.responseJSON?.message || "Unable to delete the category", "error");
            },
            complete: function () {
                showDeleteLoading(false);
                delete_category_dialog.close();
            }
        })
    })

    /**
     * Shows or hides the loading on the delete button.
     * @param {Boolean} enable - Whether to show or hide the loading
     */
    function showDeleteLoading(enable) {
        $confirmDelete.prop("disabled", enable);
        $confirmLoading.toggleClass("hidden", !enable);
    }
    //#endregion
});
