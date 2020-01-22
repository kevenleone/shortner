const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const shortnerURL = require('./src/routes/shortner.url');

mongoose.connect('mongodb://localhost:27017/shortner', 
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => res.json({ message: 'Ok' }))

app.use('/api/shortner', shortnerURL)

app.listen(PORT, () => console.log(`Listening PORT: ${PORT}`));