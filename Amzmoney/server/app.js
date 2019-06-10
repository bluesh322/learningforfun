const express = require('express');
const mongoose = require('mongoose');
const morgan  = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');

dotenv.config();

mongoose.connect(process.env.DB_URL, {userNewUrlParser: true})
	.then(() => {
	console.log('sweet');
})
.catch(dude => {
	console.log({ dude });
});


console.log(process.env.HEY)
const server = express();
const port = 5000;


const corsOptions = {
	origin: process.env.APP_URL,
	credentials: true,
	methods: ['GET', 'PUT', 'POST', 'DELETE'], 
	allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(express.json());
server.use(morgan("default"));
server.use(cors(corsOptions));
server.use('/users', userRouter);

server.get('/', (req, res) => {
	res.json({ message: 'Hello World'})
	});

server.listen(port, function (){
	console.log(`listening on port ${port}`);
});