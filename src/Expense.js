import React, {useState} from 'react'
import Emoji from "./Emoji"

function Expense({expense}) {
  const [isNecessary, setIsNecessary] = useState(expense.necessary)

  return (
    <>
    <h2>{expense.description}</h2>
    <h4>{expense.amount}</h4>
    <p>{expense.category} <Emoji category={expense.category}/></p>
    <button>{isNecessary ? "Necessary" : "Not Necessary"}</button>
    </>
  )
}

export default Expense
