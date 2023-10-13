function stdin() {
  console.log('Welcome to Holberton School, what is your name?');
  const input = process.stdin;
  input.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
  });
  input.on('end', () => {
    console.log('This important software is now closing');
  });
}
stdin();
