const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {   
    messages: [
        {id: 1, message: 'Привет, мир!'},
        {id: 2, message: 'В траве сидел кузнечика!'},
        {id: 3, message: 'Без труда не вытащишь рыбку из пруда'},
        {id: 4, message: 'Транзисторный радиоприёник'}
    ],
    newMessage: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newPost = {
                id: state.messages.length + 1,
                message: state.newMessage
            };
            state.messages.push(newPost);
            state.newMessage = ''; 
            return state;
        case UPDATE_MESSAGE: 
            state.newMessage = action.text; 
            return state;            
        default: return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        text
    }
}

export default messageReducer;