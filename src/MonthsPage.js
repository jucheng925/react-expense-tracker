import React, {useState, useEffect} from 'react'
import MonthsList from "./MonthsList"
import { Route, Switch } from "react-router-dom";
import Month from "./Month"
import ExpenseForm from './ExpenseForm';


function MonthsPage() {
    const [months, setMonths] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/months")
        .then(resp => resp.json())
        .then(data => setMonths(data))
    }, [])

    function capMonthandSpaceYear(monthYear) {
      const dispYear = monthYear.slice(-4) 
      const dispMonth = monthYear.slice(0, -4)
      const capitalizedDispMonth = dispMonth.charAt(0).toUpperCase() + dispMonth.slice(1)
      return (capitalizedDispMonth + " " + dispYear)
    }

  return (
    <div>
      <Switch>
        <Route exact path="/months/add">
          <ExpenseForm months={months} displayFunction={capMonthandSpaceYear}/>
        </Route>
        <Route path="/months/:monthyear">
          <Month />
        </Route>
        <Route path="/months/">
          <MonthsList months={months} displayFunction={capMonthandSpaceYear}/>
        </Route>
      </Switch>
    </div>
  )
}

export default MonthsPage