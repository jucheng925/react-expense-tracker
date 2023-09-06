import { Route, Switch } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import Home from "./Home"
import NavBar from "./NavBar"
import MonthsPage from "./MonthsPage"
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

  return (
    <>
      <StyledHeader>
        <h1>Personal Expense Tracker</h1>
        <NavBar />
      </StyledHeader>
      <StyledBody>
        <Switch>
        <Route path="/months">
          <MonthsPage expenses={expenses} onAddExpense={handleAddExpense} onUpdateExpense={handleUpdateExpense}/>
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
