import React, { useState } from 'react';

function useValidation(initialState, validators) {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onInputChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(state).forEach((key) => {
      const value = state[key];
      if (validators[key]) {
        const fieldErrors = validators[key].reduce((acc, validator) => {
          const error = validator(value);
          if (error) {
            acc.push(error);
          }
          return acc;
        }, []);

        if (fieldErrors.length > 0) {
          newErrors[key] = fieldErrors;
        }
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return {
    state,
    setState,
    onInputChange,
    errors,
    validate,
    setErrors,
  };
}

export default useValidation;