import { AUTH_START, AUTH_USER, AUTH_LOGOUT } from "../actions/auth";

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
        isAuthenticated: true,
        accesstoken: payload.data.data.accesstoken,
        userdata: payload.data.data.user,
      };
    case AUTH_LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default authReducer;
