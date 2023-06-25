import React from 'react';
import './App.css';
import Message from './components/Message';

const  App = (props) => {

  let messageElements = props.state.messages.map((item) => {
    return <Message message = { item.message } id = { item.id } key = { item.id }/>
  });

  let addMessage = () => {
    if (props.state.newMessage !== '') {    
      props.addMessage();  
    }      
  }

  let updateMessage = (e) => {    
    props.updateMessage(e.target.value);   
  }

  return (
    <div className="App">         
        { messageElements } 
        <div> 
          <textarea className = 'App-textarea' 
                    onChange = { updateMessage }
                    value = { props.state.newMessage }
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