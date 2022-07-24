import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";


import {
  LOADING_BEGIN,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  LOGOUT_USER,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  GET_POSTS_BEGIN,
  GET_POSTS_SUCCESS,
  POSTS_DETAIL_BEGIN,
  POSTS_BEGIN_SUCCESS,
  POSTS_UPDATE_SUCCESS,
  POSTS_DELETE_BEGIN,
  GET_PROFILE_BEGIN,
  FOLLOW_BEGIN,
  FOLLOW_SUCCESS,
  SEARCH_SUCCESS,
  COMMENT_BEGIN,
  COMMENT_SUCCESS,
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  DELETE_COMMENT_BEGIN,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  UPDATE_COMMENT_BEGIN,
  UPDATE_COMMENT_ERROR,
  UPDATE_COMMENT_SUCCESS,

  UPDATE_PROFILE_BEGIN,
  UPDATE_PROFILE_SUCCESS,
  
  EXPLORE_SUCCESS,

  CREATE_COLLECTION_BEGIN,
  CREATE_COLLECTION_SUCCESS,
  CREATE_COLLECTION_ERROR,




 GET_COLLECTION_BEGIN,
 GET_COLLECTION_SUCCESS,
 GET_COLLECTION_ERROR,

 UPDATE_COLLECTION_BEGIN,
 UPDATE_COLLECTION_ERROR,
 UPDATE_COLLECTION_SUCCESS


 

} from "./action";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");
const profilePicture = localStorage.getItem("profilePicture");
const username = localStorage.getItem("username");
const name = localStorage.getItem("name");




