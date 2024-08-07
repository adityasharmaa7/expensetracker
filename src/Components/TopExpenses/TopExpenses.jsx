import React from 'react'
import '../Transactions/Transactions.css'
import TopExpenseBody from '../TopExpenseBody/TopExpenseBody'
function TopExpenses() {
  return (
    <div className='Transactions'>
        <h2>Top Expenses</h2>
        <TopExpenseBody />
    </div>
  )
}

export default TopExpenses
