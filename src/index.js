import React from 'react';
import './index.css';
import App from './App';
import store from './redux/store';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

let rerenderEntireTree = (state) => {
    root.render(<App state={state} 
                    addMessage={store.addMessage.bind(store)} 
                    updateMessage={store.updateMessage.bind(store)}/>);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);