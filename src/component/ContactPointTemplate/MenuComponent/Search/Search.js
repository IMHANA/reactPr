import React, { Component } from 'react';

class Search extends Component {
    state = {
        userName: '',
        userId: '',
        userList: '',
        userNameResult: '',
        userIdResult: '',
        groupName: '',
        groupId: '',
        groupNameResult: '',
        groupIdResult: ''
    }

    //const uName = {userName};

    // componentDidMount() {
    //     fetch('127.0.0.1:3000/user/list', {
    //         method: "GET"
    //     })
    
    // .then(res => res.json())
    // .then(data => this.setState({ userNameResult: data}))
    // }


    // componentDidUpdate() {
    //     fetch(`http://localhost:3000/user/userName?${this.userName}`, {
    //         method: "GET",
    //     })
    //     .then(res => res.json())
    //     .then(data => this.setState({userNameResult: data}));
    // }


    //인풋값 바뀔때마다 유저이름 state에 넣어주기
    handleChange = (e) => {
        console.log('여긴 handleChange',e.target.value);
        // this.setState({
        //     [e.target.userName]: e.target.value,
        // })
        this.setState({userName: e.target.value});
    }

    search = (e) => {
        console.log('값이 들어오나');
        console.log(this.state.userName);
        //e.preventDefault();
        //const uName = document.getElementById("userInfo");
        if(this.state.userName === "" || this.state.userName === "null") {
            e.preventDefault();
        }
        //let url = "http://localhost:3000/user/name?" + $.param({this.state.userName});
        // fetch(`http://localhost:3000/user/name?${encodeURIComponent(this.state.userName)}`, {
        //     method:"GET",
        //     })

        // fetch(`http://localhost:3000/user/name?q=${(this.state.userName)}`, {
        //     method:"GET",
        //     })
        // .then(response => response.json())
        // .then(data =>  this.setState(JSON.stringify({ userNameResult: data})))

        fetch(`http://localhost:3000/user/${this.state.userName}`, {
            method:"GET",
            })
        .then(response => response.json())
        .then(data =>  this.setState({ userNameResult: data}))
        //.then(data =>  console.log(data))

        // .then(data =>  {
        // const name = document.createElement("div");
        // const email = document.createElement("div");
        // const tel = document.createElement("div");
        // name.textContent = data.name;
        // email.textContent = data.email;
        // tel.textContent = data.tel;
        // console.log(name);
        // console.log(email);
        // console.log(tel);
        // const userInfo = document.getElementById("userInfo");
        // userInfo.appendChild(name);
        // userInfo.appendChild(email);
        // userInfo.appendChild(tel);
        // }
        // )
        // ))
        this.setState({userName: ''})
    }

    // async componentDidMount() {
    //     // GET request using fetch with async/await
    //     const response = await fetch('http://localhost:3000/user/name?q=셋');
    //     const data = await response.json();
    //     this.setState({ userNameResult: data.total })
    // }


    render() {
        
        return (
            <div>
                <h1>Search</h1>
                <span>이름으로 검색</span>
                <input name="name" type="text" onChange= {this.handleChange}
                value= {this.state.userName}></input>
                <button onClick={this.search}>검색</button>
                <div id='userInfo'>{this.state.userNameResult&&this.state.userNameResult[0].name }</div>
                
            </div>
        );
    }
}
export default Search;