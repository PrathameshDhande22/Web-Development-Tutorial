$(function () {
    //#region Search Notes
    // Note search Handling
    let searchTimeout;
    let searchedtext, selectedCategoryid, status;
    $("#search-box").on("input", function () {
        $("#clear-filter-btn").show();
        clearTimeout(searchTimeout);
        searchedtext = $(this).val();

        // Apply the debounce
        searchTimeout = setTimeout(() => {
            loadNotes(searchedtext, status, selectedCategoryid);
        }, 500);
    })

    // Category Drop down change
    $("#note-category").on("change", function () {
        $("#clear-filter-btn").show();
        selectedCategoryid = $(this).val();
        loadNotes(searchedtext, status, selectedCategoryid);
    })

    // Status Drop Down change
    $("#note-status").on("change", function () {
        $("#clear-filter-btn").show();
        status = $(this).val();
        loadNotes(searchedtext, status, selectedCategoryid);
    })

    // Clear filter button handling
    $("#clear-filter-btn, #clear-filter-btn-nomatch").on("click", function () {
        $("#no-match-found").hide();
        $("#clear-filter-btn").hide();
        searchedtext = "";
        status = "";
        selectedCategoryid = 0;
        $("#note-status").val("Default");
        $("#note-category").val(0);
        $("#search-box").val("")
        loadNotes(null, null, 0);
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
            $("#notes-view").children().remove();
        }
        loadingDiv.removeClass(enable ? "hidden" : "inline-block");
        loadingDiv.addClass(enable ? "inline-block" : "hidden");
    }

    /**
     * Loads the Notes by Ajax Call
     * @param {Number} categoryId - CategoryId to be Search for
     * @param {String} status - Status of the Notes 
     * @param {String} searchText - For searching the Title and Content of the notes
     */
    function loadNotes(searchText, status, categoryId) {
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

        // Ajax call to load the partial view and set the view
        $.ajax({
            method: "POST",
            type: "POST",
            url: `/Notes/MyNotes?${searchParams.toString()}`,
            success: function (response) {
                const responsehtml = $(response);
                let no_of_notes = responsehtml.filter("article").length;
                $("#notes-count").text(`${no_of_notes} notes`);

                showNotesLoading(false);

                // Show the NO match found view
                if (no_of_notes === 0) {
                    $("#no-match-found").show();
                }
                $("#notes-view").html(response);
            },
            error: function () {
                showNotesLoading(false);
                $("#notes-count").text(`0 notes`);
                $("#notes-view").children().remove();
                $("#error-alert").show();
            }
        })



        //#endregion
    }

})