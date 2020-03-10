const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // process.stdout.write('\x07');
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!" + '\n')
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    setTimeout(() => {
      process.stdout.write("setting time for x seconds...\n")
      process.stdout.write('\x07');
    }, stdin * 1000);    
  }
});