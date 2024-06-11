import Menu from '@/Components/Menu/Menu';
import Comments from '@/Components/Comments/Comments';
import styles from './singlePage.module.css';
import Image from "next/image"
const SinglePage =()=>{
    return(
        <div className={styles.container}>
          <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}> سنونو واحد لا يصنع الربيع</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                <Image src="/userImage.jpg" alt="" fill className={styles.avatar} />
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.userName}>Toqa Khalifa</span>
                    <span className={styles.date}>01.01.2024</span>

                </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/snono.jpg" alt="" fill className={styles.image} />
          </div>

          </div>
          <div className={styles.content}>
          <div className={styles.post}>
          <div className={styles.description}>
          <p>كان ولا يزال عالمنا يحاكي أسطورته المفضلة عن نصف البرتقالة التي قد أخذت أشكالا متعددة على مر العصور، مما يؤكد كيف لتاريخنا أن يكون غريباً ونافذ الرؤية في آن واحد. تجاوزت تلك الاسطورة الشيقة نظائرها التاريخية والدينية من الأسفار والجدالات القصصية والأسطورية الواسعة حول بداية الخلق الإنساني، لتتضمن مفهومها الأبدي الخاص حول تلك الرحلة الوجودية الملحمية. حيث كائن ليس بذكرا او بأنثي يتربع فوق عروش البسيطة معتدا بذاته الممتلئة، بوفرة ما ازدوج بها من أعضاء حيث وجهين وأربعة أيدي و أربعة سيقان وأعضاء تناسلية مزدوجة الي اخره، ملأته تلك الوفرة الخلقية بالغرور والتبجح على الآلهة متسلقا بذلك إلى أعالي السماء معلنا الثورة والتحدي ، تشير الأسطورة بحيرة جموع الآلهة آنذاك حول ما يجب فعله بهذه الكائنات المتمردة فإما إبادة ذلك الجنس وخسران القرابين، أو أن تتسامح مع تلك الفظاظة والصلف وهو أمر غير وارد القبول. وأمر  زيوس  المعروف بكبير الآلهة اليونانية حينها بإضعاف هذا الكائن ومعاقبته وذلك بقسمته إلى قسمين كما تفصل يديك الناعمتين، في إحدى ليالي الشتاء الباردة، تلك البرتقالة الى نصفين. وتولي أبوللو فيما بعد إعادة ترتيب تلك الأعضاء وترميم الأجساد المتناثرة فقام بتجميع جلود البطن وربطها بحبل من خلال تلك الفتحة الصغيرة المسماه بال سرة ثم أدار الوجوه ناحية القطع، حتى يظل الإنسان محتفظا بذكري عقابه أمام عينيه ويصير أكثر خزيا. عاش البشر مشوهين وهم أنصاف في محاولة بدت دون جدوى للبحث عن أنصافهم الأخري ليتحدوا معها فيتبادلوا القبل</p>

            </div>
            <div className={styles.comment}>
              <Comments />
            </div>
          </div>
          <Menu />
          </div>

        </div>
    )
}
export default SinglePage
