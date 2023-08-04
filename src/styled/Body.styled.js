import styled from 'styled-components'

export const StyledBody = styled.div `
text-align: center;
padding: 20px;

`

export const StyledLinkList = styled.ul `
list-style-type: none;

li{
    padding: 10px;
    display: block;
}


`
export const StyledContainer = styled.div `
display: flex;
flex-flow: wrap;
justify-content: space-evenly;
padding: 10px;
`
export const StyledExpense = styled.div`
display: inline;
width: 250px;
height: auto;
margin: 7px;
box-shadow: 5px 3px 8px purple;
border: 1px solid purple;
padding-left: 10px;
padding-bottom: 10px;
text-align: left;

button{
    height: 30px;
    width: 125px;
}

button:active{
    transform: translateY(5px);
}
`