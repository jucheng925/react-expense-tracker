import React, {useState, useEffect} from 'react'
import MonthsList from "./MonthsList"
import { Route } from "react-router-dom";
import Month from "./Month"


function MonthsPage() {
    const [months, setMonths] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/months")
        .then(resp => resp.json())
        .then(data => setMonths(data))
    }, [])


  return (
    <div>
      <MonthsList months={months} />
      <Route exact path="/months/:monthyear">
        <Month />
      </Route>
    </div>
  )
}

export default MonthsPage