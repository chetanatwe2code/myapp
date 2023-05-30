export const UserConstants = {

    SIGNUP_REQUEST: 'USERS_SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'USERS_SIGNUP_SUCCESS',
    SIGNUP_FAILURE: 'USERS_SIGNUP_FAILURE',

    SIGNIN_REQUEST: 'USERS_SIGNIN_REQUEST',
    SIGNIN_SUCCESS: 'USERS_SIGNIN_SUCCESS',
    SIGNIN_FAILURE: 'USERS_SIGNIN_FAILURE',

    SIGNOUT_REQUEST: 'SIGNOUT_REQUEST',
    SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS',
    SIGNOUT_FAILURE: 'SIGNOUT_FAILURE',

    UPDATE_PROFILE_REQUEST: 'UPDATE_PROFILE_REQUEST',
    UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAILURE: 'UPDATE_PROFILE_FAILURE',
};

export const RequestConstant = (request, result) => {
    return {
        type: request,
        data: result,
    };
};

export const ResponseConstant = (success, error, result) => {

    return {
        type: result.success === true ? success : error,
        data: result.data,
    };
};
