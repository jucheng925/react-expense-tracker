import React, {useState, useEffect} from 'react'
import Month from "./Month"

function MonthsList() {
   const [months, setMonths] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/months")
        .then(resp => resp.json())
        .then(data => setMonths(data))
    }, [])

  return (
     <ul>
        {months.map(month => <Month key={month.id} month={month}/>)}
     </ul>
  )
}

export default MonthsList