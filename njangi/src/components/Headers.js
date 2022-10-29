import React from "react"
import Logo from "./Logo"

export default function Header({data: user}) {
  return (
    <div className="header">
        <div className="logo-box">
            <Logo />
        </div>
        <div className="user-info">
            <p>
            <span className="user-name">
            {user.name}
            </span>
            <span className="account-number">{user.accNo}</span>
            <span className="useremail">{user.email}</span>
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
