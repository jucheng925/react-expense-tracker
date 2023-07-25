import React from 'react'
import { Link } from 'react-router-dom'

function MonthsList({months}) {

    const renderMonths = months.map((month) => {
      const dispYear = month.month_year.slice(-4) 
      const dispMonth = month.month_year.slice(0, -4)
      const capitalizedDispMonth = dispMonth.charAt(0).toUpperCase() + dispMonth.slice(1)
      return (
         <li key={month.id}>
         <Link to={`/months/${month.month_year}`}>{capitalizedDispMonth} {dispYear}</Link>
       </li>
      )
      });

  return (
     <ul>
        {/* {months.map(month => <Month key={month.id} month={month}/>)} */}
        {renderMonths}
     </ul>
  )
}

export default MonthsList