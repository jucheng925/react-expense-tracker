import React, {useState, useEffect} from 'react'
import { Route, useRouteMatch } from "react-router-dom";
import MonthsList from "./MonthsList"
import Month from "./Month"

function MonthsPage() {
    const [months, setMonths] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/months")
        .then(resp => resp.json())
        .then(data => setMonths(data))
    }, [])

    const match = useRouteMatch();

  return (
    <div>
      <MonthsList months={months} />
      <Route path={`${match.url}/may2023`}>
        <Month />
      </Route>
    </div>
  )
}

export default MonthsPage