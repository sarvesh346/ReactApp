import React from 'react'
import "./App.css";
const App = () => {
  return (
    <div className="container">
        <h2 className="heading">Login</h2>
        <div>
            <label className="key">First name</label>
            <input className="value" placeholder="Enter your first name"></input>
        </div>
        <div>
            <label className="key mt">Middle name</label>
            <input className="value" placeholder="Enter your middle name"></input>
        </div>
        <div>
            <label className="key mt">Last name</label>
            <input className="value" placeholder="Enter your last name"></input>
        </div>
    </div>
  )
}

export default App