const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./config/keys');

require('./db');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(resolve(__dirname, 'client', 'dist')));

require('./routes')(app);

app.get('/', (req, res) => {
    res.send('<h1>Server running</h1>')
})

// passport.use(
//     new GoogleStrategy({
//         clientID: keys.googleClientId,
//         clientSecret: keys.googleClientSecret,
//         callbackURL: '/auth/google/callback'
//     }, (accessToken) => {
//         console.log(accessToken);
//     })
// );

// app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
// }));
// app.get('/auth/google/callback', passport.authenticate('google'));


const PORT = process.env.PORT || 5000;
app.listen(PORT);
