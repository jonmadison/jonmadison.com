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