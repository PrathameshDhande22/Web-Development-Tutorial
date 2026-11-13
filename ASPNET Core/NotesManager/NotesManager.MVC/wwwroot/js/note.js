$(function () {
    // Elements declaration
    let $previousPaginationButton = $("#previous-btn");
    let $nextPaginationButton = $("#next-btn");
    let $pagination = $("#pagination");
    let $notesCount = $("#notes-count");
    let $searchbox = $("#search-box");

    //#region Search Notes
    let searchTimeout;
    let searchedtext, selectedCategoryid, status, pageno = 1;

    // Note search Handling
    $searchbox.on("input", function () {
        $("#clear-filter-btn").show();
        clearTimeout(searchTimeout);
        searchedtext = $(this).val();

        // Apply the debounce
        searchTimeout = setTimeout(() => {
            loadNotes(searchedtext, status, selectedCategoryid, pageno);
        }, 500);
    })

    // Category Drop down change
    $("#note-category").on("change", function () {
        $("#clear-filter-btn").show();
        selectedCategoryid = $(this).val();
        loadNotes(searchedtext, status, selectedCategoryid, pageno);
    })

    // Status Drop Down change
    $("#note-status").on("change", function () {
        $("#clear-filter-btn").show();
        status = $(this).val();
        loadNotes(searchedtext, status, selectedCategoryid, pageno);
    })

    // Clear filter button handling
    $("#clear-filter-btn, #clear-filter-btn-nomatch").on("click", function () {
        $("#no-match-found").hide();
        $("#clear-filter-btn").hide();
        searchedtext = "";
        status = "";
        selectedCategoryid = 0;
        pageno = 1;
        $("#note-status").val("Default");
        $("#note-category").val(0);
        $searchbox.val("")
        loadNotes(null, null, 0, 1);
    })

    /**
     * Shows the Loading on the Notes. By default it is disable. 
     * @param {Boolean} enable - Whether to show or hide the loading
     */
    function showNotesLoading(enable) {
        //Loading Handler
        let loadingDiv = $("#loading-view");

        if (enable) {
            $("#error-alert").hide();
            $("#notes-view").empty();
        }
        loadingDiv.removeClass(enable ? "hidden" : "inline-block");
        loadingDiv.addClass(enable ? "inline-block" : "hidden");
    }

    /**
     * Loads the Notes by Ajax Call
     * @param {Number} categoryId - CategoryId to be Search for
     * @param {String} status - Status of the Notes 
     * @param {String} searchText - For searching the Title and Content of the notes
     * @param {Number} pageno - Page No
     */
    function loadNotes(searchText, status, categoryId, pageno) {
        showNotesLoading(true);

        // Add the Url search Params
        let searchParams = new URLSearchParams();

        if (searchText?.trim()) {
            searchParams.append("Search", searchText);
        }
        if (status) {
            searchParams.append("Status", status);
        }
        if (categoryId && categoryId !== 0) {
            searchParams.append("CategoryId", categoryId);
        }
        if (pageno) {
            searchParams.append("Page", pageno);
        }

        // Ajax call to load the partial view and set the view
        $.ajax({
            method: "POST",
            type: "POST",
            url: `/Notes/MyNotes?${searchParams.toString()}`,
            success: function (response) {
                showNotesLoading(false);
                const responsehtml = $(response)
                // Get the count of the items from the filters
                let no_of_notes = $(responsehtml.get(0)).data("totalNotes");
                let totalPages = $(responsehtml.get(0)).data("totalPages");
                $notesCount.text(`${no_of_notes} notes`).attr("data-total-notes", no_of_notes);

                // Setting the pages in pagination
                $pagination.data("currentPage", pageno);
                $pagination.data("totalPages", totalPages);

                // Show the NO match found view with pagination hide and show
                if (no_of_notes === 0) {
                    $("#no-match-found").show();
                    $pagination.hide();
                } else if (totalPages >= 2) {
                    $pagination.show();
                } else {
                    $pagination.hide();
                }

                toggleNextOrPrevious();

                $("#notes-view").html(response);
            },
            error: function () {
                showNotesLoading(false);
                $notesCount.text(`0 notes`).attr("data-total-notes", 0);
                $("#notes-view").empty();
                $("#error-alert").show();
            }, complete: function () {
                showNotesLoading(false);
            }
        })
    }
    //#endregion

    //#region Pagination
    // On First load based on the Items available show or hide the pagination
    if ($notesCount.data("totalNotes") > 9) {
        $pagination.show();
        toggleNextOrPrevious();
    } else {
        $pagination.hide();
    }

    // next btn and prev btn handling
    $nextPaginationButton.on("click", function () {
        loadNotes(searchedtext, status, selectedCategoryid, pageno + 1);
    })

    $previousPaginationButton.on("click", function () {
        loadNotes(searchedtext, status, selectedCategoryid, pageno - 1);
    })

    /**
     * Toggles the Next or Previous Pagination button which also ensures the disable and enable
     */
    function toggleNextOrPrevious() {
        let currentpage = $pagination.data("currentPage");
        let totalpages = $pagination.data("totalPages");

        let disablePrevPage = currentpage <= 1;
        let isLastPage = currentpage >= totalpages;
        $previousPaginationButton.attr("disabled", disablePrevPage).toggleClass("btn-disabled", disablePrevPage);
        $nextPaginationButton.attr("disabled", isLastPage).toggleClass("btn-disabled", isLastPage);
    }

    //#endregion

})