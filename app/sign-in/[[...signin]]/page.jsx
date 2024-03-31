import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
   <div className="auth">
     
     <SignIn></SignIn>


   </div>
  )
}
