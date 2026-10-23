console.log("My Program is Running!")

//Creating server
var express = require("express");
var app = express();
var server = app.listen(3000);

//Serve the public folder to the user
//Place your p5.js files (or any webpage files) into the public server
app.use(express.static("public"));

//Setup socket
var socket = require("socket.io")
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log(socket.id)
}

console.log("Server started on port 3000")