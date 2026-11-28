$(function () {
    // Elements declaration
    let $historyItems = $(".history-item");
    let $historyDetail = $("#history-detail");
    let $historyDetailContent = $("#history-detail-content");
    let $loading = $("#loading");

    //#region History Detail
    // Version click handling
    $historyItems.on("click", function () {
        // Highlight the selected version
        $historyItems.removeClass("bg-base-200");
        $(this).addClass("bg-base-200");

        loadHistoryDetail($(this).data("id"), $(this).data("row-number"), $(this).data("is-current"));
    })

    // Show the newest version which is on top
    $historyItems.first().trigger("click");

    /**
     * Shows or hides the loading of the history detail.
     * @param {Boolean} enable - Whether to show or hide the loading
     */
    function showLoading(enable) {
        $loading.toggleClass("hidden", !enable);
        $historyDetailContent.toggleClass("hidden", enable);
    }

    /**
     * Loads the history detail partial view by Ajax Call
     * @param {Number} historyId - Id of the history
     * @param {Number} rowNumber - Version number of the history shown in the list
     * @param {Boolean} isCurrent - Whether the history is the current version of the note
     */
    function loadHistoryDetail(historyId, rowNumber, isCurrent) {
        showLoading(true);

        $.ajax({
            method: "GET",
            url: `${$historyDetail.data("url")}/${historyId}`,
            data: { rowNumber: rowNumber, isCurrent: isCurrent },
            success: function (response) {
                $historyDetailContent.html(response);
            },
            error: function () {
                $historyDetailContent.empty();
                showToast("Unable to load the version details", "error");
            },
            complete: function () {
                showLoading(false);
            }
        })
    }
    //#endregion
});
