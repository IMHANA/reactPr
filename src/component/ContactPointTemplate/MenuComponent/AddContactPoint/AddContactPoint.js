import React, { Component } from 'react';

class AddContactPoint extends Component {
    state = {
        group: 1,
        groupList : [],

        name : '',
        tel : '',
        email: '',
        bookmark: 'F',
        memo: ''
    }
    

    componentDidMount() {
        fetch('http://localhost:3000/group/list', {
            method:"GET",
        })
        .then(response => response.json())
        .then(data => this.setState({ groupList: data }));

    }

    submit = (e) =>{
        e.preventDefault();

        if(this.state.name === "" || this.state.name === "null") {
            e.preventDefault();
        }

        fetch('http://localhost:3000/user/add', {
            method:"POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                groupId : this.state.group,
                name : this.state.name,
                tel : this.state.tel,
                email : 1111776781,
                bookmark : this.state.bookmark,
                memo : this.state.memo
            })
        })
        .then(response => response.json())
        .then(data => console.log(data));

        this.setState({
            groupId : '',
            name : '',
            tel : '',
            email : '',
            bookmark : '', 
            memo : ''
        });
    }
    //인풋창 상태 바뀌는대로 적용하기
    handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    // setName = (e) =>{
    //     this.setState({name : e.target.value});
    // }
    // setTel = (e) =>{
    //     this.setState({tel : e.target.value});
    // }
    // setEmail = (e) =>{
    //     this.setState({email : e.target.value});
    // }
    // setBookmark = (e) =>{
    //     this.setBookmark({bookmark : e.target.value});
    // }
    // setMemo = (e) =>{
    //     this.setMemo({memo : e.target.value});
    // 

    selectBoxChange = (selected) => {
        // console.log("작동은..하는가");
        // console.log(selected);
        // console.log({selected});
    }
    
    getBookmark = (e) => {
        console.log(e.value);
        this.setState({bookmark : e.target.value});
    }


    render() {
        console.log('모라고...해야지...',this.state);
        const checkEmail = function(str) {
            var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            return regExp.test(str) ? true : false;
        };

        const style = {
            margin: '2px',
            border: '1px solid #ccc',
            padding: '2px',
        }

        // 엔터 쳤다고 submit되면 안됨.
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) {
            event.preventDefault();
            };
        }, true);

        return (
            // <form>
            <div>
                <div><h1>AddContactPoint</h1></div>
                <div>
                    <h2>그룹 목록</h2>
                    {/* <h4>{JSON.stringify(this.state.group)}</h4> */}
                    {/* {
                        this.state.groupList.map((groupInfo,idx)=>{
                            return <p  key={`_${idx}`}>{groupInfo.name}</p>
                        })
                    } */}
                    <select id="selectTest" onChange={this.selectBoxChange(this.value)}>
                        <option>선택하세요</option>
                        {this.state.groupList.map((groupInfo,idx)=>{
                            return(
                            <option value={groupInfo.id} key={`_${idx}`} onChange = {this.handleChange}>
                                {groupInfo.name}
                            </option>
                        )})}
                    </select>

                    {/* <lebel>
                    <select>
                        <option value={this.groupInfo.name}>{this.groupInfo.name}</option>
                    </select>
                    </lebel> */}
                </div>
                <div style={style}>
                    <span>name</span>   
                        <input name="name" placeholder="이름" type="text" 
                        onChange = {this.handleChange} value = {this.state.name}></input>
                        <br></br>
                    <span>tel</span>
                        <input name="tel" placeholder="전화번호" type="text" 
                        onChange = {this.handleChange} value = {this.state.tel}></input>
                        <br></br>
                    <span>email</span>
                        <input name="email" placeholder="메일" type="text" 
                        onChange = {this.handleChange} value = {this.state.email} onBlur={checkEmail}></input>
                        <br></br>
                    <div>
                        <input name="bookmark" type="radio" value="F" onClick={this.getBookmark} /> 즐겨찾기 안함
                        <input name="bookmark" type="radio" value="T" onClick={this.getBookmark} /> 즐겨찾기 함
                    </div>
                    {/* <span>bookmark</span>
                    <RadioBtn type='radio' id='radio' />
                    <label htmlFor='radio'>Radio</label> */}
{/* 
                        <input name="bookmark" placeholder="즐겨찾기" type="text" 
                        onChange = {this.handleChange} value = {this.state.bookmark}></input> */}
                        <br></br>
                    <span>memo</span>
                        <input name="memo" placeholder="메모" type="text" 
                        onChange = {this.handleChange} value = {this.state.memo}></input>
                        <br></br>
                </div>
                <div>
                    <button onClick = {this.submit}>send</button>
                </div>
            </div>
            //</form> 
        );
    }
}
export default AddContactPoint;