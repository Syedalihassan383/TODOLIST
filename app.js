const express = require("express");
const userRouter =require("./routes/userRouter")
const adminrouter = require("./routes/adminrouter")
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { Connection } = require("pg");
const { db } = require("./models/index");

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("dev"))
// parse application/json
app.use(bodyParser.json())

app.use("/users", userRouter);


db.connection
.sync({alter:true, logging:false})
    .then(()=>{
         app.listen(port , () => {
        console.log("database connected")
    });
    })
    .catch((error)=>{
        console.log(error);
        console.log("unable to connect to database");
    });
    
   
