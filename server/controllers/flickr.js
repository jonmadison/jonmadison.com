"use strict";

let logger = require("../config/logger");
let co = require("co");
let request = require("co-request");
let global = require("../config/config");
let qs = require('qs');
let _ = require("lodash");

let flickrIndex = {
    json: function getJson(req, res) {
        logger.debug(`flickr index, showing ${global.flickrResultsPerPage} results per page`);
        let resultCount = req.query.results || global.flickrResultsPerPage;
        let query = {
            method: "flickr.people.getPublicPhotos",
            api_key: global.flickrApiKey,
            user_id: global.flickrUserId,
            extras: "tags",
            per_page: resultCount,
            page: 1,
            format: "json",
            nojsoncallback: "true"
        };

        co(function* () {
            // You can also pass options object, see http://github.com/mikeal/request docs
            let url = `https://${global.flickrEndpoint}?${qs.stringify(query)}`;
            // console.log(`flickr: ${url}`);
            let result = yield request(url);
            let body = JSON.parse(result.body);
            let photos = [];

            if(req.query.tags) {
                for (let tag of req.query.tags) {
                    let filtered = body.photos.photo.filter( (p) => { return (p.tags.indexOf(tag) > -1)} );
                    photos = _.concat(photos,filtered);
                    // console.log(`found ${filtered.length} images with tag ${tag}`);
                }
            } else {
                photos = body.photos.photo;
            }

            let flickrPhotos = photos.map((p) => {
                let photoUrl = `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`;
                let flickrPageUrl = `https://www.flickr.com/photos/${process.env.FLICKR_USERNAME}/${p.id}`;
                let result = {
                    id: p.id,
                    imageName: photoUrl,
                    url: flickrPageUrl,
                    altText: p.title,
                    tags: p.tags
                };
                return result;
            });

            let dataResult = flickrPhotos;
            res.status(200);
            res.send(dataResult);
        }).catch(function (err) {
            res.status(500);
            res.send({ "error": err});
        });

    }
};

module.exports.index = flickrIndex;