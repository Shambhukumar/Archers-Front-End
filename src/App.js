import React from 'react';
import {connect} from "react-redux";
import  Landing from "./components/landing";
import PrivateRoute from "./components/route/privateRoute";
import { BrowserRouter as Router,  Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home/home";
import './App.scss';
const App = (props) =>{
  return (
    <Router>
    <Switch>
    <Route path="/registor" component={Landing}/>
    <div className="App">
      <div className="main">
      
    {/* <PrivateRoute path="/home" component={Home}/> */}
    <Route exact path="/" component={Home}/>
   
    <Redirect to="/"/>
    </div>
    </div>
    <Redirect to="/"/>
    </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => ({
	isAuthenticated: state.user.isAuthenticated
});
export default connect(mapStateToProps) (App);
