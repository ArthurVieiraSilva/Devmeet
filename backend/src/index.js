const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes'); 
const { setupWebsocket } = require('./websocket');

const app = express();

const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://Arthur:semanaomnistack@semanaomnistack10-0t9be.mongodb.net/semanaomnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);