const express = require('express');
const router = express.Router();
const { request } = require('../routes/middleware');
require('dotenv').config();

const ipAddress = require('../ipAddress');

const loginRouter = require('./login');
const sensorRouter = require('./sensor');

router.use('/api/login', loginRouter);
router.use('/api', sensorRouter);

// router.post('/api/token', async (req, res) => {
//   const re = await request(ipAddress + '/sensor', null);
//   res.json(re.data);
// });

module.exports = router;
