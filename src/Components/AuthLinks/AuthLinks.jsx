"use client"

import styles from './authLinks.module.css';
import Link from 'next/link';
import { useState } from 'react';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  // TEMP
  const status = "notauthenticated"; 

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/Login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/Write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/Login">Login</Link>
          ) : (
            <>
              <Link href="/Write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
