import { combineReducers } from 'redux';
import todosReducer from './todoReducers';


const rootReducer=combineReducers({
    todosReducer,
});

export default rootReducer;
