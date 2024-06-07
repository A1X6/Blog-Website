import React from 'react'
import styles from './CategoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';



const CategoryList =()=>{
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
            <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
                <Image src="/cinema.png" alt="cinema" width={32} height={32} className={styles.image}/>سينما
            </Link>
            <Link href={'/blog'} className={`${styles.category} ${styles.ShortStories}`}>
                <Image src="/stories.png" alt="ShortStories" width={32} height={32} className={styles.image}/>قصص قصيرة
            </Link>
            <Link href={'/blog'} className={`${styles.category} ${styles.poetry}`}>
                <Image src="/poetry.png" alt="poetry" width={32} height={32} className={styles.image}/>شعر
            </Link>
            <Link href={'/blog'}className={`${styles.category} ${styles.article}`}>
                <Image src="/article.jpg" alt="article" width={32} height={32} className={styles.image}/>مقالات
            </Link>
            <Link href={'/blog'} className={`${styles.category} ${styles.Heresies}`}>
                <Image src="/Heresies.png" alt="Heresies" width={32} height={32} className={styles.image}/>منوعات وهرطقات
            </Link>
        </div>
        </div>
    )
}
export default CategoryList;