import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AddContactPoint from './component/ContactPointTemplate/MenuComponent/AddContactPoint/AddContactPoint';
import GroupList from './component/ContactPointTemplate/MenuComponent/GroupList/GroupList';
import Search from './component/ContactPointTemplate/MenuComponent/Search/Search'


class Main extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>저장된 연락처</h2>
                </div>
                <div>
                    <button><Link to='/AddContactPoint'>추가</Link></button>
                    <button><Link to='/Search'>찾기</Link></button>
                </div>
                <div>즐겨찾기</div>
                <div>즐겨찾기 되어있는 연락처 리스트============</div>
                <button><Link to='/GroupList'>그룹</Link></button>
                <div>연락처 리스트=============</div>
            </div>
        );
    }
}
export default Main; 