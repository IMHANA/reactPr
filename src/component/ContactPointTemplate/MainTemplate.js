import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Main from './MenuComponent/Main/main';
import AddContactPoint from './MenuComponent/AddContactPoint/AddContactPoint';
import Group from './MenuComponent/GroupList/GroupList';
import Search from './MenuComponent/Search/Search'


class MainTemplate extends Component {
    state = {
        count : "1"
    }

    componentDidMount() {
        fetch('http://localhost:3000/user/count', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({ count: data }));
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ Main } />
                    <Route path='/addContactPoint' component={ AddContactPoint } />
                    <Route path='/group' component={ Group } />
                    <Route path='/search' component={ Search } />
                </Switch>
            </Router>
        );
    }
}
export default MainTemplate; 