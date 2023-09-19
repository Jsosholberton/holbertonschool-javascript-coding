#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const json_file = JSON.parse(body);
  let len = 0;
  for ( const movie of json_file.results ) {
    for ( const character of movie.characters ) {
      if ( character.includes(18) ) {
        len++;
      }
    }
  }
  console.log(len);
});
