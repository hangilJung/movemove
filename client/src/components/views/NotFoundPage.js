import React from 'react';
import { Result, Button } from 'antd';

function NotFoundPage(props) {
  const backPage = () => {
    props.history.goBack();
  };
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="잘못된 접근 경로입니다."
        extra={
          <Button
            type="primary"
            onClick={backPage}
            style={{ borderRadius: 15, width: 130, height: 40 }}
          >
            이전화면
          </Button>
        }
      />
    </div>
  );
}

export default NotFoundPage;
