set up MongoDB and Robo 3t
set up the mongodb and mongodb-data folders

use the terminal to run the server and run the npm packages

in one terminal
C:\Users\cmacritchie\mongodb\bin\mongod.exe --dbpath=/Users/cmacritchie/mongodb-data to run mongodb 

in the other:
C:\Users\cmacritchie\mongodb\bin\mongod.exe --dbpath=/Users/cmacritchie/mongodb-data


search by ObjectId
//For objectID
        // db.collection('users').findOne({_id: new ObjectID("asdfasdjkfhasfjkhObjcectId")}, (error, user)=>{