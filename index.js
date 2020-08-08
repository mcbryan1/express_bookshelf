const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


//Middleware
server.use(bodyParser.json());




//Listening To Server
server.listen(3000, () => console.log("Server Is Ready For Any Request"));