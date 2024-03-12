const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const category = require('./controlers/category');
app.use('/category', category); // This maps to /category in your URL

app.listen(8000, () => {
    console.log("Server started on port 8000");
});