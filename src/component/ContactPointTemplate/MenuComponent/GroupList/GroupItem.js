import React, { Component } from 'react';

class GroupItem extends Component {

    state = {
        // input: '',
        // groupList: [],
        hover: false
    }

    // 함수
    onMouseEnterHandler = () => {
        console.log(this.state.hover+'')
        this.setState({hover: true});
        
    }

    onMouseLeaveHandler = () => {
        this.setState({hover: false})
    }


    render() {
        return (
            <>
            <span onMouseOver={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                {this.state.hover+''}
            </span>
            <button class='hoverBtn'>수정</button>
            <button class='hoverBtn'>삭제</button>
            </>
        );
    }
}
export default GroupItem;