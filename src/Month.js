import React, { useState, useEffect } from 'react'
import ExpensesList from "./ExpensesList"
import { useParams } from "react-router-dom";

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
   {<ExpensesList expenses={expenses}/>}
   </>
  )
}

export default Month