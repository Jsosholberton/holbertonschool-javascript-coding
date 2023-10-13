function stdin() {
  console.log('Welcome to Holberton School, what is your name?');
  var input = process.stdin;
  input.setEncoding('utf-8');
  input.on('data', function (data) {
    console.log(`Your name is: ${data}`);
  });
  input.on('end', function () {
    console.log('This important software is now closing');
  });
}
stdin();
