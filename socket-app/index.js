const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

// Port
const PORT = 3001

// Create server
const app = express()
const expressServer = http.createServer(app)

const io = new Server(expressServer)

let buyNsp = io.of('/buy')
let sellNsp = io.of('/sell')

buyNsp.on('connection', function(socket) {
    buyNsp.emit('myBroadcast', 'hello every buy') 
})

sellNsp.on('connection', function(socket) {
    sellNsp.emit('myBroadcast', 'hello every sell 2') 
})

// io.on('connection', function(socket) {
    // console.log('new user connected');

    // setTimeout(function(){
    //     socket.send('hello brother')
    // }, 5000)

    // setInterval(function(){
    //     let d = new Date()
    //     let t = d.getTime()

    //     socket.send(t)

    //     socket.emit('myEvent', t)

    // }, 100)

    // socket.on('disconnect', function() {
    //     console.log('user disconnected');
    // }) 

    // socket.on('message', function(message) {
    //     console.log(message);
    // }) 

    /* Broadcast */

    // let buyNsp = io.of('/buy')
    // let sellNsp = io.of('/sell')

    // io.sockets.emit('myBroadcast', 'hello every one 2 3') 


// })



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

// Listen port
expressServer.listen(PORT, function() {
    console.log('server running at : ' + PORT);
})