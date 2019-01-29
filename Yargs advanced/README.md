advanced yargs

you can set information to variables, set aliases,
and set demand, e.g

const yargs=require('yargs');

const argv = yargs
    .command('add', Add a new note, {
        title: {
            describe: 'Title of note',
            demand:true,
            alias:'t'
        },
        body: {
            describe:'Body of note',
            demand:true,
            alias:'b'
        }
    }).help()
    .argv;

    so then in the terminal you can add things through: 
    
    node app.js add -t="flag title" --body="body" to add variables
    or
    node app.js add --help to get information on the possible fields

