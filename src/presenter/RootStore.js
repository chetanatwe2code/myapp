import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {UserReducer} from "../presenter/Reducer/user/UserReducer";


const allReducers = combineReducers({
    UserReducer
});
const applicationStore = createStore(allReducers, applyMiddleware(thunkMiddleware));
export default applicationStore;
