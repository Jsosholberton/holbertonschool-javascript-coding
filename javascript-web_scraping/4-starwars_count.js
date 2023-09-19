#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  let len = 0;
  for (const movie of JSON.parse(body).results) {
    for (const character of movie.characters) {
      if (character.includes(18)) {
        len++;
      }
    }
  }
  console.log(len);
});
