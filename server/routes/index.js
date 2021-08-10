const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/api/sensor/', async (req, res) => {
  console.log('시작날짜' + req.body.start_date);
  const getData = await axios.post('http://192.168.0.29:3200/sensor/desc', {
    start_date: '2021-08-05',
    end_date: '2021-08-06',
  });
  console.log(req.body);
  res.json(getData.data.body);
});

router.post('/api/detail/', async (req, res) => {
  console.log('시작날짜' + req.body.start_date);
  const getData = await axios.post('http://192.168.0.29:3200/sensor/desc', {
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    orderby_column: 'created_at',
    limit: 20,
  });
  console.log(req.body);
  res.json(getData.data.body);
});

router.post('/api/landing/', async (req, res) => {
  console.log('시작날짜' + req.body.start_date);
  const getData = await axios.post('http://192.168.0.29:3200/sensor/desc', {
    start_date: '2021-08-05',
    end_date: '2021-08-06',
    limit: 5,
  });
  console.log(req.body);
  res.json(getData.data.body);
});
module.exports = router;
