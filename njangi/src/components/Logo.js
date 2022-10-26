import React from "react"
import logo from './assets/images/logo.svg'

export default function Logo() {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Not Found"
        className="logo-icon"
      />
      <p className="app-name">NG-AIDER</p>
    </div>
  )
}