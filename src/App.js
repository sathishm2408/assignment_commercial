import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import { getChatLog, getMembersDetails } from './service';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.props.getChatLog();
    this.props.getMembersDetails();
    this.state = {
      message: null,
      members: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("3333333");
    return {
      message: props.message,
      members: props.members
    }
  }
  userDetails = (userId) => {
    //console.log("444444",userId);

    return this.state.members.filter(member => member.id === userId)
  }
  // componentDidMount(){
  // //   console.log("22222222");  
  //   this.props.getChatLog(); 
  //   this.props.getMembersDetails();
  // }

  render() {
    // console.log("1111", this.state.message);
    // console.log("2222", this.state.members);
    let allMessages, sortedMessages, memberDetails, time, meridiem = 'AM';
    if (this.state.message && this.state.members) {
      sortedMessages = [...this.state.message];
      sortedMessages.sort((a, b)=>{
        // console.log("6666",a.timestamp);
        
        return a.timestamp < b.timestamp});
      // console.log("555555",sortedMessages);
      
      allMessages = sortedMessages.map((userMessage) => {
        memberDetails = this.userDetails(userMessage.userId)
        if(((userMessage.timestamp).substr(11,2))>12){
          meridiem = 'PM';
          time = (userMessage.timestamp).substr(11,2) - 12 + (userMessage.timestamp).substr(13,3)
        }else
        time = (userMessage.timestamp).substr(11,5)
          
        
        return (
          <div className='Message-div' key={userMessage.id}>
            <h4 className='user-title'>
              <img className='avatar' src={memberDetails[0].avatar}></img>
              {memberDetails[0].firstName}
            </h4>
            <p className='message'>
              {userMessage.message}
        <span className='message-time'>  {time} {meridiem}</span>
            </p>
            
            <span className="tooltiptext">{memberDetails[0].email}</span>
          </div>
        )
      })
    }
    return (
      <div className='App'>
        <h1 className='App-header'>Chat Room</h1>
        {
          allMessages
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("state", state)
  return {
    message: state.messages,
    members: state.members
  };
};

export default connect(
  mapStateToProps,
  { getChatLog, getMembersDetails }
)(App);
