import { USERS_LOADING, USERS_ERROR } from "../action/actionType";

export default function userReducer(
  state = { errors: [], usersLoading: true },
  action
) {
  switch (action.type) {
    case USERS_ERROR:
      return { ...state, errors: action.payload };
    case USERS_LOADING:
      return { ...state, usersLoading: action.payload };
    default:
      return state;
  }
}
