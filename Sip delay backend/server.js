const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const sipdelaycalculate = require("./routes"); //requiring the post api request

const app = express();

app.use(express.json());
app.use(bodyparser.json()); //parsing the  incoming request bodies in middleware
app.use(cors());
app.use("/", sipdelaycalculate); //using post api from the router

const port = process.env.PORT || 3000; //server is running on this port

//running the server
app.listen(port, () => {
  console.log("Sip delay Calculator started");
});
