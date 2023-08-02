import React from 'react'
import Summary from "./Summary"


function Home() {
  return (
    <div>
      <h1>Personal Expense Tracker</h1>
      <div>This tracker will organize and display a summary or detailed view on how much you are spending each month</div>
      <Summary />
    </div>
  )
}

export default Home
