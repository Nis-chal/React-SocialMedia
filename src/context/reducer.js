import {
  DISPLAY_ALERT,
  CLEAR_ALERT,

  
  
  LOGOUT_USER,
  
  HANDLE_CHANGE,
  CLEAR_VALUES,

} from "./action";

import { initialState } from "./appContext"

const reducer = (state,action)=>{
    if(action.type === DISPLAY_ALERT){
        return {...state,showAlert:true, alertType:'danger',alertText:'Please provide all values!'}
    }

    if(action.type === CLEAR_ALERT){
        return {...state,showAlert:false, alertType:'',alertText:''}
    }

    if(action.type === LOGOUT_USER){
        return{
            ...initialState,
            user:null,
            token:null,
            
            userLocation:'',
        
        }
    }


 

    if (action.type === HANDLE_CHANGE) {
      return {
        ...state,
        page:1,
        [action.payload.name]:action.payload.value
      };
    }

    if (action.type === CLEAR_VALUES) {
      const initialState = {
        isEditing: false,
        
        
      };
      return { ...state, ...initialState };
    }



  throw new Error (`no such action: ${action.type}`)

}

export default reducer
