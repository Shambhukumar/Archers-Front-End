import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Signin.scss"
import PersonImg from "../../img/person.svg"
import Closs from "../../img/cross.svg";
import { useHistory,  Redirect } from "react-router-dom"
// import "./login.scss";
import { authUser } from "../../../store/actions/auth";
import { connect } from "react-redux";

function Signin(props) {
    // console.log(props.auth.isAuthenticated)
    
    const history = useHistory();
    props.auth.isAuthenticated && history.go(0)
   
    const login = async (e) => {
      e.preventDefault()
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      props.authUser(email, password);
    //   console.log(props.auth.isAuthenticated)
    
      
    }
    return (
        <div>
            <div className="modal">
            
                <div className="modal-container">
                    
               
                <div className="modal-container-logo">
                <div className="modal-container-logo-close">
                    <img alt="cross" src={Closs} className="modal-container-logo-close-img"onClick={() => props.display(false)}/>
                    </div>
                    <img src={PersonImg} alt="person logo" className="modal-container-logo-img"/>
                    
                    <hr className="modal-container-logo-border">
                        
                    </hr>
                    </div>
                    <form onSubmit={e => login(e)} className="form">
                        <div className="form-signin">
                            <h1>Log In</h1>
                            <div className="form-signin-signup-text"><span>Need a Archers Account?</span> <Link to="/registor" className="form-signin-signup-text-button">Sign Up</Link></div>
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
                                    <button><img alt="person img" src={require("../../img/name.png")}/>Log in</button>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div onClick={() => props.display(false)} className="container">


            </div>
        </div>
    )
}

const MapStateToProps = state => {
    return {
      auth: state.user,
      user: state.user.userdata
    }
  }
  
  const MapDespatchToProps = dispatch => {
    return {
      authUser: (email, password) => authUser(email, password, dispatch)
    }
  }

export default connect(MapStateToProps, MapDespatchToProps)(Signin)

