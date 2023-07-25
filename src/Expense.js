import React from 'react'

function Expense({expense}) {
  return (
    <div>
      {expense.description}
    </div>
  )
}

export default Expense
