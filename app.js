const express = require('express');
const app = express();

const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = new Server(server);

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.send("yo");
});


server.listen(3000, function () {
    console.log('listening on *:3000');
});

