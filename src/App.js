

import React, { useState } from "react"

function App() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [programmingIsChecked, setProgrammingIsChecked] = useState(false)
  const [autocadIsChecked, setAutocadIsChecked] = useState(false)
  const [matlabIsChecked, setMatlabIsChecked] = useState(false)
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const updateEmailField = (e) => setEmail(e.target.value);
  const updateNameField = (e) => setName(e.target.value)
  const toggleProgramming = (e) => setProgrammingIsChecked(e.target.checked)
  const toggleAutocad = (e) => setAutocadIsChecked(e.target.checked)
  const toggleMatlab = (e) => setMatlabIsChecked(e.target.checked)
  const submitForm = (e) => {
    e.preventDefault();
    setFormIsSubmitted(true);
  };
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <div>
        <h2>Newsletter Signup Form</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="email">Enter your email address: </label>
          <input
            type="text"
            id="email"
            placeholder="email address"
            value={email} 
            onChange={updateEmailField}
          />
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            id="name"
            placeholder="name"
            value={name}
            onChange={updateNameField}
          />
          <label htmlFor="programming">Add programming</label>
          <input
            type="checkbox"
            id="programming"
            checked={programmingIsChecked}
            aria-checked={programmingIsChecked}
            onChange={toggleProgramming}
          />
          <label htmlFor="autocad">Add autocad</label>
          <input
            type="checkbox"
            id="autocad"
            checked={autocadIsChecked}
            aria-checked={autocadIsChecked}
            onChange={toggleAutocad}
          />
          <label htmlFor="matlab">Add matlab</label>
          <input
            type="checkbox"
            id="matlab"
            checked={matlabIsChecked}
            aria-checked={matlabIsChecked}
            onChange={toggleMatlab}
          />
          <button type="submit">Submit Form</button>
        </form>
        {formIsSubmitted ? <h2>Form was submitted successfully</h2> : null}
      </div>
    </main>
  );
}

export default App;
