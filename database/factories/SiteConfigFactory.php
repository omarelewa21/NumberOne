<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiteConfig>
 */
class SiteConfigFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'about' => '<p>افضل واسهل تطبيق عربي مجاني للكتابة على الصور ونشرها مباشرة وبكل سهولة الى الانستقرام
                            والفيسبوك و الوتسابة و السناب جات وغيرهابرنامج ممتع جداً ويدعم اللغة العربية والانجليزية.
                        </p>',
            'privacy-policy' => '<div class="et_pb_text_inner"><h2>سياسة الاستخدام</h2>
<p>يتوجب عليكم الموافقة على هذه البنود (“الأحكام”) للدخول إلى هذا الموقع وتصفحه و/أو استخدامه. في حال عدم الموافقة على هذه الأحكام يتوجب عليكم مغادرة الموقع.</p>
<p>أولا: الوصول إلى الموقع</p>
<p>يصرح بالدخول إلى الموقع على أساس مؤقت ونحتفظ بحق سحب أو تعديل الموقع دون أي إشعار. لن نكون مسؤولين في حال عدم عمل الموقع لأي سبب في أي وقت أو لأية فترة.</p>
<p>نقوم بجمع واستخدام المعلومات الشخصية وفق سياسة الخصوصية المعلنة بالموقع. نحتفظ دائما بحق منع استخدامكم للموقع وفق ما يراه القائمين من إخلال لاستخدام الخدمة المقدمة.</p>
<p>ثانيا: الاستخدام غير المصرح به</p>
<p>يجوز لكم استخدام هذا الموقع فقط لأغراض قانونية. ولا يجوز لكم استخدام الموقع فى حال شمل الاستخدام اى من الحالات التالية:</p>
<ul>
<li>إخلال بأية طريقة بأي قانون أو لائحة نافذة محلية أو وطنية أو دولية؛</li>
<li>استخدام غير قانوني أو بطريقة احتيالية أو لها أي غرض أو تأثير غير قانوني أو احتيالي؛</li>
<li>افترائية على أي شخص أو فاحشة أو مهينة أو مكروهة أو تحريضية؛</li>
<li>ترويج لأية مواد جنسية فاضحة أو تمييز من أي نوع؛ أوتنقل أو تتسبب في إرسال أية مواد دعائية أو ترويجية غير مرغوبة أو غير مصرح بها أو أي شكل أخر من المواد غير المرغوب بها (spam).</li>
</ul>
<p>ثالثا: سياسة التسجيل</p>
<p>سنقوم بمراقبة المحتويات على هذا الموقع للتأكد من أنها متوافقة مع هذه الأحكام وأنها لا تخل بفقرة الاستخدام غير المصرح به.</p>
<p>رابعا: حقوق الملكية الفكرية</p>
<p>جميع العلامات التجارية المذكورة بالموقع هي ملك لأصحابها ما لم يعلن غير ذلك، هذا الموقع محمي بحقوق النسخ والعلامات التجارية والبيانات وحقوق الملكية الفكرية ويتوجب عليكم الإقرار بأن هذه الحقوق هي جزء من الموقع وتبقى هذه الحقوق خاصة بنا أو بالمرخصين لنا.</p>
<p>سادسا: المسؤولية القانونية</p>
<p>لا نتحمل ولا بأي شكل من الأشكال مسؤولية أية محتويات أو خسائر أو أضرار من أي نوع كانت والتي يتم تكبدها نتيجة استخدام أي محتوى سواء تم نشره أو إرساله عن طريق البريد الالكتروني أو نقله أو تم توفيره بطريقة أخرى في هذا الموقع الالكتروني.</p>
<p>لا نتحمل مسؤولية (سواء بخصوص الإخلال بالعقد أو الإهمال أو أية مسؤولية أخرى تنشأ بموجب أو بخصوص استخدامكم للموقع الالكتروني) أية أعمال نقوم بها أو يقوم بها أي شخص يعمل لدينا باستثناء إلى الحد الذي لا تستثنى به هذه المسؤولية بموجب قانون الامارات العربية المتحدة.</p>
<p>تقرون بأننا لا نتحمل مسؤولية أمن أو سرية الموقع الالكتروني وأية معلومات تقومون بتقديمها إلى الموقع. تتحملون مسؤولية المخاطر المرتبطة باستخدام شبكة الانترنت.</p>
<p>سابعا: القانون الحاكم والاختصاص القضائي</p>
<p>تخضع الشروط والأحكام في هذه الاتفاقية للقوانين في الإمارات العربية المتحدة.</p>
<h2>سياسة الخصوصية</h2>
<p>نقدر مخاوفكم واهتمامكم بشأن خصوصية بياناتكم على شبكة الإنترنت.</p>
<p>لقد تم إعداد هذه السياسة لمساعدتكم في تفهم طبيعة البيانات التي نقوم بتجميعها منكم عند زيارتكم لموقعنا على شبكة الانترنت وكيفية تعاملنا مع هذه البيانات الشخصية.</p>
<p>التصفح</p>
<p>لم نقم بتصميم هذا الموقع من أجل تجميع بياناتك الشخصية من جهاز الكمبيوتر الخاص بك أثناء تصفحك لهذا الموقع, وإنما سيتم فقط استخدام البيانات المقدمة من قبلك بمعرفتك ومحض إرادتك.</p>
<p>عنوان بروتوكول شبكة الإنترنت (IP)</p>
<p>في أي وقت تزور فيه اي موقع انترنت بما فيها هذا الموقع , سيقوم السيرفر المضيف بتسجيل عنوان بروتوكول شبكة الإنترنت &nbsp; (IP) الخاص بك , تاريخ ووقت الزيارة ونوع متصفح الإنترنت الذي تستخدمه والعنوان URL الخاص بأي موقع من مواقع الإنترنت التي تقوم بإحالتك إلى الى هذا الموقع على الشبكة.</p>
<p>عمليات المسح على الشبكة</p>
<p>إن عمليات المسح التي نقوم بها مباشرة على الشبكة تمكننا من تجميع بيانات محددة مثل البيانات المطلوبة منك بخصوص نظرتك وشعورك تجاه موقعنا.تعتبر ردودك ذات أهمية قصوى , ومحل تقديرنا حيث أنها تمكننا من تحسين مستوى موقعنا, ولك كامل الحرية والإختيار في تقديم البيانات المتعلقة بإسمك والبيانات الأخرى.</p>
<p>الروابط بالمواقع الأخرى على شبكة الإنترنت</p>
<p>قد يشتمل موقعنا على روابط بالمواقع الأخرى على شبكة الإنترنت. او علانات من مواقع اخرى ولا نعتبر مسئولين عن أساليب تجميع البيانات من قبل تلك المواقع, يمكنك الاطلاع على سياسات السرية والمحتويات الخاصة بتلك المواقع التي يتم الدخول إليها من خلال أي رابط ضمن هذا الموقع.</p>
<p>نحن قد نستعين بشركات إعلان لأطراف ثالثة لعرض الإعلانات عندما تزور موقعنا على الويب. يحق لهذه الشركات أن تستخدم معلومات حول زياراتك لهذا الموقع ولمواقع الويب الأخرى (باستثناء الاسم أو العنوان أو عنوان البريد الإلكتروني أو رقم الهاتف)، وذلك من أجل تقديم إعلانات حول البضائع والخدمات التي تهمك. إذا كنت ترغب في مزيد من المعلومات حول هذا الأمر وكذلك إذا كنت تريد معرفة الاختيارات المتاحة لك لمنع استخدام هذه المعلومات من قِبل هذه الشركات ، فالرجاء النقر هنا.</p>
<p>إفشاء المعلومات</p>
<p>سنحافظ في كافة الأوقات على خصوصية وسرية كافة البيانات الشخصية التي نتحصل عليها. ولن يتم إفشاء هذه المعلومات إلا إذا كان ذلك مطلوباً بموجب أي قانون أو عندما نعتقد بحسن نية أن مثل هذا الإجراء سيكون مطلوباً أو مرغوباً فيه للتمشي مع القانون , أو للدفاع عن أو حماية حقوق الملكية الخاصة بهذا الموقع أو الجهات المستفيدة منه.</p>
<p>البيانات اللازمة لتنفيذ المعاملات المطلوبة من قبلك</p>
<p>عندما نحتاج إلى أية بيانات خاصة بك , فإننا سنطلب منك تقديمها بمحض إرادتك. حيث ستساعدنا هذه المعلومات في الاتصال بك وتنفيذ طلباتك حيثما كان ذلك ممكنناً. لن يتم اطلاقاً بيع البيانات المقدمة من قبلك إلى أي طرف ثالث بغرض تسويقها لمصلحته الخاصة دون الحصول على موافقتك المسبقة والمكتوبة ما لم يتم ذلك على أساس أنها ضمن بيانات جماعية تستخدم للأغراض الإحصائية والأبحاث دون اشتمالها على أية بيانات من الممكن استخدامها للتعريف بك.</p>
<p>عند الاتصال بنا</p>
<p>سيتم التعامل مع كافة البيانات المقدمة من قبلك على أساس أنها سرية . تتطلب النماذج التي يتم تقديمها مباشرة على الشبكة تقديم البيانات التي ستساعدنا في تحسين موقعنا. سيتم استخدام البيانات التي يتم تقديمها من قبلك في الرد على كافة استفساراتك , ملاحظاتك , أو طلباتك من قبل هذا الموقع أو أيا من المواقع التابعة له .</p>
<p>إفشاء المعلومات لأي طرف ثالث</p>
<p>لن نقوم ببيع , المتاجرة , تأجير , أو إفشاء أية معلومات لمصلحة أي طرف ثالث خارج هذا الموقع, أو المواقع التابعة له.وسيتم الكشف عن المعلومات فقط في حالة صدور أمر بذلك من قبل أي سلطة قضائية أو تنظيمية.</p>
<p>التعديلات على سياسة سرية وخصوصية المعلومات</p>
<p>نحتفظ بالحق في تعديل بنود وشروط سياسة سرية وخصوصية المعلومات إن لزم الأمر ومتى كان ذلك ملائماً. سيتم تنفيذ التعديلات هنا او على صفحة سياسة الخصوصية الرئيسية وسيتم بصفة مستمرة إخطارك بالبيانات التي حصلنا عليها , وكيف سنستخدمها والجهة التي سنقوم بتزويدها بهذه البيانات.</p>
<p>الاتصال بنا</p>
<p>يمكنكم الاتصال بنا عند الحاجة من خلال الضغط على رابط التواصل المتوفر في روابط موقعنا او الارسال الى بريدنا الالكتروني info@jahiza.com</p>
<p>اخيرا</p>
<p>إن مخاوفك واهتمامك بشأن سرية وخصوصية البيانات تعتبر مسألة في غاية الأهمية بالنسبة لنا. نحن نأمل أن يتم تحقيق ذلك من خلال هذه السياسة.</p></div>',
            'phone' => '0541359655',
            'email' => 'example@mail.com',
            'address' => 'جدة , المملكة العربية السعودية'
        ];
    }
}