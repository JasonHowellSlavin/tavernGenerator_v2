'use strict';
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const PORT = 8080;
const HOST = '0.0.0.0';

require('dotenv').config();

const adminRouter = require('./routes/admin');
const updateRouter = require('./routes/update');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client/public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.use('/admin', adminRouter);

app.use('/update', updateRouter);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
