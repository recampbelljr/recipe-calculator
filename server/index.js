require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

let env = process.env;
let port = env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(port);

console.log(`Listening on port ${port}`);

