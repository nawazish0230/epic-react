// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {

  const inputRef = React.useRef();
  const [inputField, setinputField] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.name.value // 1st way
    const valueRef = inputRef.current //2nd way
    console.log('inputRef', inputRef)
    onSubmitUsername(valueRef)
  }

  // const handleInputRef = (val) => {
  //   console.log('val', val);
  //   inputRef.current = val
  // }

  const handleInputChange = (value) => {
    console.log('vall', value)
    const isLowerCase = value === value.toLowerCase()
    setIsError(isLowerCase ? false : true)
    setinputField(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Username:</label>
        <input id="name" value={inputField} onChange={(e) => handleInputChange(e.target.value)} type="text" />
        {isError && <p>letter must be lowercase</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
