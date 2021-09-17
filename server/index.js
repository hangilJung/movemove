const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

const indexRouter = require('./routes/index');

app.use(express.static('build'));

app.use('/', indexRouter);

app.listen(port, () => console.log(`${port}로 연결됨`));
