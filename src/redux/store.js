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

    _callbackSubscriber() {
        console.log('State in changed');
    },

    getState() {
        return this._state;
    },       

    subscribe(observer) {
        this._callbackSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD_MESSAGE') {
            let newPost = {
                id: this._state.messages.length + 1,
                message: this._state.newMessage,
                likesCount: 0
            };
            this._state.messages.push(newPost);
            this._state.newMessage = '';
            this._callbackSubscriber(this._state);
        }
        else if (action.type === 'UPDATE_MESSAGE') {
            this._state.newMessage = action.text;
            this._callbackSubscriber(this._state);
        }
    }
}

export default store;