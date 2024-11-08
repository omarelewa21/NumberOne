<x-admin.layout>

    <x-slot:heading>تعديل سؤال</x-slot:heading>
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
            <form role="form" action="/admin/quizzes/{{ $quiz->id }}" method="POST">
                @csrf
                @method('PUT')
                <div class="box-body">
                    <div class="col-md-12">

                        <label for="lesson_id">@lang('admin.lessons.name') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="lesson_id" required>
                            <option selected></option>
                            @foreach ($lessons as $lesson)
                                <option value = "{{ $lesson->id }}"
                                    {{ $lesson->id == $quiz->lesson_id ? 'selected' : '' }}>{{ $lesson->name }}</option>
                            @endforeach
                        </select>
                        @error('lesson_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>
                    <div id="questionsContainer">
                        <section class="question">

                            <div class="col-md-10 form-group">
                                <label for="question">
                                    <h3>السؤال<span style="color:red;"> *</span></h3>
                                </label>
                                <textarea class="mce" id="question" rows="5" cols="150" name="question">{!! old('question') ? old('question') : $quiz->question !!}</textarea>

                                <label for="answers" style="display: block;">
                                    <h3> الإجابات<span style="color:red;"> *</span></h3>
                                </label>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="answer0" class="form-control" required
                                        value={{ old('answer0') ? old('answer0') : $quiz->answer0 }}>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="answer1" class="form-control" required
                                        value={{ old('answer1') ? old('answer1') : $quiz->answer1 }}>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="answer2" class="form-control" required
                                        value={{ old('answer2') ? old('answer2') : $quiz->answer2 }}>
                                </div>
                                <div class="col-md-3 form-group">
                                    <input type="text" name="answer3" class="form-control" required
                                        value="{{ old('answer3') ? old('answer3') : $quiz->answer3 }}">

                                </div>

                                <div class="col-md-12 form-group">
                                    <label for="rightAnswer">
                                        <h3>الإجابة الصحيحة<span style="color:red;"> *</span></h3>
                                    </label>
                                    <input type="text" name="right_answer" class="form-control" id="answer"
                                        placeholder="السؤال" required
                                        value={{ old('right_answer') ? old('right_answer') : $quiz->right_answer }}>
                                </div>
                            </div>
                                         <div class="col-md-8 form-group">
                            <label for="explaination">شرح الإجابة </label>
                            <textarea class="mce" rows="5" cols="150" name="explaination">{!! old('explaination') ?  old('explaination') : $quiz->explaination !!}</textarea>
                   
                                
                        </div>
                    </div>
                </div>
                <div class="box-footer">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>
                </section>


                <!-- /.box-body -->

            </form>


        </div>

    </div>

</x-admin.layout>
