import { VENDOR_DETAILS } from "../APIs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from "react-redux";
import { add_user_details } from "./Action";

export const Service = {
  getUserDetails
};

function getUserDetails() {

    const token = useSelector((state) => state.data.token);

    return async dispatch => {

        // const response = await fetch(VENDOR_DETAILS, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'vendor_token' : token
        //   },
        //   body: JSON.stringify(body)
        // });
    
        // const result = await response.json();
        dispatch(add_user_details({
            name: "test name",
            email: "test@gmail.com",
            phone: "1234567890"
        }));
        return result;
    };
}