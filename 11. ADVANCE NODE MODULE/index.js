const upperCase = require('upper-case').upperCase;

function user(name){
    console.log(upperCase(`The name of our user is ${name}`))
}

user("Junaid")

module.exports = user;