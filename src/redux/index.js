import { combineReducers, createStore, applyMiddleware } from 'redux'
import moods from './reducers/moodsReducer'
import quotes from './reducers/quotesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    moods,
    quotes
})

export default createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
        )
)   