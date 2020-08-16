import { createStore, applyMiddleware } from 'redux';
import reducer from '../store-toolkit/theme';
import  logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import customLogger from '../middleware/customLogger';

console.log(1);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
