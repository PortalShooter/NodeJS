const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const RedisStore = require("connect-redis")(session);

const { createClient } = require("redis")
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

const userRoutes = require('./routes/user');
const booksRoutes = require('./routes/books');
const booksRoutesAPI = require('./routes/api/books');


const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', userRoutes)
app.use('/api/books', booksRoutesAPI)
app.use('/books', booksRoutes)

app.use(passport.initialize());

app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      saveUninitialized: false,
      secret: "keyboard cat",
      resave: false,
    })
)

app.get('/', (req, res) => {
    res.redirect('/books')
})

io.on('connection', (socket) => {
    const {roomName} = socket.handshake.query;
    socket.join(roomName);    
    socket.on('book-comment', (msg) => {       
        socket.to(roomName).emit('book-comment', msg); 
        socket.emit('book-comment', msg);    
    })

});

app.set('view engine', 'ejs');


const PORT = process.env.PORT || 3000;
const UserDB = process.env.DB_USERNAME || 'root';
const PasswordDB = process.env.DB_PASSWORD || 'qwerty12345';
const NameDB = process.env.DB_NAME || 'books';
const HostDb = process.env.DB_HOST || 'mongodb://localhost:27017/';

(async () => {

    mongoose.connect(HostDb, {
        user: UserDB,
        pass: PasswordDB,
        dbName: NameDB,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        server.listen(PORT, () => {
            console.log(`=== start server PORT ${PORT} ===`);
        });
    })
    .catch ((e) => {
        console.log('Error', e);
    })

})();


