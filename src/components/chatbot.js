import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactGA from 'react-ga';
import ScrollableAnchor from 'react-scrollable-anchor'
import classNames from "classnames"
import thumbnail from '../assets/images/ming_thumbnail.jpg';
import Image from 'react-bootstrap/lib/Image';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentSend from 'material-ui/svg-icons/content/send';
var moment = require('moment');
var VisibilitySensor = require('react-visibility-sensor');

class Chatbot extends Component {

  constructor(props) {
    super(props)

    let tellMeMoreCallback = function (){
      ReactGA.event({
        category: 'Chatbot',
        action: 'Tell me more',
      });

      let messageList = [
        { bot:true, type: "message", body: "I feel humbled. =)", time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "I'm a coder living in Toronto, Canada.", time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "And you are?", time: moment().format('LT')},
        { bot:false, type: "input-form", body: "Type your name here...", callback: {nameSubmitCallback}}
      ]
      this.setState({ messageBlocks: [...this.state.messageBlocks, messageList] });
    }.bind(this);

    let noTalkCallback = function (){

      ReactGA.event({
        category: 'Chatbot',
        action: "Don't feel like talking",
      });

      let messageList = [
        { bot:true, type: "message", body: "No problem, you can always connect me on LinkedIn", time: moment().format('LT'), wait: 5000},
      ]
      this.setState({ messageBlocks: [...this.state.messageBlocks, messageList] });
    }.bind(this);

    let codeCareerCallback = function (){

      ReactGA.event({
        category: 'Chatbot',
        action: "Coder's career",
      });

      let messageList = [
        { bot:true, type: "message", body: "I had developed software from credit card system to enterprise applications", time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "I recently developed an online dating app.", time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "It will be live soon, so stay tuned.", time: moment().format('LT'), wait: 5000},
      ]
      this.setState({ messageBlocks: [...this.state.messageBlocks, messageList] });
    }.bind(this);

    let entrepreneurialCallback = function (){

      ReactGA.event({
        category: 'Chatbot',
        action: "Entrepreneurial story",
      });

      let messageList = [
        { bot:true, type: "message", body: "I have co-foudned a number of startups, created many different applications.", time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "From sports betting, to video AI curator, and to online dating.", time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "You can check out my works below. =)", time: moment().format('LT'), wait: 5000},
      ]
      this.setState({ messageBlocks: [...this.state.messageBlocks, messageList] });
    }.bind(this);

    let nameSubmitCallback = function (textField){

      ReactGA.event({
        category: 'Chatbot',
        action: "What's your name",
        label: textField
      });

      ReactGA.set({ name: textField });

      let messageList = [
        { bot:true, type: "message", body: `Nice to meet you, ${textField}.`, time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "What do you want to know about me?", time: moment().format('LT'), wait: 5000},
        { bot:false, type: "options-form", option1: "Coder's career", codeCareerCallback: {codeCareerCallback}, option1FuncName:"codeCareerCallback", option2:"Entrepreneurial story", entrepreneurialCallback:{entrepreneurialCallback}, option2FuncName:"entrepreneurialCallback",}
      ]
      this.setState({ messageBlocks: [...this.state.messageBlocks, messageList] });
    }.bind(this);



    this.state = {
      isChatbotVisible: false,
      isVisibleSensorActive: true,
      messageBlocks: [
        [
          { bot:true, type: "message", body: "Hey! My name is Ming, welcome to my personal website.", time: moment().format('LT')},
          { bot:true, type: "message", body: "Want to know more about me?", time: moment().format('LT')},
          { bot:false, type: "options-form", option1: "Tell me more!", tellMeMoreCallback: {tellMeMoreCallback}, option1FuncName:"tellMeMoreCallback", option2:"Don't feel like talking...", noTalkCallback:{noTalkCallback}, option2FuncName:"noTalkCallback"},
        ]
      ]
    }
  }
  visibilityOnChange = (isVisible) => {
      if (isVisible){
        this.setState({isChatbotVisible: true, isVisibleSensorActive: false});
      }
    };

    nameSubmitCallback = function (textField){

      let greeting = [
        { bot:true, type: "message", body: `Nice to meet you, ${textField}.`, time: moment().format('LT'), wait: 5000},
        { bot:true, type: "message", body: "Do you want to more about Ming?", time: moment().format('LT'), wait: 5000},
        { bot:false, type: "options-form", option1: "Tell me more!", option2:"Don't feel like talking"}
      ]
      this.setState({ messageBlocks: [...this.state.messageBlocks, greeting] });
    }.bind(this);


