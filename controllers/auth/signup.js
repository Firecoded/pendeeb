
module.exports = (req, res) => {
    try{
        res.send({
            success: true,
            message: "this is the sign up endpoint"
        })
    } catch(err){
        console.log('sign up error': err);
        res.status(500).send("Sign up failed");
    }
}
