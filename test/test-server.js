/* eslint-env mocha */
/* eslint camelcase: [2, {properties: "never"} ] */

var expect = require('must');
var app = require('../server');
var request = require('supertest');


describe('data server -- flickr', function() {
    it('returns a list of photos based on user and tag', (done) => {
        request(app)
        .get("/api/flickr/photos/smartbrother/?tags=[\"featured\"]")
        .expect(200,done);
    });
});
