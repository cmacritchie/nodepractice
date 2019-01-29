console.log('Starting App');

const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs'); 

const notes = require('./notes.js');

console.log(process.argv) //all processes that are passed in in command line

const argv = yargs.argv;
var command = process.argv[2]; // or argv._[0]
console.log('Command ', command);
console.log('Yargs', argv);


if(command === 'add') {
    notes.addNote(argv.title, argv.body); //set like node app.js add --title="test" --body="body test"
    console.log("add note");
}else if (command === 'list') {
    console.log("listing all notes");
} else {
    console.log("Command not recognized");
}


