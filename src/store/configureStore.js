import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../Reducers/notesReducer'
import userLogReducer from '../Reducers/userLogReducer'
import userReducer from '../Reducers/userReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user:userReducer,
        notes:notesReducer,
        logStatus:userLogReducer
    }),applyMiddleware(thunk))
    return store
}


export default configureStore
