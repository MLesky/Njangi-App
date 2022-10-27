import React from "react"
import Logo from "./Logo"
import { useState } from "react"

export default function Header() {
    const [user, setUser] = useState(
        {
            'user_name': 'Jone Jones',
            'user_email': 'user@gmail.com',
            'user_accNo': '+237679784573',
            'profile_pic': 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/rmz1cix3ff-156%3A1855?alt=media&token=7280be61-e5ab-453f-ab0c-19c66f54b0fb'
        
        }
    )
  return (
    <div className="header">
        <div className="logo-box">
            <Logo />
        </div>
        <div className="user-info">
            <p>
            <span className="user-name">
            {user.user_name}
            </span>
            <span className="account-number">{user.user_accNo}</span>
            <span className="useremail">{user.user_email}</span>
            </p>
            <img
            src={user.profile_pic}
            alt="Not Found"
            className="profile_pic"
            />
        </div>
    </div>
  )
}
