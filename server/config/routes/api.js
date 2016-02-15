"use strict";
let env = process.env.NODE_ENV || "development";

///flickr/photos/smartbrother/?tags=[\"featured\"]
let routes = function(app) {
    app.get("/api/flickr/photos/:userid",
        function(req, res) {
            return res.status(200).send({"result": "ok"});
        });
};

module.exports = routes;