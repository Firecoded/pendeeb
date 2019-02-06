const { userDataToSend, tokenForUser } = require('../../helpers/auth');

module.exports = (req, res) =>{
    try{
        res.status(200).send({
            success: true,
            token: tokenForUser(req.user),
            user: userDataToSend(req.user)
        });
    } catch(err){
        res.status(500).send("Controller Error signing in ", err);
    }
}