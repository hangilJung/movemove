import React, { useState } from "react";
import { Button } from "antd";
import axios from "axios";
import "../../../Styles/SetPassword.css";

function SetPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");

  function oldChange(e) {
    setOldPassword(e.target.value);
  }

  function newChange(e) {
    setNewPassword(e.target.value);
  }

  function checkChange(e) {
    setNewPasswordCheck(e.target.value);
  }

  async function passwordSubmit() {
    console.log(oldPassword, newPassword, newPasswordCheck);
    console.log("온클릭 작동");
  }

  return (
    <div className="wrapper">
      <div className="header">
        <h1>
          <a href="/set">설정</a> &gt;비밀번호 변경
        </h1>
      </div>
      <div className="discription">
        위험 수치 설정과 비밀번호 변경을 할 수 있습니다.
      </div>
      <div className="content">
        <div className="large-text">
          <h1>비밀번호를 변경해주세요</h1>
          <p>
            기존 비밀번호를 입력하고 새 비밀번호, 새 비밀번호 확인란을
            입력해주세요
          </p>
        </div>
        <div className="text-input">
          <div className="password-box">
            <div className="input-tag">
              <label>기존 비밀번호&nbsp;</label>
              <input type="text" onChange={oldChange}></input>
            </div>
            <div className="input-tag">
              <label>새 비밀번호&nbsp;</label>
              <input type="text" onChange={newChange}></input>
            </div>
            <div className="input-tag">
              <label>새 비밀번호 확인&nbsp;</label>
              <input type="password" onChange={checkChange}></input>
            </div>
            <div>
              <Button onClick={passwordSubmit}>변경하기</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;
