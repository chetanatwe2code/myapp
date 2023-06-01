import { VENDOR_DETAILS } from "../APIs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector , useDispatch } from "react-redux";
import { add_user_details } from "./Action";

export const Service = {
  getUserDetails
};

async function getUserDetails() {
    try {
        const token = useSelector((state) => state.data.token);

        console.log(`token:: ${token}`);

        const dispatch = useDispatch();
  
      const response = await fetch(VENDOR_DETAILS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'vendor_token' : token
        },
      });
  
      const result = await response.json();
     
      dispatch(add_user_details(result[0]));
    //   return result;
  
    } catch (error) {

      console.log(`MY_Responce _error:: ${error}`);
       
    }
  }

// function getUserDetails() {
//     const dispatch = useDispatch();
//     return async dispatch => {
//       dispatch(add_user_details({
//         name: "test name",
//         email: "test@gmail.com",
//         phone: "1234567890"
//       }));
//     };
//   }
  