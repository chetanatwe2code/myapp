import {UserConstants,RequestConstant,ResponseConstant} from "./UserConstants";

export const UserAction = {
    signIn,
    signUp,
    verifyOTP,
    forgotPassword,
    changeForgotPassword
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


function signUp(body) {
  console.log(JSON.stringify(body));
    return async dispatch => {
        dispatch(RequestConstant(UserConstants.SIGNUP_REQUEST, body));
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
            dispatch(ResponseConstant(UserConstants.SIGNUP_SUCCESS, UserConstants.SIGNUP_FAILURE, error));
            return error;
          }
    };
}

function verifyOTP(body) {
  console.log(JSON.stringify(body));
    return async dispatch => {
        dispatch(RequestConstant(UserConstants.SIGNUP_REQUEST, body));
        try {
            const response = await fetch(BASE_URL+"user_otp_verify", {
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
            dispatch(ResponseConstant(UserConstants.SIGNUP_SUCCESS, UserConstants.SIGNUP_FAILURE, error));
            return error;
          }
    };
}


function forgotPassword(body) {
  console.log(JSON.stringify(body));
    return async dispatch => {
        dispatch(RequestConstant(UserConstants.SIGNUP_REQUEST, body));
        try {
            const response = await fetch(BASE_URL+"user_forgate_password", {
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
            dispatch(ResponseConstant(UserConstants.SIGNUP_SUCCESS, UserConstants.SIGNUP_FAILURE, error));
            return error;
          }
    };
}

function changeForgotPassword(body,token) {
  console.log(JSON.stringify(body));
    return async dispatch => {
        dispatch(RequestConstant(UserConstants.SIGNUP_REQUEST, body));
        try {
            const response = await fetch(BASE_URL+"user_forgate_password_update", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'user_token': token,
              },
              body: JSON.stringify(body)
            });
      
            const result = await response.json();
            console.log(`MY_Responce_result:: ${JSON.stringify(result)}`);
            dispatch(ResponseConstant(UserConstants.SIGNUP_SUCCESS, UserConstants.SIGNUP_FAILURE, result));
            return result;

          } catch (error) {
            console.log(`MY_Responce_error:: ${error}`);
            dispatch(ResponseConstant(UserConstants.SIGNUP_SUCCESS, UserConstants.SIGNUP_FAILURE, error));
            return error;
          }
    };
}

function signOut() {
  return async dispatch => {
      dispatch(RequestConstant(UserConstants.SIGNOUT_REQUEST, {}));
      const result = {
          success :true,
          data : {}
      }
      await FirebaseService.logout();
      dispatch(ResponseConstant(UserConstants.SIGNOUT_SUCCESS, UserConstants.SIGNOUT_FAILURE, result));
  };
}