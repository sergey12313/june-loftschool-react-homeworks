import React from 'react';
import Message from '../Message';

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
        
        
        {messages.map(({text},index)=>(<Message text={text} key={index }/> ))}
        
        <input type="text" value={messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} className="input-message" />
      </div>
    );
  }
}
export default Chat;