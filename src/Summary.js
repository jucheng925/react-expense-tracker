import React from 'react'

function Summary({expenses}) {
  const allCategories = expenses.map(expense => expense.category)
  const filteredCategories= allCategories.filter((category, index) => allCategories.indexOf(category) === index)
  
  function totalAmount(category) {
    const expensesInThisCategory = expenses.filter(expense => expense.category === category)
    return expensesInThisCategory.reduce((accum, expense)=> expense.amount + accum, 0)
  }

  return (
    <div>
        <h3>I am Summary</h3>
        <p>Category Total Amount</p>
        {filteredCategories.map((category) =>
          <p key={category}>{category} {totalAmount(category)}</p>
        )}
    </div>

  )
}

export default Summary