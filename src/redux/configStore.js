import {applyMiddleware, combineReducers, createStore} from 'redux';
import { FakeBookReducer } from './Reducers/FakeBookReducer';
import { PhimReducer } from './Reducers/PhimReducer';

//Cấu hình middlewrare (Để có thể dispatch redux 1 action là function)
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    //Khai báo reducer
    FakeBookReducer,
    PhimReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))


