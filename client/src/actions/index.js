import types from "./types";
import axios from 'axios';

export const signUp = userInfo => async dispatch => {
    try{
        const resp = await axios.post('/auth/sign-up', userInfo);
        console.log("redux sign up response: ", resp);
    } catch(err){
        console.log("redux sign up error: ", err.message);
    }
}

export const signIn = userInfo => async dispatch =>{
    try{
        const resp = await axios.post('/auth/sign-in', userInfo);
        console.log("redux sign in response: ", resp);
    } catch(err){
        console.log("redux error signing in", err)
    }
}
