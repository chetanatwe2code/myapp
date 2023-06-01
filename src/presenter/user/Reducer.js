import { ADD_USER_DETAILS , UPDATE_TOKEN } from "./Action";

const initialState = {
  data: {
    token: '',
    user: {
      name: "Chetan",
      email: "",
      phone: "",
    }
  }
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return {
        ...state.data,
        user: state.payload
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