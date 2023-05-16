import React from "react";
import './Button.css'

const Button=({onClick,title})=>{


    return(
        <div>
            <button className="btn" onClick={onClick}>{title}</button>
        </div>
    )
}
export default Button