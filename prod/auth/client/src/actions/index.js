import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from 'axios'

export const signup = (formProps, callback) => async (dispatch) => {
    try {
        const reponse = await axios.post('http://localhost:3000/signup',formProps)
        
        dispatch({type: AUTH_USER, payload: reponse.data.token})   
        callback();
        localStorage.setItem('token',reponse.data.token)
        
    } catch (error) {
        
        dispatch({type: AUTH_ERROR, payload:"Email in use"})
    }    
}

export const signout = () => {    
        
        localStorage.removeItem('token');              

        return {
            type: AUTH_USER,
            payload: ''
        }
}


export const signin = (formProps, callback) => async (dispatch) => {
    try {
        const reponse = await axios.post('http://localhost:3000/signin',formProps)
        
        dispatch({type: AUTH_USER, payload: reponse.data.token})   
        
        callback();
        
        localStorage.setItem('token',reponse.data.token)
        
    } catch (error) {        
        dispatch({type: AUTH_ERROR, payload:"Invalid credentials"})
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
