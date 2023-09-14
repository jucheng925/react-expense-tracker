import React from 'react'
import Emoji from "./Emoji"
import { StyledExpense } from './styled/Body.styled'

function Expense({expense, onUpdateExpense}) {

  const handleClick = () => {
    fetch(`http://localhost:3000/expenses/${expense.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        necessary: !expense.necessary,
      }),
    })
      .then(res => res.json())
      .then(updatedItem => onUpdateExpense(updatedItem))
  }

  return (
    <StyledExpense>
      <h2>Description: {expense.description}</h2>
      <h4>Amount spent: ${expense.amount}</h4>
      <h5>{expense.category} <Emoji category={expense.category}/></h5>
      <button onClick={handleClick}>{expense.necessary ? "Necessary" : "Not Necessary"}</button>
    </StyledExpense>
  )
}

export default Expense
