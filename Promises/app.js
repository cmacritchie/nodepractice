var somePromise = new Promise((resolve, reject) => { //this contains all the aysncronous stuff
    //resolve("hey it worked");
    reject("didn't work")
});

somePromise.then((message)=> {
console.log(message);
}, (errorMessage) => {
    console.log(errorMessage);
});

var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
           if(typeof a === 'number' && typeof b ==='number') {
               resolve(a+b);
           }else {
               reject("not a number");
           }
        }, 1500);
    })
}

//this includes promise chaining
asyncAdd(5, 7).then((res)=>{
    console.log(res);
    return  asyncAdd(res, 32);
}, (errorMessage) => {
    console.log(errorMessage)
}).then((res)=>{
    console.log("the result of errorchaining is ", res)
}, (errorMEssage) => {
    console.log("second chain didn't work!")
})

//using catch instead
asyncAdd(5, 7).then((res)=>{
    console.log(res);
    return  asyncAdd(res, "dasf");
}, (errorMessage) => {
    console.log(errorMessage)
}).then((res)=>{
    console.log("the result of errorchaining is ", res)
}).catch((errorMessage) => {
    console.log(errorMessage);
}) 