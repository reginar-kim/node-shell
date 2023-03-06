// //Output a prompt
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//     const { cwd } = require('node:process');

//     console.log(`Current directory: ${cwd()}`);

//     process.stdout.write('\nprompt > ');
// });

// const pwd = require('./pwd');
const ls = require('./ls');

// pwd();
ls();