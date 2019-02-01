import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from "../form/input";
import { validation } from '../../helpers';
import { signIn } from '../../actions';

let SignIn = props => {
    const handleSignIn = (values) => {
        console.log( values)
        props.signIn(values);
    }

    return (
        <div className = "container">
            <h1 className = "center">Sign In</h1>
            <form onSubmit = {props.handleSubmit(handleSignIn)}>
                <div className = "row">
                    <Field name = "email" size = "s12 m8 offset-m2" label = "Email" component = {Input}/>
                </div>
                <div className = "row">
                    <Field name = "password" size = "s12 m8 offset-m2" label = "Password" type = "password" component = {Input}/>
                </div>
                <div className="row">
                    <div className = "col s12 m8 offset-m2 right-align">
                        <button className = "btn black white-text">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function validate({email, password}){
    const errors = {};
    if(!email){
        errors.email = "Please enter your email";
    } else if (!validation.email(email)){
        errors.email = "Please enter a valid email. Example: me@mail.com";
    }
    if(!password){
        errors.password = "Please create a password";
    } else if (!validation.password(password)){
        errors.password = "Password must contain upper and lowercase letters, a special character, a number, and be at least 8 characters long";
    }
    return errors;
}

export default connect(null, { signIn })(
    reduxForm({
        form: 'sign-in',
        validate,
        initialValues: {
            email: "test@email.com",
            password: "asdF1234!"
        }
    })(SignIn)
);
