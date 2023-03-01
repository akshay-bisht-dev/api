const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const db = (uri) => {
    console.log("db connected successfully!");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = db;