let store = {
    _state: {    
        messages: [
            {id: 1, message: 'Привет мир'},
            {id: 2, message: 'Недавно нашёл кузнечика!'},
            {id: 3, message: 'Первое апреля никому не верь!'},
            {id: 4, message: 'Та да'}
        ],
        newMessage: ''
    },

    getState() {
        return this._state;
    },

    _callbackSubscriber() {
        console.log('State in changed');
    },

    addMessage() {    
        let newPost = {
            id: this._state.messages.length + 1,
            message: this._state.newMessage,
            likesCount: 0
        };
        this._state.messages.push(newPost);
        this._state.newMessage = '';
        this._callbackSubscriber(this._state);
    },  

    updateMessage(text) {
        this._state.newMessage = text;
        this._callbackSubscriber(this._state);
    },

    subscribe(observer) {
        this._callbackSubscriber = observer;
    }
}

export default store;

// let rerenderEntireTree = () => {
//     console.log('State in changed');
// }

// let state = {    
//     messages: [
//         {id: 1, message: 'Привет мир'},
//         {id: 2, message: 'Недавно нашёл кузнечика!'},
//         {id: 3, message: 'Первое апреля никому не верь!'},
//         {id: 4, message: 'Та да'}
//     ],
//     newMessage: ''
// }

// export const addMessage = () => {    
//     let newPost = {
//         id: state.messages.length + 1,
//         message: state.newMessage,
//         likesCount: 0
//     };
//     state.messages.push(newPost);
//     state.newMessage = '';
//     rerenderEntireTree(state);
// }

// export const updateMessage = (text) => {
//     state.newMessage = text;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

// export default state;