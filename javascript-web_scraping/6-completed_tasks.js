#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const dictTask = {};

  for (const task of JSON.parse(body)) {
    if (task.completed) {
      if (!dictTask[task.userId]) {
        dictTask[task.userId] = 1;
      } else {
        dictTask[task.userId]++;
      }
    }
  }
  console.log(dictTask);
});
