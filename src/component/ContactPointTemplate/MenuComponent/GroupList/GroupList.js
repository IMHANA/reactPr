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

    callGroupName(value) {
        fetch('http://localhost:3000/group/' + value, {
            method: "PATCH",
            headers: {'Content-Type' : 'application/ jason'},
            body: JSON.stringify({
                name: value
            })
        })
        .then(res => res.json())
        // .then(data => this.setState({groupList: data}))
        .then(data => console.log(data))
    }
    

    render() {
        return (
            <div>
            <h1>Group</h1>
            <div className="groupList"/>
                {this.state.groupList.map((group, idx) => {
                    return (
                        <>
                        <div><GroupItem name={group.name} callGroupName={this.callGroupName}/></div>
                        
                        </>
                    )          
                })}
            </div>
        );
    }
}
export default GroupList;