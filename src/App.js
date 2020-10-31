import React from 'react';
import {connect} from "react-redux";
import  Landing from "./components/landing";
import PrivateRoute from "./components/route/privateRoute";
import { BrowserRouter as Router,  Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home/home";
import './App.css';
const App = (props) =>{
  return (
    <Router>
    <Switch>
    <PrivateRoute path="/home" component={Home}/>
    <div className="App">
    <Route exact path="/" component={Landing}/>
    <Redirect to="/"/>
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