const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",

  isEditing: false,
  userfeed: [],
  isSubmit: false,

  username:username||'',
  profilePicture:profilePicture || '',
  name:name||'',

  likeAnimation: false,
  postInfo: "",
  ImageToEdit: "",
  isDeleting: false,

  profileUser: "",
  profilePost: [],
  buttontype: false,
  searchList: [],
  followers: [],
  followings: [],
  commentsList: [],

  explorePost:[],
  commentUpdate:false,
  collection:[]
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
  const authFetch = axios.create({
    baseURL: "/api/v1",
    // headers: {
    //   Authorization: `Bearer ${state.token}`,
    //   "Content-Type": "multipart/form-data",

    // },

    
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
        console.log("hello");
      }

      if (error.response.status === 500) {
        console.log(error.response.data);
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

  const addUserToLocalStorage = ({ user, token, location,profilePicture ,username,name}) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
    localStorage.setItem("profilePicture", profilePicture);
    localStorage.setItem("username", username);
    localStorage.setItem("name", name);



  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    const {name, location, email, password, profilePicture, username } =
      currentUser;

    let formData = new FormData();



    formData.append("name", name);
    formData.append("username", username);
    formData.append("location", location);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture);

    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, formData);

      const { user, token, location } = data;
      const username = user.username
      const profilePicture = user.profilePicture
      const name = user.name

      addUserToLocalStorage({ user, token, location,profilePicture,username,name });
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          user,
          token,
          username,
          profilePicture,
          location,
          alertText,
          name
        },
      });

    } catch (error) {
      //local storage later

      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
    localStorage.removeItem("profilePicture");
    localStorage.removeItem("username");
    localStorage.removeItem("name");



  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeFromLocalStorage();
  };

  const createPost = async ({ userpost }) => {
    dispatch({ type: CREATE_POST_BEGIN });
    try {
      const { userlocation, description, images } = userpost;
      let formData = new FormData();

      formData.append("location", userlocation);
      formData.append("description", description);
      formData.append("images", []);

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await authFetch.post("posts/upload", formData);
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: { isSubmit: !state.isSubmit },
      });
      // call function instead clearValues()
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_POST_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getallPosts = async () => {
    dispatch({ type: GET_POSTS_BEGIN });
    try {
      const response = await authFetch("/posts/getposts");
      const { posts } = response.data;

      dispatch({ type: GET_POSTS_SUCCESS, payload: { userfeed: posts } });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };

  const likepost = async ({ postid }) => {
    try {
      await authFetch.patch(`/posts/likepost/${postid}`);
    } catch (error) {
      console.log(error);
    }
  };

  const unlikepost = async ({ postid }) => {
    try {
      await authFetch.patch(`/posts/unlikepost/${postid}`);
      console.log(postid);
    } catch (error) {
      console.log(error);
    }
  };

  const detailspost = async (postid) => {
    try {
      const response = await authFetch(`/posts/postdetail/${postid}`);
      const { post } = response.data;
      console.log(post);
      dispatch({
        type: POSTS_DETAIL_BEGIN,
        payload: { post },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const postUpdate = async ({ postInformation }) => {
    try {
      dispatch({ type: POSTS_BEGIN_SUCCESS });
      const { images, networkpath, location, description, postId } =
        postInformation;
      let formData = new FormData();

      formData.append("location", location);
      formData.append("description", description);
      for (let i = 0; i < images.length; i++) {
        formData.append("filePath", images[i]);
      }
      for (let i = 0; i < networkpath.length; i++) {
        formData.append("networkpath", networkpath[i]);
      }

      await authFetch.patch(`/posts/updatepost/${postId}`, formData);
      dispatch({
        type: POSTS_UPDATE_SUCCESS,
        payload: { isEditing: !state.isEditing },
      });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const deletePost = async (postId) => {
    dispatch({
      type: POSTS_DELETE_BEGIN,
      payload: { isDeleting: !state.isDeleting },
    });
    try {
      await authFetch.delete(`/posts/postdetail/${postId}`);
    } catch (error) {
      logoutUser();
    }
  };

  const userProfile = async (userId) => {
    dispatch({ type: LOADING_BEGIN });
    try {
      const response = await authFetch.get(`/profile/${userId}`);
      const { post, user, followings, followers } = response.data;
      
      dispatch({
        type: GET_PROFILE_BEGIN,
        payload: { post, user, followings, followers },
      });
    } catch (error) {}
  };

  const followUser = async (userId) => {
    dispatch({ type: FOLLOW_BEGIN });
    try {
      await authFetch.patch(`/profile/${userId}`);
      dispatch({ type: FOLLOW_SUCCESS });
    } catch (e) {
      console.log(e);
    }
  };

  const unfollowUser = async (userId) => {
    dispatch({ type: FOLLOW_BEGIN });
    try {
      await authFetch.patch(`/profile/unfollow/${userId}`);
      dispatch({ type: FOLLOW_SUCCESS });
    } catch (e) {
      console.log(e);
    }
  };

  const removeFollower = async (userId) => {
    dispatch({ type: FOLLOW_BEGIN });
    try {
      await authFetch.patch(`/profile/removefollower/${userId}`);
      dispatch({ type: FOLLOW_SUCCESS });
    } catch (e) {
      console.log(e);
    }
  };
  const searchProfile = async (url) => {
    try {
      const res = await authFetch.get(`/profile/${url}`);
      const { users } = res.data;

      dispatch({ type: SEARCH_SUCCESS, payload: { users } });
    } catch (e) {
      console.log(e);
    }
  };

  const commentOnPost = async ({ commentInfo, postId }) => {
    dispatch({ type: COMMENT_BEGIN });
    try {
      await authFetch.post(`/comment/post`, { content: commentInfo, postId });
      dispatch({ type: COMMENT_SUCCESS });
    } catch (e) {
      console.log(e);
    }
  };

  const allComments = async ({ postId }) => {
    dispatch({ type: GET_COMMENTS_BEGIN });
    try {
      const response = await authFetch.get(`/comment/get/${postId}`);
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: { comments: response.data.comment },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const commentDelete = async ({ commentId }) => {
    dispatch({ type: DELETE_COMMENT_BEGIN });
    try {
      await authFetch.delete(`/comment/delete/${commentId}`);
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: DELETE_COMMENT_ERROR,
      });
    }
  };

  const commentUpdate = async ({ commentId, content }) => {
    dispatch({ type: UPDATE_COMMENT_BEGIN });
    try {
      await authFetch.patch(`/comment/update/${commentId}`, { content });
      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: UPDATE_COMMENT_ERROR,
      });
    }
  };

  const profileUpdate = async ( {content} ) => {
    dispatch({ type: UPDATE_PROFILE_BEGIN });
    
    const {name,username,location,email,profilePicture,coverPage,profileId} = content
    let formData = new FormData();

      formData.append("name",name)
      formData.append("username",username)
      formData.append("location",location)
      formData.append("email",email)
      formData.append("profilePicture",profilePicture)
      formData.append("coverPage",coverPage)

      
       



    try {
      const {data} = await authFetch.put(`/profile/updateprofile/${profileId}`,formData)
      const {profilePicture,username,name} = data.users
       
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload:{profilePicture,username,name}
      });
      localStorage.setItem("profilePicture", profilePicture);
     localStorage.setItem("username", username);
    localStorage.setItem("name", name);
     
     
    } catch (e) {
      
    }
    clearAlert();

  };

  const explorePage = async ()=>{
    const {data} =await authFetch.get("/posts/explorepost")
    const {posts} = data
    dispatch({
      type:EXPLORE_SUCCESS,
      payload:{posts}
    })
  } 

  const createCollection = async({postId,usercollection,name})=>{

    dispatch({type:CREATE_COLLECTION_BEGIN})

    try{

      let formdata = new FormData()
      formdata.append("postId",postId)
      formdata.append("usercollection",usercollection)
      formdata.append("name",name)
  
  
  
      const {data}= await authFetch.post('/collection',formdata)
      dispatch({type:CREATE_COLLECTION_SUCCESS})
    }catch(e){
    dispatch({type:CREATE_COLLECTION_ERROR})

    }


  }
  


   const getCollection = async()=>{

    dispatch({type:GET_COLLECTION_BEGIN})

    try{

    
  
  
  
      const {data}= await authFetch.get('/collection')
      const{collection} = data
      console.log(collection)
      dispatch({type:GET_COLLECTION_SUCCESS,
      payload:{collection}
      })
    }catch(e){
    dispatch({type:GET_COLLECTION_ERROR})

    }




  }


  const updateCollection = async({postId,usercollection,name})=>{

    // dispatch({type:UPDATE_COLLECTION_BEGIN})

    try{

      let formdata = new FormData()
      formdata.append("postId",postId)
      formdata.append("usercollection",usercollection)
      formdata.append("name",name)
  
  
  
      const {data}= await authFetch.patch('/collection',formdata)
      dispatch({type:UPDATE_COLLECTION_SUCCESS})
    }catch(e){
    // dispatch({type:UPDATE_COLLECTION_ERROR})

    }

    clearAlert()


  }


    const allCollection = async()=>{

    dispatch({type:GET_COLLECTION_BEGIN})

    try{

    
  
  
  
      const {data}= await authFetch.get('/collection')
      const{collection} = data
      console.log(collection)
      dispatch({type:GET_COLLECTION_SUCCESS,
      payload:{collection}
      })
    }catch(e){
    dispatch({type:GET_COLLECTION_ERROR})

    }




  }


  
    const removeBookmark = async(postId)=>{

    dispatch({type:GET_COLLECTION_BEGIN})

    try{

    
  
  
  
      const {data}= await authFetch.patch(`/collection/${postId}`)
      const{collection} = data
      console.log(collection)
      dispatch({type:GET_COLLECTION_SUCCESS,
      payload:{collection}
      })
    }catch(e){
    dispatch({type:GET_COLLECTION_ERROR})

    }




  }



  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,

        setupUser,

        handleChange,
        clearValues,

        createPost,
        getallPosts,

        detailspost,

        likepost,

        logoutUser,
        unlikepost,

        postUpdate,
        deletePost,

        userProfile,
        profileUpdate,
        followUser,
        unfollowUser,
        searchProfile,
        removeFollower,
        commentOnPost,
        allComments,
        commentDelete,
        commentUpdate,
        explorePage,
        createCollection,
        getCollection,
        updateCollection,
        allCollection,
        removeBookmark
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
