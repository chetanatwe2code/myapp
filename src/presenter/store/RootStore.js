import {combineReducers, createStore} from 'redux';
import UserReducer from "../user/Reducer";


// const allReducers = combineReducers({
//     UserReducer
// });
const applicationStore = createStore(UserReducer);
export default applicationStore;
