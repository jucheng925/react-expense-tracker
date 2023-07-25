import React from 'react'

function Month({month}) {
  const dispYear = month.month_year.slice(-4) 
  const dispMonth = month.month_year.slice(0, -4)
  const capitalizedDispMonth = dispMonth.charAt(0).toUpperCase() + dispMonth.slice(1)
  return (
    <li>{capitalizedDispMonth} {dispYear}</li>
  )
}

export default Month