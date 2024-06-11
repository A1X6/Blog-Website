import styles from "./Comments.module.css";
import Link from "next/link"
import Image from "next/image"


const Comments = ()=>{
    const status = "authenticated"
    return(
        <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status ==="authenticated"?
        (<div className={styles.write}>
            <textarea placeholder="Write a comment..." className={styles.input}></textarea>
            <button className={styles.button}>Send</button>
        </div>)
        :(<Link href="/login"> Login to write a comments</Link>)}
        <div className={styles.comments}>
        <div className={styles.comment}>
         <div className={styles.user}>
            <Image src="/userImage.jpg" height={50} width={50}  className={styles.image} />
            <div className={styles.userInfo}>
                <span className={styles.userName}>Toqa Khalifa</span>
                <span className={styles.date}>01.01.2024</span>

            </div>
           </div>   
           <p className={styles.desc}>
            Eh el 7alawa dy &#128131;
           </p>
        </div>
        <div className={styles.comment}>
         <div className={styles.user}>
            <Image src="/userImage.jpg" height={50} width={50}  className={styles.image} />
            <div className={styles.userInfo}>
                <span className={styles.userName}>Toqa Khalifa</span>
                <span className={styles.date}>01.01.2024</span>

            </div>
           </div>   
           <p className={styles.desc}>
            3azeem fa45 &#128522;
           </p>
        </div>
        <div className={styles.comment}>
         <div className={styles.user}>
            <Image src="/userImage.jpg" height={50} width={50}  className={styles.image} />
            <div className={styles.userInfo}>
                <span className={styles.userName}>Toqa Khalifa</span>
                <span className={styles.date}>01.01.2024</span>

            </div>
           </div>   
           <p className={styles.desc}>
           ektb 3any please  &#10084;
           </p>
        </div>
        <div className={styles.comment}>
         <div className={styles.user}>
            <Image src="/userImage.jpg" height={50} width={50}  className={styles.image} />
            <div className={styles.userInfo}>
                <span className={styles.userName}>Toqa Khalifa</span>
                <span className={styles.date}>01.01.2024</span>

            </div>
           </div>   
           <p className={styles.desc}>
           Big kiss      &#128536;  

           </p>
        </div>
        </div>
        </div>
    )
}
export  default Comments