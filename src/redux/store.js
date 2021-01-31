import { combineReducers, createStore } from "redux"
import mailReducer from "./mailReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    mail: mailReducer,
    user: userReducer
})

const store = createStore(reducers);

window.store = store;

export default store;