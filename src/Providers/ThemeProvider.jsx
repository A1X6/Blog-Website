"use client";

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/Context/ThemeContext';

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;

