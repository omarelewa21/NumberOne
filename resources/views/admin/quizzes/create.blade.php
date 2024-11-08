<x-admin.layout>
    <script src="https://cdn.ckeditor.com/ckeditor5/36.0.1/classic/ckeditor.js"></script>

    <x-slot:heading>إنشاء أسئلة</x-slot:heading>
    <div class="box box-primary">
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
            <form role="form" action="/admin/quizzes" method="POST">
                @csrf
                <div class="box-body">
                    <div class="col-md-12">

                        <label for="lesson_id">@lang('admin.lessons.name') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="lesson_id" required>
                            <option selected></option>
                            @foreach ($lessons as $lesson)
                                <option value = "{{ $lesson->id }}"
                                    {{ $lesson->id == old('lesson_id') ? 'selected' : '' }}>{{ $lesson->name }}</option>
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
                                <textarea rows="5" cols="150" name="question[0][question]"  class="tinymce form-control"
                                value ="{{ old('question') ? old('question')[0]['question'] : '' }}"></textarea>
                                

                                <label for="answers" style="display: block;">
                                    <h3> الإجابات<span style="color:red;"> *</span></h3>
                                </label>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer0]" class="form-control"
                                        value="{{ old('question') ? old('question')[0]['answer0'] : '' }}">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer1]" class="form-control"
                                        value="{{ old('question') ? old('question')[0]['answer1'] : '' }}">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer2]" class="form-control"
                                        value="{{ old('question') ? old('question')[0]['answer2'] : '' }}">
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[0][answer3]" class="form-control"
                                        value="{{ old('question') ? old('question')[0]['answer3'] : '' }}">
                                </div>
                                   <div class="col-md-12 form-group">
                                    <label for="rightAnswer">
                                        <h3>الإجابة الصحيحة<span style="color:red;"> *</span></h3>
                                    </label>
                                    <input type="text" name="question[0][right_answer]" class="form-control"
                                        id="answer" placeholder="الإجابة الصحيحة"
                                        value="{{ old('question') ? old('question')[0]['right_answer'] : '' }}">
                                </div>
                                  <div class="col-md-8 form-group">
                            <label for="question[0][explaination]">شرح الإجابة <span style="color:red;"> *</span></label>
                            <textarea rows="5" cols="150" name="question[0][explaination]" class="tinyMce"
                                value ="{{ old('question[0][explaination]') }}"></textarea>
                        </div>

                             
                            </div>
                            <div class="col-md-2" style="padding-top: 80px;">
                                <button type = "button" id = "add" name="add"
                                    class="btn btn-success align-self-center">Add
                                    More</button>
                            </div>
                    </div>
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
                                    placeholder="السؤال"   required>

                                <label for="answers" style="display: block;">
                                    <h3> الإجابات<span style="color:red;"> *</span></h3>
                                </label>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer0]" class="form-control" required>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer1]" class="form-control" required>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer2]" class="form-control" required>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="question[` + i + `][answer3]" class="form-control"  required>
                                </div>

                                <div class="col-md-12 form-group">
                                    <label for="rightAnswer">
                                        <h3>الإجابة الصحيحة<span style="color:red;"> *</span></h3>
                                    </label>
                                    <input type="text" name="question[` + i + `][right_answer]" class="form-control"
                                        id="answer" placeholder="الإجابة الصحيحة" required>                                </div>
                            </div>
                             <div class="col-md-12 form-group">
                            <label for="question[` + i + `]explaination">شرح الإجابة <span style="color:red;"> *</span></label>
                            <textarea rows="5" cols="150" name="question[` + i + `][explaination]" class="tinyMce">{{ old('question[` + i + `][explaination]') }}</textarea>
                        </div>
                            <div class="col-md-2" style="padding-top: 80px;">
                                <button type = "button" id = "remove" name="remove"
                                    class="btn btn-danger align-self-center remove">مسح</button>
                            </div>
                    </div>
                </div>

                </section>`);
                    });
                    $(document).on('click', '.remove', function() {
                        $(this).parents("section.question").remove();
                    });
                    

                </script>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>
            </form>


        </div>

    </div>

</x-admin.layout>
