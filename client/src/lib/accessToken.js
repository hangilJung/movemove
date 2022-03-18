import axios from 'axios';

const accessToken = (props) => {
  axios
    .post('/api/login/verify', null, {
      headers: {
        authorization: sessionStorage.getItem('accessToken'),
      },
    })
    .then((res) => {
      return res.data.decoded;
    })
    .catch(() => {
      axios
        .post('/api/login/accessToken', null, {
          headers: {
            authorization: sessionStorage.getItem('refreshToken'),
          },
        })
        .then((res) => {
          sessionStorage.setItem('accessToken', res.data.accessToken);
          return res.data.accessToken;
        })
        .catch((error) => {
          console.log(error);
          window.location.href = '/login';
        });
    });
};

export default accessToken;
