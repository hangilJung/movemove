const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');
const { request, Issuance } = require('./middleware');

const ipAddress = require('../ipAddress');

const jwt = require('jsonwebtoken');

// ---------------login--------------
router.post('/', async (req, res) => {
  try {
    const userData = await request(ipAddress + '/manager/login', {
      user_id: req.body.id,
      user_pw: req.body.password,
    });

    if (userData.data.header.resultCode === '00') {
      const refreshToken = jwt.sign(
        {
          id: req.body.id,
          issued_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          expires_at: moment().add(14, 'days').format('YYYY-MM-DD HH:mm:ss'),
        },
        require('../env'),
        {
          expiresIn: '14d',
          issuer: 'sooin',
        }
      );
      res.json({
        refreshToken: refreshToken,
        abc: req.decoded,
      });
    }
  } catch (error) {
    res.status(400).json('실패');
  }
});

router.post('/accessToken', Issuance, (req, res) => {
  try {
    const accessToken = jwt.sign(
      {
        id: req.decoded.id,
        issued_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        expires_at: moment().add(2, 'h').format('YYYY-MM-DD HH:mm:ss'),
      },
      require('../env'),
      {
        expiresIn: '2h',
        issuer: 'sooin',
      }
    );
    res.json({
      accessToken: accessToken,
      decoded: req.decoded,
    });
  } catch (error) {
    res.status(400).json('실패');
  }
});

router.post('/verify', Issuance, (req, res) => {
  res.json({ decoded: req.decoded });
});

router.post('/changing', async (req, res) => {
  const { user_id, firstPassword } = req.body;
  let response = {
    header: {},
  };
  try {
    const result = await request(ipAddress + '/manager/update', {
      user_id: user_id,
      user_pw: firstPassword,
    });

    if (result.data.header.resultCode === '00') {
      response.header = { resultCode: '00', resultMsg: 'NORMAL_SERVICE' };
    }
    res.json(response);
  } catch (error) {
    response.header = {
      resultCode: '10',
      resultMsg: 'INVALID_REQUEST_PARAMETER_ERROR',
    };
    res.status(400).json(response);
  }
});

router.post('/pwdVerify', async (req, res) => {
  let response = {
    header: {},
  };
  try {
    const userData = await request(ipAddress + '/manager/login', {
      user_id: req.body.user_id,
      user_pw: req.body.user_pw,
    });

    if (userData.data.header.resultCode === '00') {
      response.header = { resultCode: '00', resultMsg: 'NORMAL_SERVICE' };
    }
    res.json(response);
  } catch (error) {
    response.header = {
      resultCode: '10',
      resultMsg: 'INVALID_REQUEST_PARAMETER_ERROR',
    };
    res.status(400).json(response);
  }
});

module.exports = router;
