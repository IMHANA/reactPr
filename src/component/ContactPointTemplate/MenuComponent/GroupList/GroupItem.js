import React, { Component } from 'react';
import './GroupItem.css'


class GroupItem extends Component {

    state = {
        // input: '',
        // groupList: [],
        hover: false
    }

    handleHover() {
        this.setState(prevState => ({
            hover: !prevState.hover
        }));
    }
    // 함수
    onMouseEnterHandler = (e) => {
        this.setState({hover: true});
        console.log(this.state.hover+'')
        //document.getElementsByClassName('hoverBtn').addClass('hover');
        //this.handleHover()
        // let btn = document.getElementById('hoverBtn');
        // btn.style.display = 'block';
        
            // console.log('작동하니? 1')
            //document.getElementsByClassName('hoverBtn').style.display = 'inline';

    }

    onMouseLeaveHandler = (e) => {
        this.setState({hover: false})
        //document.getElementsByClassName('hoverBtn').removeClass('hover');
        //this.handleHover()
        // let btn = document.getElementById('hoverBtn');
        // btn.style.display = 'none';
        
            // console.log('작동하니? 2')
            //document.getElementsByClassName('hoverBtn').style.display = 'none';
    
    }


    render() {
        return (
            <>
            <span onMouseOver={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                {this.props.name}
            
            {/* <span className={this.state.hover === false ? 'hoverBtn' : ''}> */}
            {
                this.state.hover &&
                (
                <span >
                <button >수정</button>
                <button >삭제</button>
                </span>
                )
                
                
            }
            </span>
            </>
        );
    }
}
export default GroupItem;