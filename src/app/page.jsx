"use client";

import React from 'react'
import { signInWithGoogle } from '@/utils/firebase'

const page = () => {

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('-------------------')
      console.log(user)
      console.log('-------------------')
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <h1>LOGIN SYSTEM</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default page