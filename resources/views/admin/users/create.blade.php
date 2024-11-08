<x-admin.layout>

    <x-slot:heading>إنشاء كتاب</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/admin/quizzes/search/ " />
        <div class="box-body">



            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <form role="form" action="/admin/quizzes/" method="POST">
                @csrf
                <div class="box-body">
                    <div class="col-md-12">

                        <label for="lesson_id">@lang('admin.lessons.name') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="lesson_id">
                            <option selected></option>
                            @foreach ($lessons as $lesson)
                                <option value = "{{ $lesson->id }}">{{ $lesson->name }}</option>
                            @endforeach
                        </select>
                        @error('lesson_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>
                    <div id="questionsContainer">
                        <section class="question[0] question">

                            <div class="col-md-10 form-group">
                                <label for="question">
                                    <h3>السؤال<span style="color:red;"> *</span></h3>
                                </label>
                                <input type="text" name="question[0][question]" class="form-control" id="name"
                                    placeholder="السؤال">

                                <label for="answers" style="display: block;">
                                    <h3> الإجابات<span style="color:red;"> *</span></h3>
                                </label>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer0]" class="form-control">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer1]" class="form-control">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer2]" class="form-control">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer3]" class="form-control">
                                </div>

                                <div class="col-md-12 form-group">
                                    <label for="rightAnswer">
                                        <h3>الإجابة الصحيحة<span style="color:red;"> *</span></h3>
                                    </label>
                                    <input type="text" name="question[0][right_answer]" class="form-control"
                                        id="answer" placeholder="السؤال">
                                </div>
                            </div>
                            <div class="col-md-2" style="padding-top: 80px;">
                                <button type = "button" id = "add" name="add"
                                    class="btn btn-success align-self-center">Add
                                    More</button>
                            </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>
                </section>


                <!-- /.box-body -->

                <script>
                    var i = 0;
                    $('#add').click(function() {
                        i++;
                        $("div#questionsContainer").append(`
                <section class="question[` + i + `] question">

                            <div class="col-md-10 form-group">
                                <label for="question">
                                    <h3>السؤال<span style="color:red;"> *</span></h3>
                                </label>
                                <input type="text" name="question[` + i + `][question]" class="form-control" id="name"
                                    placeholder="السؤال">

                                <label for="answers" style="display: block;">
                                    <h3> الإجابات<span style="color:red;"> *</span></h3>
                                </label>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer0]" class="form-control">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer1]" class="form-control">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer2]" class="form-control">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer3]" class="form-control">
                                </div>

                                <div class="col-md-12 form-group">
                                    <label for="rightAnswer">
                                        <h3>الإجابة الصحيحة<span style="color:red;"> *</span></h3>
                                    </label>
                                    <input type="text" name="question[` + i + `][right_answer]" class="form-control"
                                        id="answer" placeholder="السؤال">
                                </div>
                            </div>
                            <div class="col-md-2" style="padding-top: 80px;">
                                <button type = "button" id = "add" name="add"
                                    class="btn btn-success align-self-center">Add
                                    More</button>
                            </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>
                </section>`);
                    });
                    $(document).on('click', '.remove-question', function() {
                        $(this).parents("section.question").remove();
                    });
                </script>
            </form>


        </div>

    </div>

</x-admin.layout>
