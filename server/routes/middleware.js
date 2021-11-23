const jwt = require('jsonwebtoken');
const axios = require('axios');
const fs = require('fs');
const refresh = require('../refresh');
const ipAddress = require('../ipAddress');

const Issuance = (req, res, next) => {
  let response = {
    header: {},
  };
  try {
    req.decoded = jwt.verify(req.headers.authorization, require('../env'));
    next();
  } catch (error) {
    console.log(error);
    response.header = { resultCode: '33', resultMsg: 'TOKEN_EXPIRED_ERROR' };
    res.status(400).json(response);
  }
};

const request = async (url, body) => {
  try {
    let dataBuffer = fs.readFileSync(
      __dirname + '/../accessToken.json',
      'utf8'
    );
    let data = JSON.parse(dataBuffer);
    const result = await axios.post(url, body, {
      headers: {
        authorization: data.accessToken,
      },
    });

    return result;
  } catch (error) {
    try {
      const getAccessToken = await axios.post(ipAddress + '/token/v1', null, {
        headers: {
          authorization: refresh,
        },
      });
      let dataBuffer = fs.readFileSync(
        __dirname + '/../accessToken.json',
        'utf8'
      );
      let token = await JSON.parse(dataBuffer);
      token.accessToken = await getAccessToken.data.body.accessToken;
      dataJSON = await JSON.stringify(token);
      fs.writeFileSync(__dirname + '/../accessToken.json', dataJSON);
      const access = await axios.post(url, body, {
        headers: {
          authorization: getAccessToken.data.body.accessToken,
        },
      });

      return access.data.body;
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  request,
  Issuance,
};
