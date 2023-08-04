import React from 'react'
import Summary from "./Summary"


function Home({expenses}) {
  return (
    <div>
      <p>This tracker will organize and display a summary or detailed view on how much you are spending each month</p>
      <Summary expenses={expenses}/>
    </div>
  )
}

export default Home
