import React, { useState } from "react";
import axios from "axios";

import { useHistory, Link, Redirect } from "react-router-dom"
import "./login.scss";
import { authUser,setErrorNull } from "../../store/actions/auth";
import { connect } from "react-redux";



const Login = (props) => {
 
  const history = useHistory();
  const token = window.localStorage.getItem("accesstoken");
  (props.auth.isAuthenticated || token) && history.push("/")
  const login = async (e) => {
    props.setErrorNull()
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    props.authUser(email, password);
  }
  if(props.auth.error_message){
    setTimeout(()=>{
      props.setErrorNull()
    }, 15000)
  }

  return (
    <div className="App-account">
    <div className="login">
    <form onSubmit={e => login(e)} className="form">
      <div className="form-signin">
        <h1 className="form-signin-hero">Archers</h1>
        <h2>Log in to your Archers account</h2>
        { props.auth.error_message && <h4 className="form-signin-hero-error">{props.auth.error_message}</h4> }
        <div className="form-signin-signup-text"><span>Don't have an Account?</span> <Link to="/registor" className="form-signin-signup-text-button">Registor</Link></div>
        <div className="form-signin-email">
          <label>Email address</label>
          <input type="email" id="email" placeholder="Enter Email Id" required></input>
        </div>
        <div className="form-signin-password">
          <label>Password</label>
          <input type="password" id="password" placeholder="Enter Password" required></input>
        </div>
        <div className="form-signin-action">
          <div className="form-signin-action-forgot">
            <span>Forgot Password?</span>
          </div>
          <div className="form-signin-action-button">
            <button><img alt="person img" src={require("../img/name.png")} />Log in</button>
          </div>

        </div>
      </div>
    </form>
    </div>
    </div>
  );
};

const MapStateToProps = state => {
  return {
    auth: state.user,
    user: state.user.userdata
  }
}

const MapDespatchToProps = dispatch => {
  return {
    authUser: (email, password) => authUser(email, password, dispatch),
    setErrorNull: () => setErrorNull(dispatch)
  }
}
export default connect(MapStateToProps, MapDespatchToProps)(Login);
