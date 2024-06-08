"use client";

import { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/Context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <Image src="/moon.png" alt="DarkMode" width={14} height={14}/>
      <div 
        className={styles.ball} 
        style={theme === "dark" ? { transform: 'translateX(20px)', backgroundColor: "#fff" } : { transform: 'translateX(0px)', backgroundColor: "#0d1f23" }}>
      </div>
      <Image src="/sun.png" alt="LightMode" width={14} height={14}/>
    </div>
  );
};

export default ThemeToggle;
