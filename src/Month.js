import React from 'react'
import Expense from "./Expense"
import { Link, useParams } from "react-router-dom";
import { StyledContainer } from './styled/Body.styled';

function Month({expenses, displayFunction, onUpdateExpense}) {
  const params = useParams();
  const filterExpenses = expenses.filter(expense => expense.month === params.monthyear)

  return (
    <>
    <h1>Here are your expenses for {displayFunction(params.monthyear)}</h1>
    <Link to={`/months/add`}>Add New Expense</Link>
      <StyledContainer >
        {filterExpenses.map(expense => <Expense key={expense.id} expense={expense} onUpdateExpense={onUpdateExpense}/>)}
      </StyledContainer>
   </>
  )
}

export default Month