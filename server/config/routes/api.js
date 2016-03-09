"use strict";

let express = require("express");
let router = express.Router();
let statusController = require("../../controllers/status");
let flickrAdapter = require("../../controllers/flickr");

router.get("/statuses", function(req, res) {
    return statusController.index.json(req,res);
});

router.get("/flickr/photos/:userid", function(req, res) {
    return flickrAdapter.index.json(req,res);
});

module.exports = router;
