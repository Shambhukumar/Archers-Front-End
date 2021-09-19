import axios from "axios";
export const AUTH_START = "AUTH_START";
export const AUTH_USER = "AUTH_USER";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
export const AUTH_ERROR = "AUTH_ERROR";
export const GET_CATEGORY = "GET_CATEGORY";
export const Loading = "Loading";

// const authStart = {
//       type: AUTH_START,
//       payload: "WORKING"
// };

export const authUser = async (email, password, dispatch) => {
  try {
    // console.log(email, password);
    dispatch({type: Loading, payload: null})
    const logincheck = await axios.post(
      process.env.REACT_APP_BASE_URL + "user/login",
      {data:{
        email: email,
        password: password,
      }},
      {withCredentials: true}
    );
    // console.log(logincheck);
    return dispatch({ type: AUTH_USER, payload: logincheck.data });
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

export const GetCategories = async(dispatch)=>{
  try{
    const payload = await axios.get(process.env.REACT_APP_BASE_URL+`news/category`, {withCredentials: true}) 
    console.log(payload)

    return dispatch({type: GET_CATEGORY, payload: payload.data})
  }catch(e){
    console.log(e)
    return dispatch({
      type: AUTH_ERROR,
      payload: {
        error: true,
        message: "Cannot get Category",
      },
    });
  }
}

export const SignupUser = async (
  name,
  email,
  password,
  confirmPassword,
  dispatch
) => {
  try {
    dispatch({type: Loading, payload: null})
    const logincheck = await axios.post(
      process.env.REACT_APP_BASE_URL + "user/saveUser",
      {data:{
         name: name,
        email: email,
        password: password,
        conformPassowrd: confirmPassword,
      }
       
      },
      {withCredentials: true }
    );
    console.log(logincheck);

    return dispatch({ type: AUTH_USER, payload: logincheck.data });
  } catch (e) {
    if (e.response.status === 403) {
      return dispatch({
        type: AUTH_ERROR,
        payload: {
          error: true,
          message:
            "This email id is already registerd with another user.",
        },
      });
    } else if (e.response.status === 401) {
      return dispatch({
        type: AUTH_ERROR,
        payload: {
          error: true,
          message:
            "Your password and confirm password should be the same.",
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

export const logoutUser = async(dispatch) => {
  try{
    const logout = await axios.get(process.env.REACT_APP_BASE_URL + "user/logout",{withCredentials: true });
    // console.log(logout)
    return dispatch({ type: AUTH_LOGOUT, payload: null });
  }catch(e){
    return dispatch({
      type: AUTH_ERROR,
      payload: {
        error: true,
        message: "not able to logout",
      },
    });
  
  }
  
};
