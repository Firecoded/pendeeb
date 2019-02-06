const jwt = require('jwt-simple');
const keys  = require('../config/keys');
keys.jwtSecret.jwtConfig;

exports.userDataToSend = (user) => {
    return {
        email: user.email,
        pid: user.pid,
        name: `${user.firstName} ${user.lastName[0].toUpperCase()}.`
    }
}

exports.tokenForUser = user => jwt.encode({
    uid: user.id,
    ts: new Date().getTime()
}, keys.jwtSecret);

