import React, { useReducer, useContext, } from "react";
import reducer from "./reducer";
import axios from "axios";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,

  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  
  
 

 
  HANDLE_CHANGE,
  CLEAR_VALUES,


 
} from "./action";


const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");



const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",


  isEditing: false,
  


};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
  const authFetch = axios.create({
    baseURL: "/api/v1",
    // headers: {
    //   Authorization: `Bearer ${state.token}`,
    // },
    
     
    headers:{
      'Content-Type':'multipart/form-data'
      
    }
  });

  // response interceptor
  authFetch.interceptors.request.use(
    (config) => {
      // do something before request is sent
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      // do something with the request error
      return Promise.reject(error);
    }
  );
  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      if (error.response.status === 401) {
        console.log('hello');
        
      }
      return Promise.reject(error);
    }
  );
   const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    // console.log(currentUser)
    // console.log('from setup')


   

  
    // console.log(currentUser)
    const {name,location,email,password,profilePicture,username} = currentUser

    // console.log(currentUser)
    
    let formData = new FormData()

    formData.append('name',name)
    formData.append('name',username)
    formData.append('location',location)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('profilePicture',profilePicture)





    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        formData
      );

      




      const { user, token, location } = data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
          alertText,
        },
      });

      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      //local storage later

      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };


 

  

 
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,

        setupUser,
      
       
       
        handleChange,
        clearValues,
        
   
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
