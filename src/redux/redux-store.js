import { combineReducers, legacy_createStore as createStore } from "redux";
import messageReducer from "./message-reducer";

const rootReducer = combineReducers({
    messagePage: messageReducer
});

let store = createStore(rootReducer);

export default store;