const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name:{
        type:String,
        required: true,
        trim: true
    },
    email: {
        type:String,
        required: true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email invalid');
            }
        }
    },  
    password: {
        type:String,
        required:true,
        minlength: 7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('you cannot include password in your password!')
            }
        }
    },
    age: {
        type:Number,
        validate(value){
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

module.exports = User

// const me = new User({
//     name:'Craig',
//     age:29,
//     email:'Craig@hotmail.com',
//     password: '    dogface2  '
// })