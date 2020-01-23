require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const userURL = require('./src/routes/user.url');
const shortnerURL = require('./src/routes/shortner.url');
const shortner = require('./src/controllers/shortner.controller');
mongoose.connect('mongodb://localhost:27017/shortner', 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

app.get('/:short', shortner.redirect);
app.use('/api/shortner', shortnerURL)
app.use('/api/user', userURL)


app.listen(PORT, () => console.log(`Listening PORT: ${PORT}`));