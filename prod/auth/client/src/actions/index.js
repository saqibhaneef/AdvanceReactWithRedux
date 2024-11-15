import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from 'axios'

export const signup = (formProps, callback) => async (dispatch) => {
    try {
        const reponse = await axios.post('http://localhost:3000/signup',formProps)
        
        dispatch({type: AUTH_USER, payload: reponse.data.token})   
        callback();
    } catch (error) {
        
        dispatch({type: AUTH_ERROR, payload:"Email in use"})
    }    
}


//refactoring
// export const signup = ({email, password}) => (dispatch) => {
//     axios.post('http://localhost:3000/signup',{email,password})
// }


//same syntax
// export const signup = ({email, password})=>{
//     return  function(dispatch){
//     dispatch({type: AUTH_USER}); 
//     }
// }
