"use strict";

let pg = require('pg');
let config = require('../config/config');
let MAX_RESULTS = 50;


exports.index = {
  json: function getJson(req,res) {
    pg.connect(config.databaseUrl,function(err,client,done){
      if(err) {
        return res.status(500).json({ error:err });
      }
      var statuses = [];

      var query = client.query('SELECT * from posts order by created_at DESC limit ' + MAX_RESULTS);
      query.on('row', function(row) {
        statuses.push(row);
      });

      query.on('end',function(){
        done(); //release to pool
        var results = { data: statuses };
        return res.status(200).json(results);
      })
    })
  }
}
