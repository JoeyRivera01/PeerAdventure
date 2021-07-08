// setup express server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const adventureRouter = require('../routes/adventure.js');
const compression = require('compression');
const {v4: uuidV4} = require('uuid');
const morgan = require('morgan');

// setup middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(compression());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));
app.set('view engine', 'ejs');
app.set('views', __dirname+ '/../client/dist');

// set initial routes
app.get('/', (req, res)=>{
  res.redirect(`/${uuidV4()}`);
});
app.get('/:room', (req, res)=>{
  res.render('index.ejs', {roomId: req.params.room});
});

// set adventure router
app.use('/:room/adventure', adventureRouter);

const rooms = {};

// setup database connections
const mongoose = require('mongoose');
const databaseName = 'peerAdventure';
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// setup socketIo
io.on('connection', socket => {
  socket.on('join-room', (roomId, userId, socketId) => {
    socket.join(roomId)
    socket.to(roomId).emit('user-connected', userId)
    if(rooms[roomId]) {
      // roomQueue
      io.to(socketId).emit('current-room', rooms[roomId])
    }
    socket.on('disconnect', ()=> {
      // user-disconnect
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
});

// setup server listening
server.listen(3000);

// setup port listening
// app.listen(process.env.PORT || 3001);

module.export = db;