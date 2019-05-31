//CRUD
//MongoDB doesn't make into the final Version of the 

// const {MongoClient, ObjectID} = require('mongodb')

// const connectionURL='mongodb://127.0.0.1:27017'  //typing out the entire IP can avoid localhost issues
// const databaseName='task-manager'


// //don't need it but good to be aware of object ID
// // const id = new ObjectID()
// // console.log(id)
// // console.log(id.getTimestamp())

// MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=> {
//     if(error) {
//         return console.log('unable to connect to database')
//     }

//     const db = client.db(databaseName)

//     //insert 1 user
//     // db.collection('users').insertOne({
//     //     _id:id, //you *can create your own object id but mongodb creates it for you
//     //     name:'Gunnar Stahl',
//     //     age:15
//     // }, (error, result) => {
//     //     if(error){
//     //         return console.log('Unable to insert user');
//     //     }

//     //     console.log(result.ops)
//     // })

//     //insert many users
//     // db.collection('users').insertMany([
//     //     {
//     //         name:'Jen',
//     //         age:28
//     //     },
//     //     {
//     //         name: 'Gunther',
//     //         age:29
//     //     }
//     // ], (error, result)=>{
//     //     if(error){
//     //         return console.log('Unable to insert documents')
//     //     }

//     //     console.log(result.ops);
//     // })

//     //insert tasks
//     // db.collection('tasks').insertMany([
//     //     {
//     //         description:'clean the house',
//     //         completed:true
//     //     },{
//     //         description:'get license',
//     //         completed:false
//     //     },{
//     //         description:'pot plants',
//     //         completed: false
//     //     }
//     // ], (error, result)=> {
//     //     if(error){
//     //         return console.log('there was an error connecting')
//     //     }

//     //     console.log(result.ops);
//     // })


//     // db.collection('users').findOne({name:'Jen'}, (error, user)=>{
//     //     //For objectID
//     //     // db.collection('users').findOne({_id: new ObjectID("asdfasdjkfhasfjkhObjcectId")}, (error, user)=>{
        
//     //     if(error){
//     //         return console.log('Unable to Fetch')
//     //     }
//     //     console.log(user)
//     // })

//     //uses cursors
//     // db.collection('users').find({age:27}).toArray((error, users)=> {
//     //     console.log(users);
//     // })

    
    
//     //uses promises, the right way to do database changes
//     const updatePromise = db.collection('users').updateOne({
//         _id: new ObjectID("5cebf0b5a8dc8c06080e3d11")
//     }, {
//         //update operators
//         $inc: {
//             age:1
//         }
//     }).then((result)=> {
//         console.log(result)
//     }).catch((error)=> {
//         console.log(error)
//     })

// })
