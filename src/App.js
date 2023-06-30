import React from 'react';
import './App.css';
import MessageContainer from './components/Message/MessageContainer';

const  App = (props) => {
  return (
    <div className="App">      
        <MessageContainer store = { props.store } />        
    </div>
  )
}

export default App;