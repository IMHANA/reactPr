import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import First from './First';
import Second from './Second';
import Third from './Third';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to='/First'>First</Link></li>
            <li><Link to='/Second'>Second</Link></li>
            <li><Link to='/Third'>Third</Link></li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path='/First' component={ First } />
            <Route path='/Second' component={ Second } />ya
            <Route path='/Third' component={ Third } />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
