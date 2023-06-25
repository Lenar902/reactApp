import React from 'react';
import './index.css';
import App from './App';
import state, { addMessage, subscribe, updateMessage } from './redux/state';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

export let rerenderEntireTree = (state) => {
    root.render(<App state={state} 
                    addMessage={addMessage} 
                    updateMessage={updateMessage}/>);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);