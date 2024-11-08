const express = require("express");
const bodyParser=require("body-parser");
const server = express();
const mongoose=require("mongoose")
const PORT=3000;
server.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/Bear").then(()=>{
    console.log("database is running rockingly");
}).catch(()=>{
    console.log("database connection is failed");
})

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
const bearRoutes = require("./routes")
bearRoutes(server)