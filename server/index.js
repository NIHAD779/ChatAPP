const express  = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config();
mongoose.set('strictQuery', false);
const con = require('./DB/connection')

const app = express();


app.use(cors());
app.use(express.json());
app.use(require('./routes/routes'));

const port = process.env.PORT || 8080

con.then(db =>{
    if(!db) return process.exit(1);
    app.listen(port,()=>{
        console.log(`server is running on port : ${port}`)
    })

    app.on('error',err => console.log(`Failed to connect to HTTP server : ${err}`))
}).catch(err =>{
    console.log(`connection Failed .. ! ${err}`)
})

// app.listen(port,()=>{
//             console.log(`server is running on port : ${port}`)
//         })
