import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './component/ContactPointTemplate/main';
import AddContactPoint from './component/ContactPointTemplate/MenuComponent/AddContactPoint/AddContactPoint';
import GroupList from './component/ContactPointTemplate/MenuComponent/GroupList/GroupList';
import Search from './component/ContactPointTemplate/MenuComponent/Search/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to='/'>Main</Link></li>
              <li><Link to='/AddContactPoint'>AddContactPoint</Link></li>
              <li><Link to='/GroupList'>GroupList</Link></li>
              <li><Link to='/Search'>Search</Link></li>
            </ul>
          </div>
          <hr />
          <div>
            <Switch>
              <Route exact path='/' component={ Main } />
              <Route path='/AddContactPoint' component={ AddContactPoint } />
              <Route path='/GroupList' component={ GroupList } />
              <Route path='/Search' component={ Search } />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
  
}

export default App;
