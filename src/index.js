import React from 'react';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

let rerenderEntireTree = (state) => {
    root.render(<App state={state} 
                    dispatch={store.dispatch.bind(store)} />);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});