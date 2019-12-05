import {combineReducers, createStore} from 'redux'
import quotes from './reducers/quotesReducer'

const rootReducer = combineReducers( {
    quotes
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())