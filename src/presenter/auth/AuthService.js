import { USER_LOGIN, USER_SIGNUP, USER_OTP_VERIFY, USER_FORGOT_PASSWORD, USER_FORGOT_PASSWORD_UPDATE } from "../APIs";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthService = {
  signIn,
  signUp,
  verifyOTP,
  forgotPassword,
  changeForgotPassword,
  signOut
};

async function signIn(body) {
  try {
    const response = await fetch(USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    console.log(`MY_Responce_result:: ${result.res_code}`);
    return result;

  } catch (error) {
    console.log(`MY_Responce_error:: ${error}`);
    return error;
  }
}

async function signUp(body) {
  try {
    const response = await fetch(USER_SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    console.log(`MY_Responce_result:: ${result}`);
    return result;

  } catch (error) {
    console.log(`MY_Responce_error:: ${error}`);
    return error;
  }
};

async function verifyOTP(body) {
  try {
    const response = await fetch(USER_OTP_VERIFY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    console.log(`MY_Responce_result:: ${result}`);
    return result;

  } catch (error) {
    console.log(`MY_Responce_error:: ${error}`);
    return error;
  }
};

async function forgotPassword(body) {
  try {
    const response = await fetch(USER_FORGOT_PASSWORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    console.log(`MY_Responce_result:: ${result}`);
    return result;

  } catch (error) {
    console.log(`MY_Responce_error:: ${error}`);
    return error;
  }
};

async function changeForgotPassword(body, token) {
  try {
    const response = await fetch(USER_FORGOT_PASSWORD_UPDATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'user_token': token,
      },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    console.log(`MY_Responce_result:: ${JSON.stringify(result)}`);
    return result;

  } catch (error) {
    console.log(`MY_Responce_error:: ${error}`);
    return error;
  }
};

async function signOut() {
  try {
    await AsyncStorage.clear();
    return true;
}
catch(exception) {
    return false;
}
};