"use strict";
/* eslint-env mocha */
/* eslint camelcase: [2, {properties: "never"} ] */

require("must");
let app = require("../jonmadison.com");
let request = require("supertest");
let qs = require("qs");

describe("data server -- statuses", function() {
    it("returns a list of posts from the repo", function(done) {
        request(app)
            .get("/api/statuses")
            .end(function(err, res) {
                res.status.must.equal(200);
                done();
            });
    });
});
