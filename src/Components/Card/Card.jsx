import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/snono.jpg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>10-11-2024 - </span>
          <span className={styles.category}>Category</span>
        </div>
        <Link href="#">
          <h1>
            رحلة في دهاليز الفكر الداكن واستكشاف أغوار العقول والتأمل في أسرار
            الوجود الحياة الخفية
          </h1>
        </Link>
        <p className={styles.desc}>
          الجميلة والوقح أسفرت وسائل التناحر الاجتماعي عن انتشار إحدى مقاطع
          الفيديو لبرنامج المواعدات الظلامية لشاب وفتاة بدي منظورهم للحياة والحب
          غاية في الضيق والانحسار بالرغم من سعة فهمهم للواقع العملي والمادي. إلا
          أنني لا أرى أي ضير جراء انبثاق مثل تلك الصراعات الفيسبوكية من آن إلى
          آخر، بل تساهم أحيانا في بعض من إعادة النظر في تاريخ جنسنا الشقي حتما
          عبر العصور.
        </p>
        <Link href="#" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
