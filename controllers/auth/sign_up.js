const validation = require('../../helpers/validation');
const { users } = require('../../db/models');
const { tokenForUser, userDataToSend } = require('../../helpers/auth');

module.exports = async (req, res) => {
    const { body: { firstName, lastName, email, password } } = req;

    try{
        const errors = [];
        if(!firstName){
            errors.push("Missing first name");
        } else if(!validation.name(firstName)){
            errors.push("First name can only contain a-z, no special characters allowed");
        }
        if(!lastName){
            errors.push("Missing last name");
        } else if(!validation.name(lastName)){
            errors.push("Last name can only contain a-z, no special characters allowed");
        }
        if(!email){
            errors.push("Missing email");
        } else if(!validation.email(email)){
            errors.push("Invalid email address, correct example format: me@example.com");
        }
        if(!password){
            errors.push("Missing password");
        } else if(!validation.password(password)){
            errors.push("Password must contain upper and lowercase letters, a special character, a number, and be at least 8 characters long");
        }
        if(errors.length){
            return res.status(422).send({
                success: false,
                errors
            });
        }

        const existingUser = await users.findOne({
            where: { email }
        });

        if(existingUser){
            return res.status(422).send('User already exists')
        };

        const newUser = users.build({
            email,
            firstName,
            lastName,
            password
        });

        await newUser.save();

        res.status(200).send({
            success: true,
            token: tokenForUser(newUser),
            user: userDataToSend(newUser)
        });
    } catch(err){
        console.log('server sign up error: ', err);
        res.status(500).send("Sign up failed");
    }
}
