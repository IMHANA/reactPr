import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import AddContactPoint from '../AddContactPoint/AddContactPoint';
import GroupList from '../GroupList/GroupList';
import Search from '../Search/Search'

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
        //console.log("ghd");
        return (
            <div>
                <div>
                    <h2>저장된 연락처 총 {this.state.count}개</h2>
                </div>
                <div>
                    <button><Link to='/addContactPoint'>추가</Link></button>
                    <button><Link to='/search'>찾기</Link></button>
                </div>
                <div>즐겨찾기</div>
                <div>즐겨찾기 되어있는 연락처 리스트 <br></br>
                ============
                </div>
                <button><Link to='/groupList'>그룹</Link></button>
                <div>연락처 리스트=============</div>
            </div>
        );
    }
}
export default Main;