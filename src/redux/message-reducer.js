const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initialState = {   
    messages: [
        {id: 1, message: 'Привет, мир!'},
        {id: 2, message: 'В траве сидел кузнечика!'},
        {id: 3, message: 'Без труда не вытащишь рыбку из пруда'},
        {id: 4, message: 'Транзисторный радиоприёник'},
        {id: 5, message: 'Большой андронный коллайдер'}
    ],
    newMessage: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newPost = {
                id: state.messages.length + 1,
                message: state.newMessage
            };

            return {
                ...state,               
                messages: [...state.messages, newPost],
                newMessage: ''
            };           
        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                newMessage: action.text
            };    
        }      
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