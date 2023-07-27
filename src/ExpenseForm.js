import React from 'react'

function ExpenseForm() {
  return (
    <form>
      <label for="description"> Expense Descrition: </label>
      <input type="text" id="description" name="description" value="description" />
      <br />
      <label for="amount"> Expense Amount: </label>
      <input type="number" id="amount" name="amount" value="0" />
      <br />
      <label for="categories"> Expense Category: </label>
      <select id="categories">
        <option value="housing">Housing</option>
        <option value="transportation">Transportation</option>
        <option value="foodanddrinks">Food and Drinks</option>
        <option value="health">Health</option>
        <option value="entertainment">Entertainment</option>
        <option value="personal">personal</option>
      </select>
      <br />
      <input type ="checkbox" id="necessary" checked={true} />
      <label for="necessary"> Necessary </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ExpenseForm
