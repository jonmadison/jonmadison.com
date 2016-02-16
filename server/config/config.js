"use strict";

let config = {
    apiVersion: 1,
    flickrApiKey: process.env.FLICKR_API_KEY,
    flickrApiSecret: process.env.FLICKR_API_SECRET,
    //get from https://www.flickr.com/services/api/explore/flickr.people.findByUsername
    flickrUserId: process.env.FLICKR_USER_ID,
    flickrEndpoint: "api.flickr.com/services/rest/",
    apiPrefix: "/api",
    development: {
        port: 5008,
        app: {
            name: "jonmadison.com API dev"
        }
    },
    test: {
        port: 5009,
        app: {
            name: "jonmadison.com API test"
        }
    },
    stage: {
        app: {
            name: "jonmadison.com API stage"
        }
    },
    production: {
        port: process.env.PORT || 5000,
        name: "jonmadison.com API"
    }
};

module.exports = config;
