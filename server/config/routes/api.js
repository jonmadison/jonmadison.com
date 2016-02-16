"use strict";

let express = require("express");
let router = express.Router();
let flickrAdapter = require("../../controllers/flickr");

router.get("/flickr/photos/:userid", function(req, res) {
    return flickrAdapter.index.json(req,res);
});

module.exports = router;
