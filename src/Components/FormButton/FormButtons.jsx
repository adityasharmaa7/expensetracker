import React from 'react'
import '../Modal/Modal.css'
import Button from '../Button/Button'
function FormButtons({text, toggleModal}) {
  return (
    <div className='formButtons'>
        <Button 
            text={text} 
            background="backgroundOrange" 
            buttonSize="largeButton"
            buttonType="submit"
        />
        <Button 
            text="Cancel" 
            background="backgroundWhite" 
            buttonSize="largeButton"
            clickFunction={toggleModal}
        />
    </div>
  )
}

export default FormButtons;
