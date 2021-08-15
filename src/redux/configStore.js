import {combineReducers, createStore} from 'redux';
import { FakeBookReducer } from './Reducers/FakeBookReducer';


const rootReducer = combineReducers({
    //Khai báo reducer
    FakeBookReducer
})


export const store = createStore(rootReducer)


