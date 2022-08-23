const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

// Port
const PORT = 3001

// Create server
const app = express()
const expressServer = http.createServer(app)

const io = new Server(expressServer)

io.on('connection', function(socket) {
    console.log('new user connected');

    // setTimeout(function(){
    //     socket.send('hello brother')
    // }, 5000)

    setInterval(function(){
        let d = new Date()
        let t = d.getTime()

        socket.send(t)
    }, 1000)

    socket.on('disconnect', function() {
        console.log('user disconnected');
    }) 


})



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

// Listen port
expressServer.listen(PORT, function() {
    console.log('server running at : ' + PORT);
})