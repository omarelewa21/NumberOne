<x-admin.layout>

    <x-slot:heading>إنشاء درس</x-slot:heading>
    <div class="box box-primary">
        <x-admin.box-header action="/admin/books/search/ " />
        <div class="box-body">

            <form role="form" action="/admin/lessons" method="POST">
                @csrf
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
                    <div class="col-md-2">

                        <label for="book_id">@lang('admin.lessons.book') <span style="color:red;"> *</span></label>
                        <select class="form-control select2" style="width: 100%;height:100%" name="book_id" required>
                            <option selected name = "book_id"></option>
                            @foreach ($books as $book)
                                <option value = "{{ $book->id }}"
                                    {{ $book->id = old('book_id') ? 'selected' : '' }}>{{ $book->title }}</option>
                            @endforeach
                        </select>
                        @error('lesson_id')
                            <span class="text-red-600 text-sm">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="name">الموضوع<span style="color:red;"> *</span></label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="الموضوع"
                            value="{{ old('name') }}">
                    </div>
                    <div class="col-md-8 form-group">
                        <label for="short_title">نظرة عامة<span style="color:red;"> *</span></label>
                    </div>

                    <div class="col-md-8 form-group">
                        <input type="text" name="short_title" class="form-control" id="short_title"
                            placeholder="نظرة عامة" value="{{ old('short_title') }}" required>
                    </div>
                    <div class="row d-block"
                        style='display:block; margin-top: 30px; margin-bottom:30px; clear: both;text-decoration: underline;'>
                        <h3>أقسام الدرس</h3>
                    </div>
                    <div id="sectionsContainer" class="row">
                        <div class="col-md-8 form-group">
                            <label for="section[0]title">قسم الدرس<span style="color:red;"> *</span></label>
                            <input type="text" name="section[0][title]" class="form-control" placeholder="قسم الدرس"
                                value="{{ old('section[0][title]') }}" required>
                        </div>
                        <div class="col-md-2" style="padding-top: 30px;">
                            <button type = "button" id = "add" name="add"
                                class="btn btn-success align-self-center">إضافة قسم جديد</button>
                        </div>
                        <div class="col-md-8 form-group">
                            <label for="section[0]content">المحتوى <span style="color:red;"> *</span></label>
                            <textarea rows="5" cols="150" name="section[0][content]" id="Newtest" class="tinyMce"
                                value ="{{ old('section[0][content]') }}"></textarea>
                        </div>
                        <div class="sectionBordered"></div>

                    </div>

                    <div class="col-md-8 form-group">
                        <label for="active">منشور <span style="color:red;"> *</span></label>
                        <input type="checkbox" name="active" value="1" checked>
                    </div>

                </div>
                <!-- /.box-body -->
                 <!--<script src="https://cdn.tiny.cloud/1/0z7ph6p2o1o7p0xsicaunms98ru9zwydnzg8sa6iqho6jfc6/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>-->
                <script>
                $(document).ready(function(){
                    tinymce.init({
        selector: 'textarea',
        license_key: '0z7ph6p2o1o7p0xsicaunms98ru9zwydnzg8sa6iqho6jfc6',
    
        /* TinyMCE configuration options */
        skin: false,
        content_css: false,
        plugins: [
            // Core editing features
            'preview', 'importcss', 'searchreplace', 'autolink', 'autosave', 'save', 'directionality', 'code', 'visualblocks', 'visualchars', 'fullscreen', 'image', 'link', 'media', 'codesample', 'table', 'charmap', 'pagebreak', 'nonbreaking', 'anchor', 'insertdatetime', 'advlist', 'lists', 'wordcount', 'help', 'quickbars', 'emoticons', 'accordion'
        ],
        menubar: ['file', 'edit', 'view', 'insert', 'format', 'tools', 'table', 'help'],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        // tinycomments_mode: 'embedded',
        // tinycomments_author: 'Author name',
    
    });
        //             console.log('ínitialingg');
        //             tinymce.init({
        //     selector: 'textarea',
        //     license_key: 'gpl',
        
        //     /* TinyMCE configuration options */
        //     skin: false,
        //     content_css: false,
        //     plugins: [
        //         // Core editing features
        //         'preview', 'importcss', 'searchreplace', 'autolink', 'autosave', 'save', 'directionality', 'code', 'visualblocks', 'visualchars', 'fullscreen', 'image', 'link', 'media', 'codesample', 'table', 'charmap', 'pagebreak', 'nonbreaking', 'anchor', 'insertdatetime', 'advlist', 'lists', 'wordcount', 'help', 'quickbars', 'emoticons', 'accordion'
        //     ],
        //     menubar: ['file', 'edit', 'view', 'insert', 'format', 'tools', 'table', 'help'],
        //     toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        //     // tinycomments_mode: 'embedded',
        //     // tinycomments_author: 'Author name',
        
        
        });
       
                        
                   

  console.log('ínitialingg');
                // });
                    var i = 0;
                    $('#add').click(function() {
                        i++;
                        $("div#sectionsContainer").append(`
                            <div class="row section">
                        <div class="col-md-8 form-group">
                            <label for="section[` + i + `]title">قسم الدرس<span style="color:red;"> *</span></label>
                            <input type="text" name="section[` + i + `][title]" class="form-control"
                                placeholder="قسم الدرس"  required>
                        </div>
                        <div class="col-md-2" style="padding-top: 30px;">
                            <button type = "button"  name="remove"
                                class="btn btn-danger align-self-center remove">حذف</button>
                        </div>
                        <div class="col-md-8 form-group">
                            <label for="section[` + i + `]content">المحتوى <span style="color:red;"> *</span></label>
                               <textarea rows="5" cols="150" name="section[` + i + `][content]" class="tinyMce cke_required">
                           </textarea>
                            </div>
                    </div>
  <hr>
                            `);
                            console.log("Initializing TinyMCE...");
                        tinymce.init({
                            selector: 'textarea',
                                license_key: 'gpl',
                            
                                /* TinyMCE configuration options */
                                skin: false,
                                content_css: false,
                                plugins: [
                                    // Core editing features
                                    'preview', 'importcss', 'searchreplace', 'autolink', 'autosave', 'save', 'directionality', 'code', 'visualblocks', 'visualchars', 'fullscreen', 'image', 'link', 'media', 'codesample', 'table', 'charmap', 'pagebreak', 'nonbreaking', 'anchor', 'insertdatetime', 'advlist', 'lists', 'wordcount', 'help', 'quickbars', 'emoticons', 'accordion'
                                ],
                                menubar: ['file', 'edit', 'view', 'insert', 'format', 'tools', 'table', 'help'],
                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                // tinycomments_mode: 'embedded',
                                // tinycomments_author: 'Author name',
                        });
                    });
                    $(document).on('click', '.remove', function() {
                        $(this).parents("div.section").remove();
                    });
                </script>

                <div class="box-footer col-md-12" style="clear: both;">
                    <button type="submit" class="btn btn-primary">@lang('admin.form.save')</button>
                </div>
            </form>


        </div>

    </div>
</x-admin.layout>
