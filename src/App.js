import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path='/' exact>

          </Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
