import React from 'react'
import Emoji from './Emoji'

function Summary({expenses}) {
  const allCategories = expenses.map(expense => expense.category)
  const filteredCategories= allCategories.filter((category, index) => allCategories.indexOf(category) === index)
  
  function totalAmount(category) {
    const expensesInThisCategory = expenses.filter(expense => expense.category === category)
    return expensesInThisCategory.reduce((accum, expense)=> expense.amount + accum, 0)
  }

  return (
    <div>
        <h3>Summary of Amount spent based on category</h3>
        <p>Total Amount: ${expenses.reduce((accum, expense) => expense.amount + accum, 0)} </p>
        {filteredCategories.map((category) =>
          <p key={category}>{category} <Emoji category={category}/>: ${totalAmount(category)}</p>
        )}
    </div>

  )
}

export default Summary