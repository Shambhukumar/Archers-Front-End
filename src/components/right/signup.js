import React from "react";
import "./signup.scss";

import {useHistory,Link,Redirect} from "react-router-dom"
import {SignupUser}  from "../../store/actions/auth";
import {connect} from "react-redux";

const Signup=(props)=> {
  const history = useHistory();
    const token = localStorage.getItem("accesstoken");
  (props.auth.isAuthenticated || token) && history.push("/home")
  const signupUser = (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const c_password = document.getElementById("c-password").value
    const firstname = document.getElementById("f-name").value
    const lastname = document.getElementById("l-name").value
    props.SignupUser(firstname + " " +lastname, email,password,c_password);

  }
    
  return (
    <form onSubmit={e=>signupUser(e)}>
      <div className="signup">
        <h1>Sign Up!</h1>
        <div className="signup--input--name">
          <input type="text" id="f-name" placeholder="First name" required></input>
          <input type="text" id="l-name" placeholder="Last name" required></input>
        </div>
        <div className="signup--input--email">
          <input type="email" id="email" placeholder="Email" required></input>
        </div>
        <div className="signup--input--password">
          <input
            type="password"
            placeholder="Password"
            className="signup--input--password-1"
            required
            id="password"
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup--input--password-2"
            required
            id="c-password"
          ></input>
        </div>
        <div className="signup--input--signup">
          <button> Sign Up</button>
        </div>
        <div>
          <span>Or</span>
        </div>
        <div className="signup--input--login">
          <button onClick={props.login}> Login</button>
        </div>
      </div>
    </form>
  );
}

const MapStateToProps = state =>{
  return {
    auth: state.user,
    user: state.user.userdata
  }
}

const MapDespatchToProps = dispatch =>{
  return {
    SignupUser: (name, email,password,c_password)=> SignupUser(name,email,password,c_password,dispatch)
  }
}

export default connect(MapStateToProps,MapDespatchToProps) (Signup);
