const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/api/sensor/', async (req, res) => {
  const getData = await axios.post('http://192.168.0.29:3200/sensor/', {
    start_date: '2021-08-05',
    end_date: '2021-08-06',
  });
  console.log(req.body);
  res.json(getData.data.body);
});

router.post('/api/daily/', async (req, res) => {
  const getData = await axios.post('http://192.168.0.29:3200/sensor/hour', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
    // created_at: req.body.body.createdAt.split('T')[0],
    // orderby_column: 'created_at',
    // sort: 'desc',
    // limit: 24,
  });
  console.log(req.body.body);
  console.log(req.body.body.createdAt);
  res.json(getData.data.body);
});

router.post('/api/landing/', async (req, res) => {
  const getData = await axios.post('http://192.168.0.29:3200/sensor/', {
    // place_id: req.body.body.placeId,
    // start_date: req.body.body.startDate.split('T')[0],
    // end_date: req.body.body.endDate.split('T')[0],
    orderby_column: 'created_at',
    sort: 'desc',
  });
  console.log(req.body.body.startDate.split('T')[0]);
  console.log(req.body.body.endDate.split('T')[0]);
  res.json(getData.data.body);
});

// ---------------월간변화량 수위------------------
router.post('/api/search/', async (req, res) => {
  const getData = await axios.post('http://192.168.0.29:3200/sensor/', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
    orderby_column: 'created_at',
    sort: 'desc',
  });
  console.log(req.body);
  console.log(req.body.body.placeId);
  console.log(req.body.body.startDate.split('T')[0]);
  console.log(req.body.body.endDate.split('T')[0]);
  res.json(getData.data.body);
});

router.post('/api/month/', async (req, res) => {
  const getData = await axios.post('http://192.168.0.29:3200/sensor/month', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
  });
  console.log(req.body);
  console.log(getData.data.body);
  res.json(getData.data.body);
});

// ---------------login--------------
router.post('/api/login', async (req, res) => {
  const userData = await axios.post('http://192.168.0.29:3200/manager/login', {
    user_id: req.body.id,
    user_pw: req.body.password,
  });
  res.json(userData.data);
  console.log(userData.data);
});

const today = new Date();
console.log(today);

// ---------------auth--------------

// middleware /로 엔드포인트에 req를 받은다음 콜백펑션으로 하기전에 중간단계
// router.get('/api/user/auth', auth, (req, res) => {
//   // 여기까지 미들웨어를 통과해왔ㄷ다는 이야기는 authentication 이 True라는말
//   res.status(200).json({
//     _id: req.user._id,

//     // role 0 일반유저 role 0 이아니면 관리자로 셋팅 바꿀수 있음
//     //  role 1 어드민 role 2 특정부서 어드민 이런식으로
//     isAdmin: req.user.role === 0 ? false : true,
//     isAuth: true,
//     id: req.user.id,
//     role: req.user.role,
//   });
// });

// -----logout route------------
// auth미들웨어에서 아이디를찾고
// router.get('/api/user/logout', auth, (req, res) => {
//   //                                          토큰지우고      콜백펑션에러
//   User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).send({
//       success: true,
//     });
//   });
// });

// -------------------------------------test 월간

router.post('/api/test/', async (req, res) => {
  const getData = await axios.post('http://192.168.0.29:3200/sensor/month', {
    place_id: req.body.body.placeId,
    start_date: req.body.body.startDate.split('T')[0],
    end_date: req.body.body.endDate.split('T')[0],
  });
  console.log(req.body);
  console.log(getData.data.body);
  res.json(getData.data.body);
});

module.exports = router;
