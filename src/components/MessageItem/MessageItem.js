import React from 'react';
import s from './MessageItem.module.css';

function MessageItem(props) {    
    return <h3>
        <span>{ props.id })</span>
        <span className = {s.message}>{ props.message }</span>         
    </h3>
}

export default MessageItem;