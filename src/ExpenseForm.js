import React, {useState} from 'react'

function ExpenseForm({ months, displayFunction }) {
  const [formData, setFormData] = useState({
            month: "",
            description: "",
            amount: 0,
            category: "housing",
            necessary: true
          })
  
  const renderDropDownMonths = months.map((month) => <option value={month.month_year}>{displayFunction(month.month_year)}</option>)
  
  
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
    console.log(formData)
  }


  return (
    <>
    <h3>Add an Expense</h3>
    <form onSubmit={handleSubmit}>
      <label for="months">Expense Month: </label>
      <select id="months" name="month" onChange={handleChange}>
        {renderDropDownMonths}
      </select>
      <br/>
      <label for="description"> Expense Description: </label>
      <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
      <br />
      <label for="amount"> Expense Amount: </label>
      <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange}/>
      <br />
      <label for="categories"> Expense Category: </label>
      <select id="categories" name="category" onChange={handleChange}>
        <option value="housing"> Housing</option>
        <option value="transportation"> Transportation</option>
        <option value="foodanddrinks"> Food and Drinks</option>
        <option value="health"> Health</option>
        <option value="entertainment"> Entertainment</option>
        <option value="personal"> Personal</option>
      </select>
      <br />
      <input type ="checkbox" id="necessary" name="necessary" checked={formData.necessary} onChange={handleChange}/>
      <label for="necessary"> Is necessary </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default ExpenseForm
