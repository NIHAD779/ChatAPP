const mongoose = require('mongoose')

const conn = mongoose.connect(process.env.MongoURL)
.then(db =>{
    console.log("DB connected")
    return db;
}).catch(err =>{
    console.log(err)
})

module.exports = conn