import { AUTH_START, AUTH_USER, AUTH_LOGOUT,AUTH_ERROR } from "../actions/auth";

const initState = {
  accesstoken: null,
  userdata: null,
  isAuthenticated: false,
};
const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        error: false,
        error_message: null,
        isAuthenticated: true,
        accesstoken: payload.data.data.accesstoken,
        userdata: payload.data.data.user,
      };
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
