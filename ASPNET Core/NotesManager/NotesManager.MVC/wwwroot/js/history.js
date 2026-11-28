$(function () {
    // Elements declaration
    let $versionList = $("#version-list");
    let $historyDetail = $("#history-detail");
    let $historyDetailContent = $("#history-detail-content");
    let $loading = $("#loading");
    let $restoreDialog = $("#restore_version_dialog");
    let $restoreConfirm = $("#restore-confirm");
    let historyItemTemplate = document.getElementById("history-item-template");

    // History id selected for restoring
    let restoreHistoryId;

    //#region History Detail
    // Version click handling. Using the list so the restored version added later can also be clicked
    $versionList.on("click", ".history-item", function () {
        // Highlight the selected version
        $versionList.find(".history-item").removeClass("bg-base-200");
        $(this).addClass("bg-base-200");

        loadHistoryDetail($(this).data("id"), $(this).data("row-number"), $(this).data("is-current"));
    })

    // Show the newest version which is on top
    $versionList.find(".history-item").first().trigger("click");

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

    //#region Restore Version
    // Restore button is inside the partial view, so the click is handled from the detail content
    $historyDetailContent.on("click", "#restore-version", function () {
        restoreHistoryId = $(this).data("id");
        $("#restore-version-number").text($(this).data("row-number"));
        $restoreDialog[0].showModal();
    })

    // Restore confirm handling
    $restoreConfirm.on("click", function () {
        $restoreConfirm.prop("disabled", true);

        $.ajax({
            method: "POST",
            url: `${$restoreDialog.data("url")}?historyid=${restoreHistoryId}`,
            success: function (response) {
                $restoreDialog[0].close();
                addRestoredVersion(response.data);
                showToast(response.message, "success");
            },
            error: function (err) {
                $restoreDialog[0].close();
                showToast(err.responseJSON?.message || "Unable to restore the version", "error");
            },
            complete: function () {
                $restoreConfirm.prop("disabled", false);
            }
        })
    })

    /**
     * Adds the restored version on top of the list, makes it the current version and selects it.
     * @param {Object} history - The restored history returned by the server
     */
    function addRestoredVersion(history) {
        let $oldCurrent = $versionList.find(".history-item").first();
        let rowNumber = $versionList.find(".history-item").length + 1;

        // Previous version is not current anymore
        $oldCurrent.data("is-current", false);
        $oldCurrent.find('[data-field="current"]').text("");

        // Create the new version from the template
        let $newItem = $(historyItemTemplate.content.firstElementChild.cloneNode(true));
        let $newButton = $newItem.find(".history-item");

        $newButton.data({ "id": history.id, "row-number": rowNumber, "is-current": true });
        $newItem.find('[data-field="version"]').text(`v${rowNumber}`);
        $newItem.find('[data-field="action"]').text(history.actionName);
        $newItem.find('[data-field="current"]').text("current");
        $newItem.find('[data-field="created"]').text(formatDate(history.createdAt));

        $versionList.prepend($newItem);
        $("#versions-count").text(rowNumber);
        $("#history-title").text(history.title);

        $newButton.trigger("click");
    }

    /**
     * Formats the date same as the history list. e.g. "Nov 28, 2026, 10:15 AM"
     * @param {String} date - Date returned by the server
     * @returns {String} The formatted date
     */
    function formatDate(date) {
        return new Date(date).toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }
    //#endregion
});
