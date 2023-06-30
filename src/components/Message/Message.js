import React from 'react'
import MessageItem from '../MessageItem/MessageItem';
import s from './Message.module.css';

function Message(props) {
    let messageElements = props.stateMsgPage.messages.map((item) => {
        return <MessageItem {...item} key = { item.id }/>
    });  
    
    let addMessage = () => {        
          props.addMessage();         
      }
    
      let updateMessage = ((e) => {  
        props.updateNewText(e.target.value); 
      });

    return (
    <div>
        { messageElements } 

        <div> 
          <textarea className = {s.message__textarea} 
                    onChange = { updateMessage }
                    value = { props.stateMsgPage.newMessage }
                    placeholder = {'Введите комментарий'}/>
        </div> 

        <div>
          <button className = {s.message__button}
                  onClick={ addMessage }>
            Отправить
          </button>  
        </div>
    </div>
    )
}

export default Message;
