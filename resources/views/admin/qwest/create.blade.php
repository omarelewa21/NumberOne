<x-admin.layout>
    <x-slot:heading>المسابقة</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/quiz/search/?keyword=" addHref="{{ url()->current() . '/create' }}" />
        
        <div class="box-body">
            @if (session('message') !== null)
                <div class="alert alert-success">
                    {{ session('message') }}
                </div>
            @endisset

            <!-- Input for Test Number and Is Active -->
            <div class="form-group">
                <label for="testNo">رقم الاختبار</label>
                <input name="test_no" type="number" id="testNo" class="form-control" placeholder="Enter Test No">
            </div>

            <div class="form-group">
                <label for="isActive">منشور</label>
                <input name="is_active" type="checkbox" id="isActive" value="1">
            </div>

            <!-- Dropdown for selecting a lesson to filter results -->
            <div class="form-group">
                <label for="lessonFilter">اختر الدرس</label>
                <select id="lessonFilter" class="form-control">
                    <option value="">جميع الدروس</option>
                    @foreach($lessons as $lesson)
                        <option value="{{ $lesson->id }}">{{ $lesson->name }}</option>
                    @endforeach
                </select>
            </div>

            <!-- Button for submitting selected questions -->
            <button id="submitQuestions" class="btn btn-success mb-3">حفظ الاسئلة</button>

            <table id="questionsTable" class="table table-bordered">
                <thead>
                    <tr>
                        <th style="width:50px;">
                            <center>تحديد</center>
                        </th>
                        <th style="width:80px;">
                            <center>رقم سري</center>
                        </th>
                        <th>
                            <center>السؤال</center>
                        </th>
                        <th>
                            <center>الدرس</center>
                        </th>
                        <th>
                            <center>اكشن</center>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    @if(isset($quizzes))
                        @foreach ($quizzes as $quiz)
                            @isset($quiz->lesson)
                                <tr>
                                    <!-- Checkbox for selecting multiple questions -->
                                    <td style="width:50px;">
                                        <center>
                                            <input name="q_id" type="checkbox" class="questionCheckbox" value="{{ $quiz->id }}">
                                        </center>
                                    </td>
                                    <td style="width:80px;">
                                        <center>{{ $quiz->id }}</center>
                                    </td>
                                    <td>
                                        <center>{{ $quiz->question }} </center>
                                    </td>
                                    <td>{{ $quiz->lesson->name ?? '' }}</td>
                                    <td>
                                        <center>
                                            <a href="/admin/quizzes/{{ $quiz->id }}/edit" class="btn btn-primary edit">
                                                <i class="fa fa-edit"></i>
                                            </a>
                                        </center>
                                    </td>
                                </tr>
                            @endisset
                        @endforeach
                    @endif
                </tbody>
            </table>

            <div class="text-left px-3">
                <div class="pagination">
                    {!! $quizzes->links() !!}
                </div>
            </div>
        </div>
    </div>

    <!-- Include jQuery and DataTables scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>

    <script>
