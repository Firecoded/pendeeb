import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn from './sign_in';
import SignUp from './sign_up';
import NotFound from '../layout/404';
import auth from '../hoc/auth';

export default ({match: {path}}) => {

    return (
        <Switch>
            <Route path ={`${path}/sign-in`} component = {auth(SignIn, '/dashboard', false)}/>
            <Route path ={`${path}/sign-up`} component = {auth(SignUp, '/dashboard', false)}/>
            <Route component = {NotFound}/>
        </Switch>
    )
}
