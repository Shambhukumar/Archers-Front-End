import React from 'react'
import "./signup.scss";


function Signup(props) {
  return (
    <form>
    <div className="signup">
    <h1>Sign Up!</h1>
    <div className="signup--input--name">
    <input type="text" placeholder="First name"required></input>
    <input type="text" placeholder="Last name" required></input>
    </div>
    <div className="signup--input--email">
    <input type="email" placeholder="Email" required></input>
    </div>
    <div className="signup--input--password">
    <input type="password" placeholder="Password" className="signup--input--password-1" required></input>
    <input type="password" placeholder="Confirm Password" className="signup--input--password-2" required></input>
    </div>
    <div className="signup--input--signup">
    <button> Sign Up</button>
    </div>
    <div >
      <span>Or</span>
    </div>
    <div className="signup--input--login">
    <button onClick={props.login}> Login</button>
    </div>
    </div>
    </form>
  )
}



export default Signup