const router = require('express').Router();


// You can require and use your routes here ;)

router.get('/home', (req, res) => {
    res.send("working");
});

module.exports = router;