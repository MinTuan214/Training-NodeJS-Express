const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/users');
        console.log('Connect successfully');
    } catch (error) {   
        console.log('Fail');
    }
}

module.exports = { connect }