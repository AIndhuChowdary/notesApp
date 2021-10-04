console.log("Starting app.js");

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
const chalk= require('chalk');

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if (command === "add") {
  console.log(chalk.bgGreen("New note created"));
  notes.addingNote(title, body);
} else if (command === "remove") {
  console.log(chalk.bgGreenBright("Note removed"));
  notes.removeNote(title);
} else if (command === "read") {
  console.log(chalk.bgYellow("Reading note"));
  notes.readNote(title);
} else if (command === "list") {
  console.log(chalk.bgBlue("Your Notes:"));
  notes.getAll();
} else {
  console.log("Unknown command was used!");
}