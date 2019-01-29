import types from "./types";
import axios from 'axios';

export const signUp = userInfo => async dispatch => {
    try{
        const resp = await axios.post('/auth/sign-up', userInfo);
        console.log("sign up response: ", resp);
    } catch(err){
        console.log("sign up error: ", err.message);
    }
}
