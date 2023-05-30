const BASE_URL = "https://nursery-live-1.onrender.com";

const get = (endpoint) => {
  return async dispatch => {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        // Handle non-200 status codes
        const errorData = await response.json();
        console.log(`MY_Response_errorData:: ${errorData}`);
        return errorData;
      }
    } catch (error) {
      console.log(`MY_Response_error:: ${error}`);
      return error;
    }
  };
};

const post = (endpoint, body) => {
  return async dispatch => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        // Handle non-200 status codes
        const errorData = await response.json();
        console.log(`MY_Response_errorData:: ${errorData}`);
        return errorData;
      }
    } catch (error) {
      console.log(`MY_Response_error:: ${error}`);
      return error;
    }
  };
};

const put = (endpoint, body) => {
  return async dispatch => {
    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        // Handle non-200 status codes
        const errorData = await response.json();
        console.log(`MY_Response_errorData:: ${errorData}`);
        return errorData;
      }
    } catch (error) {
      console.log(`MY_Response_error:: ${error}`);
      return error;
    }
  };
};

export const APIs = {
  get,
  post,
  put
};
