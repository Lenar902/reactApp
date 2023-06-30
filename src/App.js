import React from 'react';
import './App.css';
import Message from './components/Message';
import { addMessageActionCreator, updateMessageActionCreator } from './redux/message-reducer';

const  App = (props) => {

  let messageElements = props.state.messagePage.messages.map((item) => {
    return <Message {...item} key = { item.id }/>
  });

  let addMessage = () => {
    if (props.state.messagePage.newMessage !== '') {    
      props.dispatch(addMessageActionCreator());  
    }      
  }

  let updateMessage = (e) => {  
    props.dispatch(updateMessageActionCreator(e.target.value)); 
  }

  return (
    <div className="App">         
        { messageElements } 
        <div> 
          <textarea className = 'App-textarea' 
                    onChange = { updateMessage }
                    value = { props.state.messagePage.newMessage }
                    placeholder = {'Введите комментарий'}/>
        </div> 
        <div>
          <button className = 'App-button'
                  onClick={ addMessage }>
            Отправить
          </button>  
        </div>
    </div>
  )
}

export default App;