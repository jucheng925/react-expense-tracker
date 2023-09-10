import React from 'react'
import MonthsList from "./MonthsList"
import { Route, Switch } from "react-router-dom"
import Month from "./Month"

function MonthsPage({expenses, onUpdateExpense, months, displayFunction}) {
  
  return (
    <div>
      <Switch>
        <Route path="/months/:monthyear">
          <Month expenses={expenses} displayFunction={displayFunction} onUpdateExpense={onUpdateExpense}/>
        </Route>
        <Route exact path="/months/">
          <MonthsList months={months} displayFunction={displayFunction}/>
        </Route>
      </Switch>
    </div>
  )
}


export default MonthsPage