/* eslint-env mocha */
/* eslint camelcase: [2, {properties: "never"} ] */

var expect = require('must');
var app = require('../jonmadison.com');
var request = require('supertest');


describe('data server -- flickr', function() {
    it('returns 404 on unknown route', function(done) {
        request(app)
            .get("/api/blahblah")
            .end(function(err, res) {
                res.status.must.equal(404);
                done();
            });
    });

    it('returns a list of photos based on user and tag', function(done) {
        request(app)
            .get("/api/flickr/photos/smartbrother/?tags=[\"featured\"]")
            .end(function(err, res) {
                res.status.must.equal(200);
                done();
            });
    });
});
