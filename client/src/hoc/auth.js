import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

export default (SpecialComponent, option, adminRoute = null) => {
  /* 
     예)  option: null -> 누구나 출입이 가능한 페이지 (home)
                 true -> 로그인한 유저만 출입이 가능한 페이지
                 false -> 로그인한 유저는 출입이 불가능한 페이지
  */

  const AuthenticateCheck = (props) => {
    useEffect(() => {
      if (option) {
        props.history.push('/login');
      }
    }, []);

    return <SpecialComponent />;
  };

  return withRouter(AuthenticateCheck);
};
