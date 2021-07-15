import React from 'react';
import { connect } from "react-redux";
// import Account from "./components/Account";
import PrivateRoute from "./components/route/privateRoute";
import Login from "./components/right/login";
import Registor from "./components/right/signup";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home/home";
import './App.scss';
const App = (props) => {
  return (
    <Router>
      <Switch>


        <div className="App">
          <Route path="/signin" component={Login} />
          <Route path="/registor" component={Registor} />
          <div className="main">
            {/* <PrivateRoute path="/home" component={Home}/> */}
            <Route exact path="/" component={Home} />
            {/* <Redirect to="/" /> */}
          </div>
        </div>

       
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated
});
export default connect(mapStateToProps)(App);
