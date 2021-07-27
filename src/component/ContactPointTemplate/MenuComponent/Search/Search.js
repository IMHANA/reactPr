import React, { Component } from 'react';

class Search extends Component {
    state = {
        userName: '',
        userNameResult: [],

        groupList: [],
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

        if(this.state.userName === "" || this.state.userName === "null") {
            e.preventDefault();
        }

        fetch(`http://localhost:3000/user/${this.state.userName}`, {
            method:"GET",
            })
        .then(response => response.json())
        .then(data =>  this.setState({ userNameResult: data}))

        this.setState({userName: ''})
    }

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

                {
                    this.state.userNameResult.map((item, idx) => {
                        return (
                            <>
                                <div>--------------------------</div>
                                {item.name ? <div id='userInfo'>{item.name}</div> : <div>name: 없음</div>}
                                {item.email || '이메일 입력안함'}
                                {item.tel ? <div id='userInfo'>{item.tel}</div> : <div>tel: 없음</div>}
                            </>
                        )
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
            </div>
        );
    }
}
export default Search;