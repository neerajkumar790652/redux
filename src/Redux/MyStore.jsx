import {legacy_createStore,applyMiddleware} from 'redux'; 
import Reducer from '../Reducer';
import logger from 'redux-logger';

const mystore = legacy_createStore(Reducer,applyMiddleware(logger));
export default mystore;