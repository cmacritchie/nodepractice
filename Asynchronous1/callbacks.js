var getUSer = (id, callback)=> {
    var user ={
        id:id,
        name:"Andrew WK"
    }
    var error= "there was no error!";

    var statusCode = 200;

    setTimeout(() => {
        callback(user, statusCode, error);
    }, 1520)
}

getUSer(31, (userObject, statusCode, error) => {
    
    if(statusCode ==200){
        console.log(userObject)
    }

    console.log(error);
})