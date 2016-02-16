"use strict";

let co = require("co");
let request = require("co-request");
let global = require("../config/config");
let qs = require('qs');



// exports.index = {
//   json: function getJson(req,res) {
//     pg.connect(conString,function(err,client,done){
//       if(err) {
//         return res.status(500).json({ error:err });
//       }
//       var plants = [];

//       var query = client.query('SELECT * from PLANTS order by name ASC limit ' + MAX_RESULTS);
//       query.on('row', function(row) {
//         plants.push(row);
//       });

//       query.on('end',function(){
//         done(); //release to pool
//         var results = { plants: plants };
//         // console.log(results);
//         return res.status(200).json(results);
//       })
//     })
//   }
// }

const MAX_RESULTS_PER_PAGE = 100;

let flickrIndex = {
    json: function getJson(req, res) {
        let env = process.env.NODE_ENV || "development";
        console.log(`params: ${JSON.stringify(req.query.results)}`);
        let resultCount = req.query.results || MAX_RESULTS_PER_PAGE;
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

            let result = yield request(url);
            let response = result;
            let body = JSON.parse(result.body);

            let flickrPhotos = [];
            body.photos.photo.map((p) => {
                let photoUrl = `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`;
                let result = {
                    id: p.id,
                    imageName: photoUrl,
                    altText: p.title
                }
                flickrPhotos.push(result);
            });

            let dataResult = {data: flickrPhotos};

            res.status(200);
            res.send(dataResult);
        }).catch(function (err) {
            res.status(500);
            res.send({ "error": err});
        });

    }
};

module.exports.index = flickrIndex;