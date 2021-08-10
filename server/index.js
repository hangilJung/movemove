const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.listen(port, () => console.log(`${port}로 연결됨`));
