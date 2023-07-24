import React from 'react'
import MonthsList from "./MonthsList"

function Home() {
  return (
    <div>
      <h1>Personal Expense Tracker</h1>
      <p>Select the month that you will like to know about</p>
      <MonthsList />
    </div>
  )
}

export default Home
