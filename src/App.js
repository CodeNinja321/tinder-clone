import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
          <Route path="/chat">
            <h1>Chat</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
        {/* Card */}
        {/* Buttons below Card */}

        {/* Chat screen */}
        {/* Individual chat screen */}
      </Router>
      
    </div>
  );
}

export default App;
