import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import './bootstrap';
import 'tinymce/tinymce';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/content/default/content.min.css';
import 'tinymce/skins/content/default/content.css';
import 'tinymce/icons/default/icons';
import 'tinymce/themes/silver/theme';
import 'tinymce/models/dom/model';
import 'tinymce/plugins/preview/plugin';
import 'tinymce/plugins/importcss/plugin';
import 'tinymce/plugins/searchreplace/plugin';
import 'tinymce/plugins/autolink/plugin';
import 'tinymce/plugins/autosave/plugin';
import 'tinymce/plugins/save/plugin';
import 'tinymce/plugins/directionality/plugin';
import 'tinymce/plugins/code/plugin';
import 'tinymce/plugins/visualblocks/plugin';
import 'tinymce/plugins/visualchars/plugin';
import 'tinymce/plugins/fullscreen/plugin';
import 'tinymce/plugins/image/plugin';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/media/plugin';
import 'tinymce/plugins/codesample/plugin';
import 'tinymce/plugins/table/plugin';
import 'tinymce/plugins/charmap/plugin';
import 'tinymce/plugins/pagebreak/plugin';
import 'tinymce/plugins/nonbreaking/plugin';
import 'tinymce/plugins/anchor/plugin';
import 'tinymce/plugins/insertdatetime/plugin';
import 'tinymce/plugins/advlist/plugin';
import 'tinymce/plugins/lists/plugin';
import 'tinymce/plugins/wordcount/plugin';
import 'tinymce/plugins/help/plugin';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/quickbars/plugin';
import 'tinymce/plugins/emoticons/plugin';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/accordion/plugin';

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

