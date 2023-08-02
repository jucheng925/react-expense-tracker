import React from 'react'
import Emoji from "./Emoji"

function Expense({expense, onUpdateExpense}) {

  function handleClick() {
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
    <>
    <h2>{expense.description}</h2>
    <h4>{expense.amount}</h4>
    <p>{expense.category} <Emoji category={expense.category}/></p>
    <button onClick={handleClick}>{expense.necessary ? "Necessary" : "Not Necessary"}</button>
    </>
  )
}

export default Expense
