import {UserConstants,RequestConstant,ResponseConstant} from "./UserConstants";

export const UserAction = {
    signIn,
    signUp,
};

const BASE_URL = "https://nursery-live-1.onrender.com/";

function signIn(body) {
    return async dispatch => {
      dispatch(RequestConstant(UserConstants.SIGNIN_REQUEST, body));
  
      try {
        const response = await fetch(BASE_URL+"user_login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
  
        const result = await response.json();
        console.log(`MY_Responce_result:: ${result.res_code}`);
        dispatch(ResponseConstant(UserConstants.SIGNIN_SUCCESS, UserConstants.SIGNIN_FAILURE, result));
        return result;

      } catch (error) {
        console.log(`MY_Responce_error:: ${error}`);
        dispatch(ResponseConstant(UserConstants.SIGNIN_FAILURE, UserConstants.SIGNIN_FAILURE, error));
        return error;
      }
    };
  }


function signUp(data) {
    return async dispatch => {
        dispatch(RequestConstant(UserConstants.SIGNUP_REQUEST, data));
        try {
            const response = await fetch(BASE_URL+"user_signup", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            });
      
            const result = await response.json();
            console.log(`MY_Responce_result:: ${result}`);
            dispatch(ResponseConstant(UserConstants.SIGNUP_SUCCESS, UserConstants.SIGNUP_FAILURE, result));
            return result;

          } catch (error) {
            console.log(`MY_Responce_error:: ${error}`);
            dispatch(ResponseConstant(UserConstants.SIGNUP_SUCCESS, UserConstants.SIGNUP_FAILURE, result));
            return error;
          }
    };
}