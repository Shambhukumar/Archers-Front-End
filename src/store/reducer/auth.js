import {AUTH_USER, AUTH_LOGOUT,AUTH_ERROR,GET_CATEGORY } from "../actions/auth";

const initState = {
  accesstoken: null,
  userdata: null,
  isAuthenticated: false,
  category: null
};
const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: payload.data.Authenticated,
        userdata: payload.data.user,
      };

      case GET_CATEGORY:
        return {
          ...state,
          isAuthenticated: payload.data.Authenticated,
          userdata: payload.data.user,
          category: payload.data.Category
        }
    case AUTH_LOGOUT:
      return initState;
    case AUTH_ERROR:
      return{
        ...state,
        error: payload.error,
        error_message: payload.message
      }
    
    default:
      return state;
  }
};

export default authReducer;
