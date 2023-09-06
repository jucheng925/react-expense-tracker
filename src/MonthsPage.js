import React from 'react'
import MonthsList from "./MonthsList"
import { Route, Switch } from "react-router-dom"
import Month from "./Month"
import ExpenseForm from './ExpenseForm'


function MonthsPage({expenses, onUpdateExpense, onAddExpense}) {
  
  let monthArray = []
  expenses.forEach((expense)=> {
    if(!monthArray.includes(expense.month)) {
        monthArray.push(expense.month)
      }
    })

  
  function capMonthandSpaceYear(monthYear) {
    const dispYear = monthYear.slice(-4) 
    const dispMonth = monthYear.slice(0, -4)
    const capitalizedDispMonth = dispMonth.charAt(0).toUpperCase() + dispMonth.slice(1)
    return (capitalizedDispMonth + " " + dispYear)
  }

  return (
    <div>
      <Switch>
        <Route path="/months/add">
          <ExpenseForm months={monthArray} displayFunction={capMonthandSpaceYear} onAddExpense={onAddExpense}/>
        </Route>
        <Route path="/months/:monthyear">
          <Month expenses={expenses} displayFunction={capMonthandSpaceYear} onUpdateExpense={onUpdateExpense}/>
        </Route>
        <Route exact path="/months/">
          <MonthsList months={monthArray} displayFunction={capMonthandSpaceYear}/>
        </Route>
      </Switch>
    </div>
  )
}


export default MonthsPage