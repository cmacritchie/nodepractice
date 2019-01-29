console.log("Hello notes");

//we have access to module
module.exports.age = 29;

module.exports.addNote = () => {
    console.log("add notes");
    return 'New Note';
};

module.exports.add=(a,b)=> {
    return a + b;
}