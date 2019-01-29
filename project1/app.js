console.log("Starting app"); //needed for start

//nodeJS.api

const fs = require('fs'); //file system
const os = require('os'); //user info
const notes = require('./notes.js');
const _ = require('loadash'); //looks in node module folders

var user = os.userInfo()

fs.appendFileSync('greetings.txt', `Hello ${user.username}: you are ${notes.age}`);

var res = notes.addNote();
console.log(res);

var addNumber = notes.add(5,7);
console.log(addNumber);
