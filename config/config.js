const mongoose = require("mongoose");

//to access dotenv file, it needs to be required
require("dotenv").config()

const db= process.env.db

mongoose.connect(db).then(()=>{
    console.log(`database connect successfully`)
}).catch((error)=>{
  console.log(`something went wrong`, error.message)
})

