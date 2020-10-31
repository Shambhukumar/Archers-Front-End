import React, {useState} from 'react'
import {Redirect} from "react-router-dom";
import Login from "./right/login";
import SignUp from "./right/signup";
import Intro from "./left/intro";
import {connect} from "react-redux";
import {setErrorNull} from "../store/actions/auth";
import "./landing.scss";


const Landing = (props)=> {
  
  const [login, setlogin] = useState(true);

  const change= ()=>{
   props.setErrorNull()
   setlogin(!login)
  } 
  return (
   
  <div className="home">
        <div className="home--left">
          <Intro/>
        </div>
        <div className="home--right">
       {props.error && <div className="home--right-error">
        <span>{props.message}</span>
        </div>}
       {login ? <Login signup={change} /> : <SignUp login={change}/> }
        </div>
  </div>
  )
}
const mapStateToProps = (state) => {
  return {
  isAuthenticated: state.user.isAuthenticated,
  error: state.user.error,
  message: state.user.error_message
}
};

const MapDespatchToProps = dispatch =>{
  return {
    setErrorNull: ()=> setErrorNull(dispatch)
  }
}

export default connect(mapStateToProps,MapDespatchToProps)(Landing)
