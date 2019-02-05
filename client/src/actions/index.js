import types from "./types";
import axios from 'axios';
import {authHeaders} from '../helpers/redux_helpers';

export const jwtSignIn = () => async dispatch => {
    try {
        const resp = await axios.get('/auth/jwt-sign-in', authHeaders());
        console.log("redux jwt resp", resp);
    }catch(err){
        console.log('redux error with jwt sign in', err)
    }
}

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
        localStorage.setItem('token', resp.data.token);
    } catch(err){
        console.log("redux error signing in", err)
    }
}
