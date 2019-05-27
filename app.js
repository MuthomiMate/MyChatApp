require("dotenv").config();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("welcome to the socket.io chat app")
});

server = app.listen(process.env.PORT);