import React from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import AddPlace from './components/AddPlace'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/add-place">
            <AddPlace/>
          </Route>
          <Route path="/">
            hello
          </Route>
        </Switch>
  
    </Router>
  );
}

export default App;