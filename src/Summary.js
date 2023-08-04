import React from 'react'
import Emoji from './Emoji'
import StyledTable from './styled/Table.styled'

function Summary({expenses}) {
  const allCategories = expenses.map(expense => expense.category)
  const filteredCategories= allCategories.filter((category, index) => allCategories.indexOf(category) === index)
  
  function totalAmount(category) {
    const expensesInThisCategory = expenses.filter(expense => expense.category === category)
    return expensesInThisCategory.reduce((accum, expense)=> expense.amount + accum, 0)
  }
  const overAllTotal = expenses.reduce((accum, expense) => expense.amount + accum, 0)

  return (
    <div>
        <h3>Summary of Overall Amount Spent based on Category</h3>
        <p>Total Amount: ${overAllTotal} </p>
        <StyledTable>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount Spent</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) =>
              <tr key={category}>
                <td>{category} <Emoji category={category}/></td>
                <td>${totalAmount(category)}</td>
                <td>{((totalAmount(category)/overAllTotal) * 100).toFixed(2)}%</td>
              </tr>
            )}
          </tbody>
        </StyledTable>
    </div>

  )
}

export default Summary