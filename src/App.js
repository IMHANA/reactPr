import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import MainTemplate from './component/ContactPointTemplate/MainTemplate';
// import AddContactPoint from './component/ContactPointTemplate/MenuComponent/AddContactPoint/AddContactPoint';
// import GroupList from './component/ContactPointTemplate/MenuComponent/GroupList/GroupList';
// import Search from './component/ContactPointTemplate/MenuComponent/Search/Search'

class App extends Component {
  render() {
    console.log('app안입니당')
    return (
      <div>
      <MainTemplate/>
      </div>
    );
  }
}

export default App;
