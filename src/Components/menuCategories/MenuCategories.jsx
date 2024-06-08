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
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        قصص قصيرة
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        شعر
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        مقالات
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        منوعات وهرطقات
      </Link>
    </div>
  );
};

export default MenuCategories;
