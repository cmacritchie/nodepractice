npm init to get packages going first 

you can use Express to serve up web pages

server.js configure routes

you need to initiate the app and then set a port to liste to like app.liste(3000)

then you can go to http://localhost:3000/ and then see it working!

to serve up web pages:
app.use(express.static(__dirname + '/pages'));
-dirname is the root project directory, /pages is the folder
then go to: http://localhost:3000/help.html, that's it!