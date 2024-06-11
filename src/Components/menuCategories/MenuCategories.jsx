import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        سينما
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.ShortStories}`}>
        قصص قصيرة
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.poetry}`}>
        شعر
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.article}`}>
        مقالات
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.Heresies}`}>
        تأملات وهرطقات
      </Link>
    </div>
  );
};

export default MenuCategories;

