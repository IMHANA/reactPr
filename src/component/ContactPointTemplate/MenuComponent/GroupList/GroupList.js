import React, { Component } from 'react';
import GroupItem from './GroupItem';

class GroupList extends Component {

    state = {
        // input: '',
        groupList: [],
        // hover: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/group/list', {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => this.setState({groupList: data}))
    }

    render() {
        return (
            <div>
            <h1>Group</h1>
            <div className="groupList"/>
                {this.state.groupList.map((group, idx) => {
                    return (
                        <div>{group.name}<GroupItem/></div>
                    )          
                })}
            </div>
        );
    }
}
export default GroupList;