$(document).ready(function() {
    // Array to store selected question IDs
    let selectedQuestions = [];

    // Function to handle form submission
    function handleSubmit() {
        $('#submitQuestions').on('click', function() {
            var testNo = $('#testNo').val();
            var isActive = $('#isActive').is(':checked') ? 1 : 0;

            // Check if any questions are selected
            if (selectedQuestions.length === 0) {
                alert('اختر على الاقل سؤال واحد');
                return;
            }

            // Send selected questions via AJAX
            $.ajax({
                url: '/save-selected-questions',  // Adjust the URL as needed
                method: 'POST',
                data: {
                    _token: "{{ csrf_token() }}",  // Include CSRF token
                    questions: selectedQuestions,  // Send all selected questions (even across pages)
                    test_no: testNo,
                    is_active: isActive
                },
                success: function(response) {
                    if (response.success) {
                        alert('تم الحفظ بنجاح');

                        // Clear input fields after success
                        $('#testNo').val('');  // Clear test_no field
                        $('#isActive').prop('checked', false);  // Uncheck the is_active checkbox

                        // Uncheck all checkboxes and clear the selectedQuestions array
                        $('.questionCheckbox').prop('checked', false);
                        selectedQuestions = [];
                    } else {
                        alert('خطاء: ' + response.message);
                    }
                },
                error: function(xhr) {
                    if (xhr.status === 422) {
                        var errors = xhr.responseJSON.errors;
                        var errorMessages = '';
                        for (var error in errors) {
                            errorMessages += errors[error][0] + '\n';
                        }
                        alert('خطاء:\n' + errorMessages);
                    } else {
                        alert('حدث خطاء حاول مرة اخرى');
                    }
                }
            });
        });
    }

    // Function to restore the checkbox states after pagination
    function restoreCheckboxes() {
        $('.questionCheckbox').each(function() {
            if (selectedQuestions.includes($(this).val())) {
                $(this).prop('checked', true);
            } else {
                $(this).prop('checked', false);
            }
        });
    }

    // Preserve values of test_no and is_active fields
    function preserveInputs() {
        return {
            testNo: $('#testNo').val(),
            isActive: $('#isActive').is(':checked'),
            lessonId: $('#lessonFilter').val()
        };
    }

    // Restore values of test_no, is_active, and lessonId fields after pagination
    function restoreInputs(inputs) {
        $('#testNo').val(inputs.testNo);
        $('#isActive').prop('checked', inputs.isActive);
        $('#lessonFilter').val(inputs.lessonId);
    }

    // Event listener for checkbox click
    $(document).on('change', '.questionCheckbox', function() {
        let questionId = $(this).val();

        if ($(this).is(':checked')) {
            // Add the question ID to the selectedQuestions array if checked
            if (!selectedQuestions.includes(questionId)) {
                selectedQuestions.push(questionId);
            }
        } else {
            // Remove the question ID from the array if unchecked
            selectedQuestions = selectedQuestions.filter(function(id) {
                return id !== questionId;
            });
        }
    });

    // Event listener for filtering quizzes
    $('#lessonFilter').on('change', function() {
        var lessonId = $(this).val();

        // Fetch the filtered quizzes via AJAX
        $.ajax({
            url: '/quiz/filter',  // Adjust the URL as needed
            method: 'GET',
            data: {
                lesson_id: lessonId
            },
            success: function(response) {
                // Update the table with filtered results
                $('#questionsTable tbody').html('');
                $.each(response.quizzes.data, function(index, quiz) {
                    $('#questionsTable tbody').append(`
                        <tr>
                            <td style="width:50px;">
                                <center>
                                    <input name="q_id" type="checkbox" class="questionCheckbox" value="${quiz.id}">
                                </center>
                            </td>
                            <td style="width:80px;">
                                <center>${quiz.id}</center>
                            </td>
                            <td>
                                <center>${quiz.question}</center>
                            </td>
                            <td>${quiz.lesson ? quiz.lesson.name : ''}</td>
                            <td>
                                <center>
                                    <a href="/admin/quizzes/${quiz.id}/edit" class="btn btn-primary edit">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                </center>
                            </td>
                        </tr>
                    `);
                });
            },
            error: function(xhr) {
                alert('خطأ في التحميل: ' + xhr.statusText);
            }
        });
    });

    // Event listener for pagination links
    $(document).on('click', '.pagination a', function(event) {
        event.preventDefault();
        let url = $(this).attr('href');

        // Preserve test_no, is_active, and lessonId values before pagination
        const preservedInputs = preserveInputs();

        // Fetch the new page via AJAX
        $.get(url, function(response) {
            $('.box-body').html($(response).find('.box-body').html());

            // Restore checkbox states and input values after the new page is loaded
            restoreCheckboxes();
            restoreInputs(preservedInputs);

            // Re-attach the submit event listener after pagination
            handleSubmit();
        });
    });

    // Initial binding of the submit event when the page first loads
    handleSubmit();
});
</script>
</x-admin.layout>