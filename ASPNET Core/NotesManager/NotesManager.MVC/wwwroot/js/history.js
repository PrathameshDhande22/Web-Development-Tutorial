$(function () {
    // Get the first history item ID and load it
    const firstHistoryId = $('.history-item').first().data('id');
    if (firstHistoryId) {
        loadHistoryDetail(firstHistoryId);
    }

    // Set up click handlers for all history items
    $('.history-item').click(function () {
        const historyId = $(this).data('id');
        loadHistoryDetail(historyId);

        // Update active state
        $('.history-item').removeClass('bg-base-200');
        $(this).addClass('bg-base-200');
    });

    // Tab switching for history detail (event delegation for dynamically loaded content)
    $(document).on('click', '.tab-button', function () {
        const tabName = $(this).data('tab');

        // Update active tab button
        $(this).closest('.border-b').find('.tab-button').removeClass('active bg-base-200');
        $(this).addClass('active bg-base-200');

        // Show selected tab content
        $(this).closest('.border-b').siblings('.tab-content').addClass('hidden');
        $(this).closest('.border-b').siblings('#' + tabName + '-tab').removeClass('hidden');
    });

    /**
     * Loads history detail via AJAX for the given history ID
     * @param {number} historyId - The ID of the history item to load
     */
    function loadHistoryDetail(historyId) {
        // Show loading indicator
        $('#loading').removeClass('hidden');
        $('#history-detail-content').html('');

        // Make AJAX call
        $.ajax({
            url: '/Notes/HistoryDetail/' + historyId,
            type: 'GET',
            success: function (data) {
                // Hide loading indicator
                $('#loading').addClass('hidden');

                // Insert the partial view content
                $('#history-detail-content').html(data);
            },
            error: function (xhr, status, error) {
                $('#loading').addClass('hidden');
                $('#history-detail-content').html(
                    '<div class="text-red-500 p-4">Error loading history detail</div>'
                );
                console.error('Error loading history detail:', error);
            }
        });
    }
});
