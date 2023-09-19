#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
character_id = 18;

request.get(url, (err, response, body) => {
  json_file = JSON.parse(body)
  let len = 0;
  for ( const movie of json_file.results ) {
    for ( const character in movie.characters ) {
      if ( character == character_id ) {
        len += 1;
      }
    }
  }
  console.log(len);
});
