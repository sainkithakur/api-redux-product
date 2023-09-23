import axios from "axios";
import {
  GET_CATEGORY,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_SUCCESS,
} from ".";

// ////////// get Product/////////////

export const getproductList = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LIST });
  try {
    const result = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: GET_PRODUCT_LIST_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_LIST_FAIL });
  }
};

// ////////Category//////////////////

export const getCategory = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORY });
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch({ type: GET_CATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAIL });
  }
};
