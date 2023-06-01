import { ADD_USER_DETAILS , UPDATE_TOKEN } from "./Action";

const initialState = {
  data: {
    token: '',
    user: {
      "vendor_id": 17,
      "owner_name": null,
      "shop_name": null,
      "email": "chetan.barod.we2code@gmail.com",
      "password": "12345@abcd",
      "mobile": null,
      "user_type": "vendor",
      "shop_address": null,
      "gstn": null,
      "geolocation": null,
      "store_type": null,
      "shop_logo": null,
      "status": "pending",
      "multiple_document_upload": null,
      "document_name": null,
      "is_active": 1,
      "availability": null,
      "social_media_links": null,
      "show_product_rating": 1,
      "created_by": null,
      "created_by_id": null,
      "created_on": "2023-05-13T07:15:58.000Z",
      "updated_on": "2023-05-13T07:15:58.000Z"
    }
  }
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DETAILS:
      return {
        ...state.data,
        data: {
          ...state.data,
          user: action.payload
        }
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