import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
const enhancer = applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

export default store;
