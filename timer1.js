// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const args = process.argv.slice(2);
// Sytem sound beep

for (const arg of args) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000)
}

