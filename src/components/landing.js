import React, {useState} from 'react'
import {Redirect} from "react-router-dom";
import Login from "./right/login";
import SignUp from "./right/signup";
import Intro from "./left/intro";
import {connect} from "react-redux";
import "./landing.scss";


const Landing = (props)=> {
  
  const [login, setlogin] = useState(true);

  const change= ()=>{
   setlogin(!login)
  } 
  return (
   
  <div className="home">
        <div className="home--left">
          <Intro/>
        </div>
        <div className="home--right">
       {login ? <Login signup={change} /> : <SignUp login={change}/> }
        </div>
  </div>
  )
}
const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Landing)
