import React, { Component } from 'react';

class AddContactPoint extends Component {

    state = {
        group: "1",
        groupList : [],

        name : '',
        tel : '',
        email: '',
        bookmark: '',
        memo: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/group/list', {
            method:"GET",
        })
        .then(response => response.json())
        .then(data => this.setState({ groupList: data }));

    }

    submit = () =>{
        fetch('http://localhost:3000/user/add', {
            method:"POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                name : this.state.name
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    setName = (e) =>{
        this.setState({name : e.target.value});
    }

    render() {
        return (
            <div>
                <div><h1>AddContactPoint</h1></div>
                <div>
                    <h2>그룹 목록</h2>
                    {/* <h4>{JSON.stringify(this.state.group)}</h4> */}
                    {
                        this.state.groupList.map((groupInfo,idx)=>{
                            return <p key={`_${idx}`}>{groupInfo.name}</p>
                        })
                    }
                </div>
                <div>
                    <span>name</span>   <input name="name" placeholder="이름" type="text" onChange = {this.setName} value = {this.state.name}></input><br></br>
                    <span>tel</span>    <input name="tel" placeholder="전화번호" type="text"></input><br></br>
                    <span>email</span>  <input name="email" placeholder="메일" type="text"></input><br></br>
                    <span>bookmark</span> <input name="bookmark" placeholder="즐겨찾기" type="text"></input><br></br>
                    <span>memo</span>   <input name="memo" placeholder="메모" type="text"></input><br></br>
                </div>
                <div>
                    <button onClick = {this.submit}>입력</button>
                </div>
                
            </div>
        );
    }
}
export default AddContactPoint;