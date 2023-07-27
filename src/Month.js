import React, { useState, useEffect } from 'react'
import Expense from "./Expense"
import { Link, useParams } from "react-router-dom";

function Month() {
  const [expenses, setExpenses] = useState([])
  const params = useParams();

  useEffect(()=>{
      fetch(`http://localhost:3000/${params.monthyear}`)
      .then(resp => resp.json())
      .then(data => setExpenses(data))
    }, [params])

  return (
    <>
    <h1>Here are your expenses for the month.</h1>
    <Link to={`/months/${params.monthyear}/add`}>Add New Expense</Link>
    {expenses.map(expense => <Expense key={expense.id} expense={expense} />)}
   </>
  )
}

export default Month