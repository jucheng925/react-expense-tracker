import React from 'react'
import Summary from "./Summary"


function Home({expenses}) {
  return (
    <div>
      <p>This tracker will organize and display a summary of how much you are spending each month. Select on the Months tab for more details. </p>
      <Summary expenses={expenses}/>
    </div>
  )
}

export default Home
