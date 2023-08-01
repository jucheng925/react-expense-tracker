import React from 'react'
import { Link } from 'react-router-dom'

function MonthsList({months, displayFunction}) {
    const renderMonths = months.map((month) => (
         <li key={month}>
            <Link to={`/months/${month}`}>{displayFunction(month)}</Link>
         </li>
         )
      );

  return (
      <>
         <p>Select the month that you will like to know about</p>
         <ul>
            {renderMonths}
         </ul>
     </>
  )
}

export default MonthsList