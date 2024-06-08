import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/snono.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>سينما</span>
          <h3 className={styles.postTitle}>
            رحلة في دهاليز الفكر الداكن واستكشاف أغوار العقول والتأمل في أسرار
            الوجود الحياة الخفية
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Ahmed </span>
            <span className={styles.date}>10-10-2024</span>
          </div>
        </div>
      </Link>

      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/snono.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>سينما</span>
          <h3 className={styles.postTitle}>
            رحلة في دهاليز الفكر الداكن واستكشاف أغوار العقول والتأمل في أسرار
            الوجود الحياة الخفية
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Ahmed </span>
            <span className={styles.date}>10-10-2024</span>
          </div>
        </div>
      </Link>
      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/snono.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>سينما</span>
          <h3 className={styles.postTitle}>
            رحلة في دهاليز الفكر الداكن واستكشاف أغوار العقول والتأمل في أسرار
            الوجود الحياة الخفية
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Ahmed </span>
            <span className={styles.date}>10-10-2024</span>
          </div>
        </div>
      </Link>
      <Link href="#" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/snono.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>سينما</span>
          <h3 className={styles.postTitle}>
            رحلة في دهاليز الفكر الداكن واستكشاف أغوار العقول والتأمل في أسرار
            الوجود الحياة الخفية
          </h3>
          <div className={styles.details}>
            <span className={styles.username}>Ahmed </span>
            <span className={styles.date}>10-10-2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
