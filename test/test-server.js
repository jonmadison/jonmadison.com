"use strict";
/* eslint-env mocha */
/* eslint camelcase: [2, {properties: "never"} ] */

require("must");
let app = require("../jonmadison.com");
let request = require("supertest");
let qs = require("qs");

describe("data server -- general", function() {
    it("returns 404 on unknown route", function(done) {
        request(app)
            .get("/api/blahblah")
            .end(function(err, res) {
                res.status.must.equal(404);
                done();
            });
    });
});

describe("data server -- posts", function() {
    it("returns a list of posts from the repo", function(done) {
        request(app)
            .get("/api/posts")
            .end(function(err, res) {
                res.status.must.equal(200);
                done();
            });
    });
});

describe("data server -- flickr", function() {
    it("returns a list of photos based on user and tag", function(done) {
        let query = {
            tags: ["webfeatured"],
            results: 10
        };

        request(app)
            .get(`/api/flickr/photos/smartbrother/?${qs.stringify(query)}`)
            .end(function(err, res) {
                res.status.must.equal(200);
                res.body.length.must.equal(5);
                res.body[0].must.have.keys(["id","imageName","altText","tags"]);
                res.body[0].tags.must.include("webfeatured");
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
                res.body.length.must.equal(10);
                res.body[0].must.have.keys(["id","imageName","altText","tags"]);
                done();
            });
    });

    it("returns 100 photos if no results count given", function(done) {
        request(app)
            .get(`/api/flickr/photos/smartbrother`)
            .end(function(err, res) {
                res.status.must.equal(200);
                res.body.length.must.equal(100);
                res.body[0].must.have.keys(["id","imageName","altText","tags"]);
                done();
            });
    });
});
