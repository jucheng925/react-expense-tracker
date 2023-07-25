import React, { useState, useEffect } from 'react'
import ExpensesList from "./ExpensesList"

function Month({month}) {
  // const [expenses, setExpenses] = useState([])

  
  // useEffect(()=>{
  //   fetch(`http://localhost:3000/${month.month_year}`)
  //   .then(resp => resp.json())
  //   .then(data => setExpenses(data))
  // }, [])


  return (
    <h1>Hello</h1>
    // <ExpensesList expenses={expenses}/>
  )
}

export default Month