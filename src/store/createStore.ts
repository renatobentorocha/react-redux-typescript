import { createStore } from 'redux';
import reducer from './modules/combineReducers';

export default createStore(reducer);
