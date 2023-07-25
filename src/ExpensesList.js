import React from 'react'
import Expense from './Expense'

function ExpensesList({expenses}) {
  return (
    <div>
      Here are my expenses for this month.
      <li>{expenses.map(expense => <Expense key={expense.id} expense={expense} />)}</li>
    </div>
  )
}

export default ExpensesList
