import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import Frontpage from "./pages/Frontpage";
import Gallery from "./pages/Gallery";



import logo from './logo.svg';
import './App.css';

import axios from "axios";

class App extends Component {

 render() {
    return (
      <Router>
        <div>

        	<Switch>
        		<Route exact path="/login" component={Login}/>
        		<Route exact path="/register" component={Register}/>
        		<Route exact path="/home" component={Frontpage}/>
            <Route exact path="/gallery" component={Gallery}/>
        		<Route component={NoMatch}/>
        	</Switch>	    	

        </div>
      </Router>
    );
  }
}

export default App;
