require("dotenv").config();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});

server = app.listen(process.env.PORT);

const io = require('socket.io')(server)
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.userName = "anonymus";
    socket.on("newMessage", (data) => {
        socket.userName = data.userName;
        io.sockets.emit("newMessage", data);
    });
    socket.on("typing", (data) => {
        socket.emit("typing", {userName: socket.userName});
    });
});