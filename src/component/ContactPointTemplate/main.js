import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AddContactPoint from './MenuComponent/AddContactPoint/AddContactPoint';
import GroupList from './MenuComponent/GroupList/GroupList';
import Search from './MenuComponent/Search/Search'


class Main extends Component {
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
                <div>
                    <div>
                        <div>
                            <h2>저장된 연락처 총 {this.state.count}개</h2>
                        </div>
                        <div>
                            <button><Link to='/AddContactPoint'>추가</Link></button>
                            <button><Link to='/Search'>찾기</Link></button>
                        </div>
                        <div>즐겨찾기</div>
                        <div>즐겨찾기 되어있는 연락처 리스트 <br></br>
                        ============
                        </div>
                        <button><Link to='/GroupList'>그룹</Link></button>
                        <div>연락처 리스트=============</div>
                    </div>
                    <div>
                        <Switch>
                            {/* <Route exact path='/' component={ Main } /> */}
                            <Route path='/AddContactPoint' component={ AddContactPoint } />
                            <Route path='/GroupList' component={ GroupList } />
                            <Route path='/Search' component={ Search } />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
export default Main; 