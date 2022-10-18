//modules importations
require("dotenv").config();
const express = require("express");
const cors = require('cors')    
const app = express();
const conn = require("./Config/conn")

const appRouter = require("./Routes/appRouter");


const port = 4200;

//Using json format in the req and res
app.use(express.json());
app.use("/auth", appRouter);
app.use(cors())

//Call Database connection
conn();

//Listen to port 4500
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`We are running on.. http://localhost:${port}`);
});
