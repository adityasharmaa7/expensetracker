import React from 'react'
import './AppBody.css'
import Transactions from '../Transactions/Transactions'
import TopExpenses from '../TopExpenses/TopExpenses'
function AppBody() {
  return (
    <div className='AppBody'>
            <Transactions />
            <TopExpenses/>
        </div>
  )
}

export default AppBody
