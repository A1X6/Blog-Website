"use client"
import { useSession } from 'next-auth/react';
import styles from './writePage.module.css';
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from 'next/router';

const WritePage = () => {
    const { status } = useSession();

    const router = useRouter();
  
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
      }
    
      if (status === "authenticated") {
        router.push("/")
      }

    return (
        <div className={styles.container}>
            <input type='text' placeholder='Title' className={styles.input} />
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="Add" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <button className={styles.addButton}>
                            <Image src="/image.png" alt="Add Image" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/external.png" alt="Add External Link" width={16} height={16} />
                        </button>
                        <button className={styles.addButton}>
                            <Image src="/video.png" alt="Add Video" width={16} height={16} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                    className={styles.text}
                />
            </div>
            <button className={styles.publish}>Publish</button>
        </div>
    );
}

export default WritePage;
