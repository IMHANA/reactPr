import React, { Component } from 'react';

class Search extends Component {
    state = {
        userName: '',
        userId: '',
        userNameResult: [],
        userIdResult: '',

        groupList: [],
        groupName: '',
        groupId: '',
        groupNameResult: '',
        groupIdResult: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/group/list', {
            method: "GET",
        })
        .then(res => res.json())
        .then(data => this.setState({ groupList: data }))
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
    selectUser = (e) => {
        console.log('여긴 selectUser',e.target.value);
        // this.setState({
        //     [e.target.userName]: e.target.value,
        // })
        this.setState({userName: e.target.value});
    }

    //값 바뀔때마다 그룹이름 state에 넣어주기
    selectGroup = (e) => {
        const target = e.target.value;
        console.log('여긴 selectGroup',target);
        this.setState({groupName: target});
        if (target !== '' && target !== 'null' && target !== '선택하세요') {
            fetch(`http://localhost:3000/user/group/${target}`,{
                method:'GET'
            })
            .then(response => response.json())
            .then(data => this.setState({ groupIdResult: data }))
        }
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
        console.log(this.state)
        return (
            <div>
                <h1>Search</h1>
                <div>
                <span>이름으로 검색</span>
                <input name="name" type="text" onChange= {this.selectUser}
                value= {this.state.userName}></input>
                <button onClick={this.search}>검색</button>
                </div>

                <span>그룹으로 검색</span>
                <select id="selectGroup" onChange={this.selectGroup}>
                    <option>선택하세요</option>
                    {this.state.groupList.map((groupInfo, idx) => {
                        return (
                            <option value={groupInfo.id} key={`${idx}`} >
                                {groupInfo.name}
                            </option>
                        )
                    })}
                </select>
                {/* <input name="name" type="text" onChange= {this.handleChange}
                value= {this.state.userName}></input>
                <button onClick={this.search}>검색</button> */}

                {/* <div id='userInfo'>{this.state.userNameResult&&this.state.userNameResult[0].name }</div>
                <div id='userInfo'>{this.state.userNameResult&&this.state.userNameResult[0].tel }</div>
                <div id='userInfo'>{this.state.userNameResult&&this.state.userNameResult[0].email }</div> */}

                {
                    this.state.userNameResult.map((item, idx) => {
                        return (
                            <>
                                <div>--------------------------</div>
                                {item.name ? <div id='userInfo'>{item.name}</div> : <div>name: 없음</div>}
                                {/* {item.name && item.name} */}
                                {item.email || '이메일 입력안함'}
                                {/* {item.email ? <div id='userInfo'>{item.email}</div> : <div>email: 없음</div>} */}
                                {item.tel ? <div id='userInfo'>{item.tel}</div> : <div>tel: 없음</div>}
                            </>
                        

                        )
                        //return [item.email ? <div id='userInfo'>{item.email }</div> : <div>email: 없음</div>];
                    })
                } 

                {
                    this.state.groupIdResult.map((groupInfo, idx) => {
                        console.log('groupInfo => ', groupInfo);
                        return (
                            <>
                                <div>--------------------------</div>
                                <div>이름: {groupInfo.name || '이름은 없음'}</div>
                                <div>메일: {groupInfo.email || '메일은 없음'}</div>
                                <div>전화: {groupInfo.tel || '전화는 없음'}</div>
                            </>
                        )
                    })
                } 

                {/* {
                    this.state.groupIdResult.map((groupInfo, idx) => {
                        return <div key={`${idx}`}>{groupInfo.email}</div>
                })} */}

                {/* <div>{this.state.groupIdResult&&this.state.groupIdResult[0] }</div>
                <div>{this.state.groupIdResult&&this.state.groupIdResult[0].tel }</div>
                <div>{this.state.groupIdResult&&this.state.groupIdResult[0].email }</div> */}
                
            </div>
        );
    }
}
export default Search;