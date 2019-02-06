const router = require('express').Router();
const { requireSignIn, requireBasicAuth } = require('../setup');
const { signUp, signIn, jwtSignIn } = require('../../controllers/auth');

router.post('/sign-up', signUp);

router.post('/sign-in', requireSignIn, signIn);

router.get('/jwt-sign-in', requireBasicAuth, jwtSignIn);

module.exports = router;
