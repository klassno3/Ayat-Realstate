import React from 'react'
import {Link} from "react-router-dom"
const Button = ({type}) => {
  return (
    <div>
      <Link to="/register"
         className={
          "px-14 py-3 rounded-md tracking-widest " +
          (type === "solid"
            ? "bg-primary-200 border-2 text-secondary-100 text-xl border-primary-200"
            : "border-2 border-primary-200 text-xl text-primary-200")
        }
       
      
      >{type==="solid" ? "REGISTER":"SHARE FORM"}</Link>
    </div>
  )
}

export default Button
