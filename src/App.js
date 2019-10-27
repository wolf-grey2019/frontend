import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'

class App extends Component {

  render() {

    return (
      <Router>
        <div className="menu">
          <ul>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li className="right"><Link to={'/login'} className="nav-link">Log In</Link></li>
            <li className="right"><Link to={'/signup'} className="nav-link">Sign Up</Link></li>
            {/* <li className="right"><Link to={'/change'} className="nav-link">Change</Link></li> */}
          </ul>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            {/* <Route path='/change' component={Change} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;