const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

/*************************
   CONFIG HERE
**************************/
const SERVER_PORT = 1169;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.listen(SERVER_PORT);

