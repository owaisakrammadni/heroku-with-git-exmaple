
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get water");
    res.send("menu: what do you want ? food or water");
})

server.get("/water", (req, res, next) => {
    console.log("some one is asking water");
    res.send("here is water")
})

server.get("/food", (req, res, next) => {
    console.log("some one is asking water");
    res.send("here is food")
})
server.listen(PORT || 5000), () => {
    console.log("server is running on port 3000")
};