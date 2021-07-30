import React, { Component } from 'react';


class GroupItem extends Component {

    state = {
        // input: '',
        // groupList: [],
        btn1 : '수정',
        btn2 : '삭제',
        hover: false
    }

    handleHover() {
        this.setState(prevState => ({
            hover: !prevState.hover
        }));
    }
    // 함수
    onMouseEnterHandler = () => {
        this.setState({hover: true});
        console.log(this.state.hover+'')
    }

    onMouseLeaveHandler = () => {
        this.setState({hover: false})
    }

    editGroupName = () => {

    }

    deleteGroupName = () => {
        let target = '';
        console.log(target);
        // fetch('http://localhist:3000/group/')
    }
    
    //확인버튼을 눌렀을 떄 이벤트
    clickBtn = (value) => {
        if(this.state.btn1 === '확인') {
            this.props.callGroupName(value);
        } else {
            console.log('그룹명 수정 실패');
            this.setState({btn1: '수정'});
        }
    }

    render() {
        return (
            <>
            <span onMouseOver={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                {
                    this.state.btn1 === '수정' ?
                    this.props.name
                    :
                    <input 
                        type="text"
                        value={this.props.name}
                    />  
                }
            
            {/* <span className={this.state.hover === false ? 'hoverBtn' : ''}> */}
            {
                this.state.hover &&
                (
                <span >
                <button onClick={this.editGroupName}>{this.state.btn1}</button>
                <button onClick={this.deleteGroupName}>{this.state.btn2}</button>
                </span>
                )
            }
            
            </span>
            </>
        );
    }
}
export default GroupItem;