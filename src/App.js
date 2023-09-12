import { Route, Switch } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import Home from "./Home"
import NavBar from "./NavBar"
import MonthsList from "./MonthsList"
import Month from "./Month"
import ExpenseForm from './ExpenseForm'
import { StyledHeader } from "./styled/Header.styled"
import { StyledBody } from "./styled/Body.styled"



function App() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/expenses")
      .then(resp => resp.json())
      .then(data => setExpenses(data))
  }, [])
  
  function handleAddExpense(newExpense) {
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

  // to filter out the months using the expenses data
  let monthArray = []
  expenses.forEach((expense)=> {
    if(!monthArray.includes(expense.month)) {
        monthArray.push(expense.month)
      }
    })

  //to display the months in specific format of capitalize month space year
  function capMonthandSpaceYear(monthYear) {
    const dispYear = monthYear.slice(-4) 
    const dispMonth = monthYear.slice(0, -4)
    const capitalizedDispMonth = dispMonth.charAt(0).toUpperCase() + dispMonth.slice(1)
    return (capitalizedDispMonth + " " + dispYear)
  }

  return (
    <>
      <StyledHeader>
        <h1>Personal Expense Tracker</h1>
        <NavBar />
      </StyledHeader>
      <StyledBody>
        <Switch>
        <Route path="/add">
          <ExpenseForm months={monthArray} displayFunction={capMonthandSpaceYear} onAddExpense={handleAddExpense}/>
        </Route>
        <Route path="/months/:monthyear">
          <Month expenses={expenses} displayFunction={capMonthandSpaceYear} onUpdateExpense={handleUpdateExpense}/>
        </Route>
        <Route exact path="/months">
          <MonthsList months={monthArray} displayFunction={capMonthandSpaceYear}/> 
        </Route>
        <Route exact path="/">
          <Home expenses={expenses}/>
        </Route>
        </Switch>
      </StyledBody>
    </>
  );
}

export default App;
