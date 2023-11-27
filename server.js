const express = require("express");
const port= process.env.port
require("./config/config")
require ("dotenv").config();
const studentRouter= require("./routers/studentrouters")
const app = express();
app.use(express.json());
app.use("/api/student", studentRouter)

app.listen(port,()=>{
console.log(`listening on port: ${port}: alive and active`)
})