import React from 'react'
import { Link } from 'react-router-dom'

function MonthsList({months, displayFunction}) {
    const renderMonths = months.map((month) => (
         <li key={month.id}>
            <Link to={`/months/${month.month_year}`}>{displayFunction(month.month_year)}</Link>
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