import { GET_CATEGORY_SUCCESS, GET_PRODUCT_LIST_SUCCESS } from "../action";

const inititalState = {
  products: [],
  categories: [],
};
const productReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_SUCCESS:
      return { ...state, products: action.payload };

    case GET_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};

export default productReducer;
