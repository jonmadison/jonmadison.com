"use strict";
/* eslint-env mocha */
/* eslint camelcase: [2, {properties: "never"} ] */

require("must");
let app = require("../jonmadison.com");
let request = require("supertest");
let qs = require("qs");

describe("data server -- flickr", function() {
    it("returns 404 on unknown route", function(done) {
        request(app)
            .get("/api/blahblah")
            .end(function(err, res) {
                res.status.must.equal(404);
                done();
            });
    });

    it("returns a list of photos based on user and tag", function(done) {
        let query = {
            tags: ["featured"],
            results: 5
        };

        request(app)
            .get(`/api/flickr/photos/smartbrother/?${qs.stringify(query)}`)
            .end(function(err, res) {
                res.status.must.equal(200);
                res.body.must.have.keys(["data"]);
                res.body.data.length.must.equal(5);
                res.body.data[0].must.have.keys(["id","imageName","altText"]);
                done();
            });
    });
});
