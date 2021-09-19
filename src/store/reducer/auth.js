import {AUTH_USER, AUTH_LOGOUT,AUTH_ERROR,GET_CATEGORY,Loading } from "../actions/auth";

const initState = {
  accesstoken: null,
  userdata: null,
  isAuthenticated: false,
  category: null,
  loading: false
};
const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case Loading:
      return{
        ...state,
        loading: true
      }
    case AUTH_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: payload.data.Authenticated,
        userdata: payload.data.user,
      };

      case GET_CATEGORY:
        return {
          ...state,
          loading: false,
          isAuthenticated: payload.data.Authenticated,
          userdata: payload.data.user,
          category: payload.data.Category
        }
    case AUTH_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        userdata: null
      };
    case AUTH_ERROR:
      return{
        ...state,
        loading: false,
        error: payload.error,
        error_message: payload.message
      }
    
    default:
      return state;
  }
};

export default authReducer;
