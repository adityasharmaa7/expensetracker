import React from 'react'
import './TransactionsBody.css'
import leftArrowIcon from "../../assets/leftArrow.svg";
import rightArrowIcon from "../../assets/rightArrow.svg";
import Button from '../Button/Button';
function PageNavigationBar({pages, updatePage}) {
  return (
       <div className='TransactionBar PageNavigateBar'>
            <Button 
            icon={leftArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === 1 ? "" : "shadow"} 
            clickFunction={()=> updatePage("left")}
            />
            <Button 
            text={pages.currentPage} 
            buttonSize="mediumButton" 
            background="backgroundDarkGreen" 
            />
            <Button 
            icon={rightArrowIcon} 
            buttonSize="smallButton" 
            background={pages.currentPage === pages.totalPages ? "" : "shadow"} 
            clickFunction={()=> updatePage("right")}
            />
        </div>
  )
}

export default PageNavigationBar
