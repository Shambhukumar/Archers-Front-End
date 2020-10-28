import axios from "axios";
export const AUTH_START = "AUTH_START";
export const AUTH_USER = "AUTH_USER";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
// const authStart = {
//       type: AUTH_START,
//       payload: "WORKING"
// };

export const authUser = async(email,password,dispatch) =>{
  
  console.log(email,password);
  const logincheck = await axios.post(process.env.REACT_APP_BASE_URL+"login",{
      email: email,
      password: password
    })
   localStorage.setItem("accesstoken",logincheck.data.data.accesstoken) 
  console.log(logincheck);
 return dispatch({type:AUTH_USER,payload:logincheck})
  
   
}

export const logoutUser = (dispatch) =>{
  localStorage.removeItem("accesstoken")
  return dispatch({type:AUTH_LOGOUT,payload:null})
}
