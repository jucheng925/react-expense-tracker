import React from 'react'
import MonthsList from "./MonthsList"
import { Route, Switch } from "react-router-dom";
import Month from "./Month"
import ExpenseForm from './ExpenseForm';


function MonthsPage({expenses, onUpdateExpense, addNewExpense}) {

    const createMonthArray = () => {
      const monthArray = []
      expenses.forEach((expense)=> {
        if(!monthArray.includes(expense.month)) {
          monthArray.push(expense.month)
        }
      })
      return monthArray
    }

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
          <ExpenseForm months={createMonthArray()} displayFunction={capMonthandSpaceYear} addNewExpense={addNewExpense}/>
        </Route>
        <Route path="/months/:monthyear">
          <Month expenses={expenses} displayFunction={capMonthandSpaceYear} onUpdateExpense={onUpdateExpense}/>
        </Route>
        <Route exact path="/months/">
            <MonthsList months={createMonthArray()} displayFunction={capMonthandSpaceYear}/>
        </Route>
      </Switch>
    </div>
  )
}

export default MonthsPage