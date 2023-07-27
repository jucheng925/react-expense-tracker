import React from 'react'
import Expense from './Expense'

function ExpensesList({expenses}) {
  return (
    <div>
      {expenses.map(expense => <Expense key={expense.id} expense={expense} />)}
    </div>
  )
}

export default ExpensesList
