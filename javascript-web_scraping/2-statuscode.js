#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (err, response) => {
  console.log(`code: ${response.statusCode}` || `code: ${err}`);
});
