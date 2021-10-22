const express = require('express');
const router = express.Router();
const { request } = require('./middleware');

const ipAddress = require('../ipAddress');
const { default: axios } = require('axios');

// ----------------------일간변화량
router.post('/daily', async (req, res) => {
  const getData = await request('http://192.168.0.29:3200' + '/sensor/hour', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
    client_secret: req.body.client_secret,
    sort: 'desc',
    limit: 24,
  });

  res.json(getData.data.body);
});

// ---------------월간변화량 수위------------------
router.post('/search', async (req, res) => {
  const getData = await request(ipAddress + '/sensor/hour', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
    orderby_column: 'created_at',
    sort: 'desc',
  });
  res.json(getData.data.body);
});

// ------------------월간변화량
router.post('/month/', async (req, res) => {
  const getData = await request(ipAddress + '/sensor/month', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
  });
  res.json(getData.data.body);
});
// --------------연간변화량
router.post('/year/', async (req, res) => {
  const getData = await request(ipAddress + '/sensor/year', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
  });
  res.json(getData.data.body);
});

// ---------------------키오스크
router.post('/kiosk/', async (req, res) => {
  const getData = await request(ipAddress + '/sensor/hour', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
    sort: 'desc',
    limit: 10,
  });
  res.json(getData.data.body);
});

router.post('/weather/header', async (req, res) => {
  console.log(ipAddress + '/weather/header');
  const getData = await request(ipAddress + '/weather/header');

  console.log(getData);
  res.json(getData.data);
});

// --------------위험수위
router.post('/warning/', async (req, res) => {
  const getData = await request(ipAddress + '/sensor/risk', req.body);
});

module.exports = router;