import React from 'react';
import Message from '../Message';
import "./Chat.css"

class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: '',
  };

  changeInputMessage = ({target}) => {
      this.setState(()=>({messageInput: target.value}))
  };
  sendMessageOnEnter = ({key}) => {
      const {messageInput} = this.state;
     if (key === "Enter" && messageInput !== '') {
        const newMessage = {text: messageInput};

        this.setState(({messages, messageInput})=>({messages: [newMessage, ...messages], messageInput: ''}))
     }
  };
  render() {
      const {messageInput, messages} = this.state;
    return (
      <div className="chat">
        
        <div className="message-list">
          <div className="messages" >
          {messages.map(({text},index)=>(<Message text={text} key={index }/> ))}
            
          </div>
        </div>
        
        
        <input  className={"input-message"} type="text" value={messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} className="input-message" />
      </div>
    );
  }
}
export default Chat;