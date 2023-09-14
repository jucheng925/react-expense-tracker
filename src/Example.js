import React, {useState} from 'react'

function Example() {
    const [formInput, setFormInput] = useState("")
    const [p, setP] = useState(0)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setP((p) => formInput.length + p)
        setFormInput("")
    }
    
  return (
    <>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={formInput} onChange={(e)=>setFormInput(e.target.value)}></input>
            <button type ="submit">Click Me!</button>
        </form>
        <p>{p}</p>
    </>
  )
}


export default Example