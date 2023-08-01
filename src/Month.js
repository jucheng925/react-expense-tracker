import React, { useState, useEffect } from 'react'
import Expense from "./Expense"
import { Link, useParams } from "react-router-dom";

function Month({expenses}) {
  const [monthExpenses, setMonthExpenses] = useState([])
  const params = useParams();

  const filterExpenses = expenses.filter(expense => expense.month === params.monthyear)
  setMonthExpenses(filterExpenses)
  
  return (
    <>
    <h1>Here are your expenses for the month.</h1>
    <Link to={`/months/add`}>Add New Expense</Link>
    {monthExpenses.map(expense => <Expense key={expense.id} expense={expense} />)}
   </>
  )
}

export default Month