import './App.css';
import { Route, Switch } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Home from "./Home"
import NavBar from "./NavBar"
import MonthsPage from "./MonthsPage"



function App() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/expenses")
      .then(resp => resp.json())
      .then(data => setExpenses(data))
  }, [])
  
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
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/months">
        <MonthsPage expenses={expenses} addNewExpense={addNewExpense} onUpdateExpense={handleUpdateExpense}/>
      </Route>
      <Route exact path="/">
        <Home expenses={expenses}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
