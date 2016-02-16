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
            tags: ["webfeatured"],
            results: 10
        };

        request(app)
            .get(`/api/flickr/photos/smartbrother/?${qs.stringify(query)}`)
            .end(function(err, res) {
                res.status.must.equal(200);
                res.body.must.have.keys(["data"]);
                res.body.data.length.must.equal(5);
                res.body.data[0].must.have.keys(["id","imageName","altText","tags"]);
                res.body.data[0].tags.must.include("featured");
                done();
            });
    });

    it("returns a list of photos if no tags given", function(done) {
        let query = {
            results: 10
        };

        request(app)
            .get(`/api/flickr/photos/smartbrother/?${qs.stringify(query)}`)
            .end(function(err, res) {
                res.status.must.equal(200);
                res.body.must.have.keys(["data"]);
                res.body.data.length.must.equal(10);
                res.body.data[0].must.have.keys(["id","imageName","altText","tags"]);
                done();
            });
    });
});
