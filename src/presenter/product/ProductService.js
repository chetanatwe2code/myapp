import { GET_VENDOR_PRODUCT } from "../APIs";


async function getProduct(body) {
    try {
      const response = await fetch(GET_VENDOR_PRODUCT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'vendor_token' : ''
        },
        body: JSON.stringify(
            {
                "price_from":"",
                "price_to":"",
                "search":"",
                "category":[],
                "rating":[],
                "brand":[],
                "seo_tag":[],
                "id": []
            }
        )
      });
  
      const result = await response.json();
      console.log(`MY_Responce_result:: ${result.res_code}`);
      return result;
  
    } catch (error) {
      console.log(`MY_Responce_error:: ${error}`);
      return error;
    }
  }


