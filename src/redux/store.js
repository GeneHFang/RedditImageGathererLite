//Imports
import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';

//Combine for scalability
const root = combineReducers({
    firstReducer: reducer,
    //secondReducer: someReducer
});

//Store
const store =  createStore(root);

export default store; 