import axios from "axios";
export const AUTH_START = "AUTH_START";
export const AUTH_USER = "AUTH_USER";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_ERROR = "AUTH_ERROR";
// const authStart = {
//       type: AUTH_START,
//       payload: "WORKING"
// };

export const authUser = async (email, password, dispatch) => {
  try {
    console.log(email, password);
    const logincheck = await axios.post(
      process.env.REACT_APP_BASE_URL + "login",
      {
        email: email,
        password: password,
      }
    );
    window.localStorage.setItem("accesstoken", logincheck.data.data.accesstoken);
    window.localStorage.setItem("name", logincheck.data.data.user.name);
    window.localStorage.setItem("email", logincheck.data.data.user.email);
    console.log(logincheck);
    return dispatch({ type: AUTH_USER, payload: logincheck });
  } catch (e) {
    console.log(e);
   
      return dispatch({
        type: AUTH_ERROR,
        payload: {
          error: true,
          message: "Your email id or password is invalid please try again!!!",
        },
      });
   
    
  }
};

export const SignupUser = async (
  name,
  email,
  password,
  confirmPassword,
  dispatch
) => {
  try {
    const logincheck = await axios.post(
      process.env.REACT_APP_BASE_URL + "signup",
      {
        name: name,
        email: email,
        password: password,
        conformPassowrd: confirmPassword,
      }
    );
    // console.log(logincheck);
   window.localStorage.setItem("accesstoken", logincheck.data.data.accesstoken);
   window.localStorage.setItem("name", logincheck.data.data.user.name);
   window.localStorage.setItem("email", logincheck.data.data.user.email);

    return dispatch({ type: AUTH_USER, payload: logincheck });
  } catch (e) {
    if (e.response.status === 403) {
      return dispatch({
        type: AUTH_ERROR,
        payload: {
          error: true,
          message:
            "This email id is already registerd please try again with a new one!!!",
        },
      });
    } else if (e.response.status === 401) {
      return dispatch({
        type: AUTH_ERROR,
        payload: {
          error: true,
          message:
            "Your password and confirm password should be the same please try again!!!",
        },
      });
    } else {
      return dispatch({
        type: AUTH_ERROR,
        payload: {
          error: true,
          message: "Oops something went wrong please try after some time!!!",
        },
      });
    }
  }
};

export const setErrorNull = (dispatch) => {
  return dispatch({
    type: AUTH_ERROR,
    payload: { error: false, message: null },
  });
};

export const logoutUser = (dispatch) => {
  window.localStorage.removeItem("accesstoken");
  window.localStorage.removeItem("name");
  window.localStorage.removeItem("email");
  return dispatch({ type: AUTH_LOGOUT, payload: null });
};
