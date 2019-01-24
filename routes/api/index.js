const router = require('express').Router();

router.get('/test', (req, res)=>{
    res.send({
        success: true,
        message: "API test working"
    });
});

module.exports = router;
