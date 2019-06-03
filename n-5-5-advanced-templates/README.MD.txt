you can add partials that create partial bits of code

to keep an eye on changes with nodemon you can type:

'nodemon {server.js} -e js, hbs'
this keeps an eye out for all files that end with js or hbs

you can use hbs.registerHelper('text' function) 
the above code can be used return a function or something.

middleware you can do things like
 app.use((req, res, next) => {
     //get date
 })
 you can use this to, for example, log the date of requests
 or something. to see what more you can do with the request, 
 check out express, request.

 you can not call next() so that a request doesn't progress
 this can be very useful for setting up site maintenance pages
 