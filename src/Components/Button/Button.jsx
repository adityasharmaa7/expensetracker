import React from 'react'
import './Button.css'
function Button({
    text, 
    background,
    buttonSize, 
    icon, 
    clickFunction,
    buttonType
}) {
  return (
    <button 
        className={`Button ${buttonSize} ${background}`}
        onClick={clickFunction}
        type={buttonType}
        >
            {text || <img src={icon} />}
        </button>
  )
}

export default Button
