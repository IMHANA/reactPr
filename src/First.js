import React, { Component } from 'react';

class First extends Component {
    state = { 
        name : "1",
        userName: "2" 
    }

    componentDidMount() {
        fetch('http://localhost:3000/group/list', {
            method:"GET",
        })
        .then(response => response.json())
        .then(data => this.setState({ name: data }));
        fetch('http://localhost:3000/user/list', {
            method:"GET",
        })
        .then(response => response.json())
        .then(data => this.setState({ userName: data }));
    }
    render() {
        return (
            <div>
                <h2>First</h2>
                <h2>{JSON.stringify(this.state.name)}</h2>
                <h2>=============</h2>
                <h2>{JSON.stringify(this.state.userName)}</h2>
            </div>
        );
    }
}

export default First;