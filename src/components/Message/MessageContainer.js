import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/message-reducer';
import Message from './Message';

function MessageContainer({store}) {
    let state = store.getState().messagePage;

    let addMessage = () => {
        if (state.newMessage !== '') {    
          store.dispatch(addMessageActionCreator());  
        }      
      }
    
      let updateMessage = (text) => {  
        store.dispatch(updateMessageActionCreator(text)); 
      }

    return ( <Message stateMsgPage = {state} 
                        addMessage = { addMessage } 
                        updateNewText = {updateMessage}/> )
}

export default MessageContainer;
