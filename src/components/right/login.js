import React,{useState} from "react";
import axios from "axios";

import {useHistory,Link,Redirect} from "react-router-dom"
import "./login.scss";
import {authUser}  from "../../store/actions/auth";
import {connect} from "react-redux";

const Login = (props) => {
  const history = useHistory();
  const token = localStorage.getItem("accesstoken");
  (props.auth.isAuthenticated || token) && history.push("/home")
  const login = async(e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    props.authUser(email,password);
  }
  
  return (
    <form onSubmit={e=>login(e)}>
      <div className="login">
        {console.log(props.auth.accesstoken)}
        <h1>Log In!</h1>
        <div className="login--input">
          <input type="email" id="email" placeholder="Enter Email Id" required></input>
        </div>
        <div className="login--input">
          <input type="password" id="password" placeholder="Enter Password" required></input>
        </div>
        <div className="login--input--buttons">
          <div className="signup--input--buttons--signup">
            <button>Login</button>
          </div>
          <div className="login--input--buttons--text">
            <span>Or</span>
          </div>
          <div className="signup--input--buttons--login">
            <button onClick={props.signup}> Sign Up!</button>
          </div>
        </div>
      </div>
    </form>
  );
};

const MapStateToProps = state =>{
  return {
    auth: state.user,
    user: state.user.userdata
  }
}

const MapDespatchToProps = dispatch =>{
  return {
    authUser: (email,password)=> authUser(email,password,dispatch)
  }
}
export default connect(MapStateToProps,MapDespatchToProps) (Login);
