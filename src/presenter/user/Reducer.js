import { ADD_USER_DETAILS , UPDATE_TOKEN } from "./Action";

const initialState = {
  data: {
    token: '',
    user: {
      name: "test name",
      email: "test@gmail.com",
      phone: "1234567890",
      counter: "1234567890",
    }
  }
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return {
        ...state,
        data: state.payload
      }
    case UPDATE_TOKEN:
      return {
        ...state,
        data: {
          ...state.data,
          token: action.payload
        }
      };
    default:
      return state
  }
};
export default UserReducer;