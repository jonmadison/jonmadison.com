var express = require('express');
var router = express.Router();

router.get("/api/flickr/photos/:userid", function(req, res, next) {
    res.status(200);
    res.send({"status":"ok"});
});

module.exports = router;
