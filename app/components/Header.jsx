'use client'
import { UserButton, useUser , useAuth } from '@clerk/nextjs'
import React, { useState } from 'react'


export default function Header() {

  const { isLoaded, isSignedIn, user } = useUser();



  return (
    <div className="header">
      
       
       <div className="headerframe">

       <div className="left">
        <img src={'/CombiTicket.png'} width={50} height={90} alt="" />
        <div>Ticket Online</div>
       </div>
       <div className="right">
        <div className="footballer">ფეხბურთი</div>
        <div className="ufc">უეფსი</div>
        <div className="gama">გამა</div>
        <div className="movie">კინო</div>
        <div className="buyed">ჩემი ბილეთები</div>

        <div className="btns">
          {user? <div className=' flexavi  flex text-gray-300 '> {user.primaryEmailAddress.emailAddress}  <UserButton afterSignOutUrl='/' ></UserButton></div>  : <div className='flexavi flex' >            <div className="signin"><a href='sign-in' >შესვლა</a></div>
            <div className="signup"><a href='sign-up' >დარეგისტრირდი</a></div></div> }

        </div>

       </div>
       </div>
    
 
          
            
            
    </div>
  )
}
