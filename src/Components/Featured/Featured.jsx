import React from 'react';
import Image from 'next/image';
import styles from './featured.module.css';


const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                رحلة في دهاليز الفكر الداكن واستكشاف   <br/> أغوار العقول والتأمل في أسرار الوجود الحياة الخفية
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/snono.jpg"
                            alt="Featured Image"
                            width={300}
                            height={600}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        سنونو واحد لا يصنع الربيع
                    </h1>
                    <p className={styles.postDesc}>
                        الجميلة والوقح أسفرت وسائل التناحر الاجتماعي عن انتشار إحدى مقاطع الفيديو لبرنامج المواعدات الظلامية لشاب وفتاة بدي منظورهم للحياة والحب غاية في الضيق والانحسار بالرغم من سعة فهمهم للواقع العملي والمادي. إلا أنني لا أرى أي ضير جراء انبثاق مثل تلك الصراعات الفيسبوكية من آن إلى آخر، بل تساهم أحيانا في بعض من إعادة النظر في تاريخ جنسنا الشقي حتما عبر العصور.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
