
you can open in debug mode using 'inspect' e.g. node inspect app.js

typing 'n' takes you to the next statement, though that can be cumbersome
typing 'c' continues until program is complete

in debug you can type 'repl' to get Read-Eval-Print-Loop

you can type debugger; to have the program custom stop at place in program

you can use chrome development tools, to do that
you type: node --inspect-brk app.js

next go to chrome browser and type: chrome://inspect
then go to 'open dedicated dev tools'
^^This way is really good for debugging

ctrl + c to stop

running using nodemon makes things alot easier it restarts every time there is a change to the file:
nodemon --inspect-brk app.js

debugging should mostly be done in chrome dev tools