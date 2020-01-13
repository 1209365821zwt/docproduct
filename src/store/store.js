import thunk from 'redux-thunk'
import {createStore,applyMiddleware,combinReducers} from 'redux'
import list from './reducer/listreducer'
const reducer=combinReducers({
    list
})
let store=createStore(reducer,applyMiddleware(thunk))
export default store;