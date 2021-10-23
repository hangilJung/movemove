import React from "react";
import "../../../Styles/SetPassword.css";

function SetPassword() {
  return (
    <div class="wrapper">
      <div class="header">
        <h1>
          <a href="/set">설정</a> &gt;비밀번호 변경
        </h1>
      </div>
      <div class="discription">
        위험 수치 설정과 비밀번호 변경을 할 수 있습니다.
      </div>
      <div class="content">
        <div class="large-text">
          <h1>비밀번호를 변경해주세요</h1>
          <p>
            기존 비밀번호를 입력하고 새 비밀번호, 새 비밀번호 확인란을
            입력해주세요
          </p>
        </div>
        <div class="text-input">
          <div class="left-text">
            <p>기존 비밀번호</p>
            <p>새 비밀번호</p>
            <p>새 비밀번호 확인</p>
          </div>
          <div class="right-input">
            <p>
              <input type="text"></input>
            </p>
            <p>
              <input type="text"></input>
            </p>
            <p>
              <input type="text"></input>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
