import React, {useState, useEffect} from 'react'
import MonthsList from "./MonthsList"
import { Route, Switch } from "react-router-dom";
import Month from "./Month"
import ExpenseForm from './ExpenseForm';


function MonthsPage() {
    const [months, setMonths] = useState([])
    const [expenses, setExpenses] = useState({})

    useEffect(() => {
        fetch("http://localhost:3000/expenses")
        .then(resp => resp.json())
        .then(data => {
          setExpenses(data)
          createMonthArray(data)})
    }, [])

    function createMonthArray(data) {
      const monthArray = []
      data.forEach((expense)=> {
        if(!monthArray.includes(expense.month)) {
          monthArray.push(expense.month)
        }
      })
      setMonths(monthArray)
    }

    function capMonthandSpaceYear(monthYear) {
      const dispYear = monthYear.slice(-4) 
      const dispMonth = monthYear.slice(0, -4)
      const capitalizedDispMonth = dispMonth.charAt(0).toUpperCase() + dispMonth.slice(1)
      return (capitalizedDispMonth + " " + dispYear)
    }

    function addNewExpense(newExpense) {
      setExpenses([...expenses, newExpense])
    }

    function handleUpdateExpense(updatedExpense) {
      const updatedExpenses = expenses.map((expense) => {
        if (expense.id === updatedExpense.id) {
          return updatedExpense;
        } else {
          return expense;
        }
      });
      setExpenses(updatedExpenses)
    }


  return (
    <div>
      <Switch>
        <Route exact path="/months/add">
          <ExpenseForm months={months} displayFunction={capMonthandSpaceYear} addNewExpense={addNewExpense}/>
        </Route>
        <Route path="/months/:monthyear">
          <Month expenses={expenses} displayFunction={capMonthandSpaceYear} onUpdateExpense={handleUpdateExpense}/>
        </Route>
        <Route path="/months/">
          <MonthsList months={months} displayFunction={capMonthandSpaceYear}/>
        </Route>
      </Switch>
    </div>
  )
}

export default MonthsPage