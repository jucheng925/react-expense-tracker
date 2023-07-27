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


  return (
    <div>
      <MonthsList months={months} />
      <Switch>
        <Route exact path="/months/:monthyear/add">
          <ExpenseForm />
        </Route>
        <Route exact path="/months/:monthyear">
          <Month />
        </Route>
      </Switch>
    </div>
  )
}

export default MonthsPage