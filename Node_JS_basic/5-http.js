const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const Url = url.parse(req.url).pathname;
  if (Url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (Url === '/students') {
    const filePath = process.argv[2];
    countStudents(filePath)
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(data.join('\n'));
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
});

app.listen(1245);

module.exports = app;
