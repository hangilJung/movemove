const { ExceptionMap } = require('antd/lib/result');
const axios = require('axios');

let waterLevel = '';

axios
  .post('/api/kiosk/', {
    place_id: 1,
    start_date: '2021-10-23',
    end_date: '2021-10-23',
  })
  .then((res) => {
    waterLevel = res.data[0].water_level;
  })
  .catch((err) => console.log(err));

export { waterLevel };
