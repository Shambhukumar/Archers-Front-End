import React from "react";
import {useHistory,Link} from "react-router-dom"
import {SignupUser, setErrorNull}  from "../../store/actions/auth";
import {connect} from "react-redux";
import Spin from "../home/Loader/spin/spin";
import "./signup.scss";

const Signup=(props)=> {
  const history = useHistory();
    const token = window.localStorage.getItem("accesstoken");
  (props.auth.isAuthenticated || token) && history.push("/")
  const signupUser = (e)=>{
    props.setErrorNull();
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const c_password = document.getElementById("c-password").value
    const name = document.getElementById("name").value
    props.SignupUser(name, email,password,c_password);

  }
  if(props.auth.error_message){
    setTimeout(()=>{
      props.setErrorNull()
    }, 15000)
  }
  return (
    <div className="App-account">
    <form onSubmit={e=>signupUser(e)}>
      <div className="registor">
      <div className="form-registor">
        <h1 className="form-registor-hero">Archers</h1>
        <h2>Create your Archers accoount</h2>
        { props.auth.error_message && <h4 className="form-registor-hero-error">{props.auth.error_message}</h4> }
        <div className="form-registor-signup-text"><span>Already have an account?</span> <Link to="/signin" className="form-registor-signup-text-button">Log In</Link></div>
        <div className="form-registor-name">
          <label>Name</label>
          <input type="text" id="name" placeholder="Display Name" required></input>
         
        </div>
        <div className="form-registor-email">
          <label>Email address</label>
          <input type="email" id="email" placeholder="Enter Email Id" required></input>
        </div>
        <div className="form-registor-password">
          <label>Password</label>
          <input type="password" id="password" placeholder="Enter Password" required></input>
         
        </div>
        <div className="form-registor-password">
          <label>Confirm Password</label>
          <input type="password" id="c-password" placeholder="Confirm Password" required></input>
         
        </div>
        <div className="form-registor-action">
          <div className="form-registor-action-forgot">
            <span>Forgot Password?</span>
          </div>
          <div className="form-registor-action-button">
          <button>{props.auth.loading ? <Spin/> : <span><img alt="person img" src={require("../img/name.png")}/> Sign Up </span>}</button>
          </div>

        </div>
      </div>
      </div>
    </form>
    </div>
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
    SignupUser: (name, email,password,c_password)=> SignupUser(name,email,password,c_password,dispatch),
    setErrorNull: () => setErrorNull(dispatch)
  }
}

export default connect(MapStateToProps,MapDespatchToProps) (Signup);
