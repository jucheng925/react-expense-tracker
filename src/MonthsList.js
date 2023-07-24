import React, {useState, useEffect} from 'react'

function MonthsList() {
    // useEffect(() => {
    //     fetch("http://localhost:3000/")
    //     .then(resp => resp.json())
    //     .then(data => console.log(data))
    // }, [])

  return (
     <ul>
        <li>May 2023</li>
        <li>June 2023</li>
     </ul>
  )
}

export default MonthsList