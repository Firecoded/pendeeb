import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from "../form/input";
import { validation } from '../../helpers';

let SignUp = props => {
    const handleSignUp = (values) => {
        console.log( values)
    }

    return (
        <div className = "container">
            <h1 className = "center">Sign Up</h1>
            <form onSubmit = {props.handleSubmit(handleSignUp)}>
                <div className = "row">
                    <Field name = "email" size = "s6 offset-s3" label = "Email" component = {Input}/>
                </div>
                <div className = "row">
                    <Field name = "firstName" size = "s6" label="First Name" component = {Input}/>
                    <Field name = "lastName" size = "s6" label="Last Name" component = {Input}/>
                </div>
                <div className = "row">
                    <Field name = "password" size = "s6 " label = "Password" type = "password" component = {Input}/>
                    <Field name = "confirmPassword" size = "s6 " label = "Confirm Password" type = "password" component = {Input}/>
                </div>
                <div className="row">
                    <div className = "col s6 center">
                        <button type="button" className = "btn black white-text">Cancel</button>
                    </div>
                    <div className = "col s6 center">
                        <button className = "btn black white-text">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function validate({firstName, lastName, email, password, confirmPassword}){
    const errors = {};
    if(!firstName){
        errors.firstName = "Please enter your first name";
    }
    if(!lastName){
        errors.lastName = "Please enter your last name";
    }
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
    if(password !== confirmPassword){
        errors.confirmPassword = "Passwords do not match, please retype your passwords";
    }
    return errors;
}

export default connect(null, {})(
    reduxForm({
        form: 'sign-up',
        validate
    })(SignUp)
);
