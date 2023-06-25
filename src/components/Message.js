import React from 'react';
import s from './Message.module.css';

function Message(props) {    
    return <h3>
        <span>{ props.id })</span>
        <span className = {s.message}>{ props.message }</span>         
    </h3>
}

export default Message;