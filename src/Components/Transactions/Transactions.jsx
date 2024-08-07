import React from 'react'
import './Transactions.css'
import TransactionsBody from '../TransactionBody/TransactionsBody'
function Transactions() {
  return (
    <div className='Transactions'>
            <h2>Recent Transactions</h2>
            <TransactionsBody/>
    </div>
  )
}

export default Transactions
