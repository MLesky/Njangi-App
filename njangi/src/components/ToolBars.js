import React from "react"
import home_icon from './assets/images/home_icon.svg'

export default function SimpleToolbar() {
  return (
    <div className="toolbar">
        <img src={home_icon}
        alt="Not Found"
        className="icon"/>
        <p className="title">HOME</p>
    </div>
  )
}