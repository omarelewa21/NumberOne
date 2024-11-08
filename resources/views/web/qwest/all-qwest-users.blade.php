<x-web.layout pageTitle="">
    <section class="app-features">
        <div class="container">

            <div class="box box-primary">
                <div class="box-body">
                    <h3>احصائية مستوى تقدم المتسابقين</h3>
                    <div id="qwest-users">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>الرقم</th>
                                    <th>الاسم</th>
                                    <th class="mobile-hide">الدرس</th> <!-- Hidden on mobile -->
                                    <th class="mobile-hide">الدرجات</th> <!-- Hidden on mobile -->
                                    <th class="mobile-hide">مشاركة</th> <!-- Hidden on mobile -->
                                    <th>النسبة</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($qwests as $index => $qwest)
                                    <tr>
                                        <td>{{ $index + 1 }}</td> <!-- Always shown, even on mobile -->
                                        <td>{{ $qwest->name }}</td>
                                        <td class="mobile-hide">{{ $qwest->total_tests }}</td> <!-- Hidden on mobile -->
                                        <td class="mobile-hide">{{ $qwest->total_count }}</td> <!-- Hidden on mobile -->
                                        <td class="mobile-hide">{{ $totalRecords }}</td> <!-- Hidden on mobile -->
                                        <td>{{ $qwest->percentage }}%</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>

                    <div id="loading" style="display: none;">تحميل ...</div> <!-- Loading indicator -->
                </div>
            </div>
        </div>
    </section>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        let page = 1; // Current page
        let loading = false; // Loading state
        const itemsPerPage = 1; // Set this to your pagination limit
        const totalPages = {{ $qwests->lastPage() }}; // Total pages available

        $(document).ready(function() {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() + $(window).height() >= $(document).height() - 600 && !loading && page < totalPages) {
                    loadMoreData();
                }
            });
        });

        function loadMoreData() {
            loading = true; // Set loading state to true
            $('#loading').show(); // Show loading indicator

            $.ajax({
                url: '/web/qwest/all-qwest-users?page=' + (++page),
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    console.log(data); // Debugging line

                    if (data.qwests.data.length > 0) {
                        // Calculate the starting index for the current page
                        const startingIndex = (page - 1) * itemsPerPage;

                        $.each(data.qwests.data, function(index, qwest) {
                            $('#qwest-users tbody').append('<tr>' +
                                '<td>' + (startingIndex + index + 1) + '</td>' + // Adjusting the index here
                                '<td>' + (qwest.name ? qwest.name : 'No User') + '</td>' +
                                '<td class="mobile-hide">' + qwest.total_tests + '</td>' + // Hidden on mobile
                                '<td class="mobile-hide">' + qwest.total_count + '</td>' +
                                '<td class="mobile-hide">' + data.totalRecords + '</td>' + // Hidden on mobile
                                '<td>' + qwest.percentage + '%</td>' +
                                '</tr>');
                        });
                    } else {
                        $(window).off('scroll'); // Disable further scrolling events
                        $('#loading').text('No more users to load.').show(); // Show a message
                    }

                    loading = false; // Reset loading state
                    $('#loading').hide(); // Hide loading indicator
                },
                error: function(xhr, status, error) {
                    console.error("AJAX Error:", error); // Log error
                    loading = false; // Reset loading state
                    $('#loading').hide(); // Hide loading indicator
                }
            });
        }
    </script>

    <style>
        /* Hide certain columns on mobile (screens below 768px wide) */
        @media (max-width: 768px) {
            .mobile-hide {
                display: none;
            }
        }
    </style>
</x-web.layout>
