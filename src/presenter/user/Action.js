export const ADD_USER_DETAILS = "ADD_USER_DETAILS";

export const UPDATE_TOKEN = "UPDATE_TOKEN";

// Action creators
export const add_user_details = (payload) => ({
  type: ADD_USER_DETAILS,
  payload : payload
})

export const update_token = (payload) => ({
  type: UPDATE_TOKEN,
  payload : payload
})