  render() {

    return (
      <ScrollableAnchor id='_chatbot'>
          <section id="chatbot" >
               <div className="container">
                 <VisibilitySensor
                   scrollCheck
                   offset={{bottom:100}}
                    scrollThrottle={100}
                    intervalDelay={8000}
                    onChange={this.visibilityOnChange}
                    active={this.state.isVisibleSensorActive}/>
                  {this.state.isChatbotVisible &&
                    this.state.messageBlocks.map((messageList, i) => {
                        return (<MessageList key={i} messages={messageList} />)
                    })
                  }
                 </div>
          </section>
      </ScrollableAnchor>
    );
  }
}

class MessageList extends Component {

  constructor(props){
    super(props)
    this.state = {
      messages:[],
      messageIndex:0
    }

  }

  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
  }

  componentWillMount(){

    this.props.messages.map((message, i) => (
      setTimeout(()=> {
        this.setState({messages: this.state.messages.concat(message)});
      }, 1000+3000*i)
    ))
  }

  render() {
    return (
      <div className="MessageList">
        {this.state.messages.map((message, i) => {
          var isAvatarShow = false;
          if (i === this.state.messages.length-1){
            if(message.bot) isAvatarShow = true;
          }else{
            if (!this.state.messages[i+1].bot) isAvatarShow = true;
          }
         return (<Message isAvatarShow={isAvatarShow} messageIndex={i} key={i} {...message} />)
    }
  )}
</div>
    );
  }
}

class Message extends Component {

  constructor(props) {

    super(props)
    const classes = classNames('Message', {
      human: !this.props.bot,
      bot: this.props.bot,
    });

    this.state = {
      classes:classes,
      isLoading:this.props.bot,
      bot:this.props.bot,
      type:this.props.type,
      body:this.props.body,
      textField:''
    }

    if (this.state.isLoading){
      setTimeout(()=> {
        this.setState({isLoading:false});
      }, 2000);
    }

    this.textFieldOnChange = (event: object, newValue: string) => {
      this.setState({textField: newValue})
    }

    this.onClick = (event: object) => {
      this.setState({type: 'message', body: this.state.textField})
      this.props.callback.nameSubmitCallback(this.state.textField);
    }

    this.optionOnClick = (label, funcName)=> {
      this.setState({type: 'message', body: label})
      this.props[funcName][funcName]();
    }

  }

  static propTypes = {
    body: PropTypes.string,
    human: PropTypes.bool,
    message: PropTypes.bool,
    time: PropTypes.string,
  }

getFlatButton(label, funcName){
  return (  <FlatButton onClick={() => this.optionOnClick(label, funcName)} label={label} backgroundColor="#00BCD4" hoverColor="#80DEEA" labelStyle={{color: "#FAFAFA"}} style={{"borderRadius": "8px"}} />  )
}

render() {

    const isLoading = this.state.isLoading;

    let messageContent = null;
    let avatarContent = null;
    let timeContent = null;

    let inputForm = null;

    if (this.state.bot){
      if (isLoading){
        messageContent = <span className="loading-dots"><p className="dot one">.</p><p className="dot two">.</p><p className="dot three">.</p></span>
      } else {
        messageContent = <span className="message">{this.props.body}</span>
      }

      if (this.props.isAvatarShow){
        avatarContent = <div className="message-avatar"><Image src={thumbnail} circle /></div>
      }else{
        avatarContent = <div className="message-avatar" style={{width: '60px', height: '60px'}}><Image className="hidden" src={thumbnail} circle /></div>
      }

      timeContent = <span className="message-time">{this.props.time}</span>
    }else{
      if (this.state.type === "input-form"){
        inputForm = <MuiThemeProvider><form onSubmit={this.onClick}><TextField hintText={this.props.body} onChange={this.textFieldOnChange}/> <IconButton ref='iconButton' disabled={!this.state.textField} onClick={this.onClick}><ContentSend color="#00BCD4" /></IconButton></form></MuiThemeProvider>
      } else if (this.state.type === "message"){
        messageContent = <span className="message">{this.state.body}</span>
      } else if (this.state.type === "options-form"){
        inputForm =  <MuiThemeProvider><div>{this.getFlatButton(this.props.option1, this.props.option1FuncName)}&nbsp;&nbsp;&nbsp;{this.getFlatButton(this.props.option2, this.props.option2FuncName)}</div></MuiThemeProvider>
      }
    }

    return (
      <div className={this.state.classes}>
        <div className="animated fadeIn">
            {avatarContent}
            <div style={{position: 'relative', height: '56px'}}>
              {timeContent}
              {messageContent}
              {inputForm}
            </div>
            </div>
      </div>
    )
  }
}



export default Chatbot;
