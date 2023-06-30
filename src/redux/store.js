import messageReducer from "./message-reducer";

let store = {
    _state: { 
        messagePage : {   
            messages: [
                {id: 1, message: 'Привет мир'},
                {id: 2, message: 'Недавно нашёл кузнечика!'},
                {id: 3, message: 'Первое апреля никому не верь!'},
                {id: 4, message: 'Та да'}
            ],
            newMessage: ''
        }
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
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._callbackSubscriber(this._state);        
    }
}

export default store;