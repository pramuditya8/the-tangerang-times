import {
  CATEGORIES_SUCCESS,
  CATEGORIES_LOADING,
  CATEGORIES_DETAILS_SUCCESS,
} from "../action/actionType";

export default function categoryReducer(
  state = { categories: [], category: {}, categoriesLoading: true },
  action
) {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload };
    case CATEGORIES_DETAILS_SUCCESS:
      return { ...state, category: action.payload };
    case CATEGORIES_LOADING:
      return { ...state, categoriesLoading: action.payload };
    default:
      return state;
  }
}
