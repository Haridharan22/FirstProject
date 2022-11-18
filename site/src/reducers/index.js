import isLoggedReducer from "./isLogged";
import counterReducer from "./counter";
import { legacy_createStore as createStore , combineReducers} from 'redux'

const store = combineReducers({
    login: isLoggedReducer,
    counter: counterReducer
})

export default store;