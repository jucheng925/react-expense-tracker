import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function ExpenseForm({ months, displayFunction, addNewExpense }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
            month: `${months[0]}`,
            description: "",
            amount: 0,
            category: "Housing",
            necessary: true
          })
  
  const renderDropDownMonths = months.map((month) => <option key={month} value={month}>{displayFunction(month)}</option>)
  
  
  function handleChange(e) {
    const name = e.target.name
    let value = e.target.value
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    else if (e.target.type === "number") {
      value = parseInt(e.target.value)
    }
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(resp => resp.json())
    .then((newExpense) => {
      addNewExpense(newExpense)
      history.push(`/months/${formData.month}`)})

  }


  return (
    <>
    <h3>Add an Expense</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="months">Expense Month: </label>
      <select id="months" name="month" onChange={handleChange}>
        {renderDropDownMonths}
      </select>
      <br/>
      <label htmlFor="description"> Expense Description: </label>
      <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
      <br />
      <label htmlFor="amount"> Expense Amount: </label>
      <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange}/>
      <br />
      <label htmlFor="categories"> Expense Category: </label>
      <select id="categories" name="category" onChange={handleChange}>
        <option value="Housing"> Housing</option>
        <option value="Transportation"> Transportation</option>
        <option value="Food and Drinks"> Food and Drinks</option>
        <option value="Health"> Health</option>
        <option value="Entertainment"> Entertainment</option>
        <option value="Personal"> Personal</option>
      </select>
      <br />
      <input type ="checkbox" id="necessary" name="necessary" checked={formData.necessary} onChange={handleChange}/>
      <label htmlFor="necessary"> Is necessary </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default ExpenseForm
