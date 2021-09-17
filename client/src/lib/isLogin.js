// import axios from 'axios';

const isLogin = () => !!sessionStorage.getItem('accessToken');
//   async () => {
//     const result = await axios.post('/api/login/verify', null, {
//       headers: {
//         authorization: sessionStorage.getItem('accessToken'),
//       },
//     });

//     if (result.data.decoded.id) {
//       return true;
//     } else {
//       return false;
//     }
//   };

// console.log(isLogin());

export default isLogin;
