import React from 'react'
import ModalForm from './ModalForm';
import FormButtons from '../FormButton/FormButtons';
import './Modal.css'
function Modal({toggleModal, text, existingData}) {
  return (
    <div className='Modal'>
        <div className='modalBody' onClick={(e)=>e.stopPropagation()}>
            <div className='modalHead'>{text}</div>
            <ModalForm existingData={existingData} formType={text} toggleModal={toggleModal}/>
        </div>
      
    </div>
  )
}

export default Modal
