import React, { useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../../../component/Nav/Nav";
import Footer from "../../../component/Footer/Footer";

function SignupVerify() {
  const [countDown, setCountDown] = useState("05:00");
  window.onload = function () {
    setInterval(() => {
      var d = new Date();
      var seconds = d.getMinutes() * 60 + d.getSeconds(); // 00:00초로 변환
      var fiveMin = 60 * 5; // 300초
      var timeleft = fiveMin - (seconds % fiveMin); // 남은 초 계산

      var mins = parseInt(timeleft / 60);
      var secs = timeleft % 60;
      setCountDown(mins + ":" + secs);

      console.log(countDown);
    }, 1000);
  };
  return (
    <>
      <Nav />
      <SignupVerifyWrap>
        <SignupVerifyContainer>
          <WhiteBox>
            <Title>GDAC 회원가입</Title>
            <Text>
              - 회원가입 시 등록한 이메일로 인증메일을 전송하였습니다. <br />
              - 인증메일을 확인 후 인증버튼을 클릭해주세요. <br />
              - 인증메일은 발송 시점으로부터 24시간 동안 유효합니다. <br />-
              이메일 재전송 시 이전 인증메일은 만료됩니다.
            </Text>
            <Time>이메일 재전송({countDown}후 가능)</Time>
            {/* <Time resend>이메일 재전송</Time> */}
          </WhiteBox>
        </SignupVerifyContainer>
      </SignupVerifyWrap>
      <Footer />
    </>
  );
}

const SignupVerifyWrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 600px;
`;

const SignupVerifyContainer = styled.div`
  padding: 6px;
`;

const WhiteBox = styled.div`
  position: relative;
  width: 520px;
  padding: 24px 0 20px;
  margin: 60px auto;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.2);
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 24px;
  line-height: 24px;
  color: #022553;
  text-align: center;
`;

const Text = styled.div`
  font-size: 14px;
  color: #596070;
  padding: 0 70px 4px;
  line-height: 1.7;
`;

const Time = styled(Text)`
  text-align: center;
  padding-top: 20px;

  ${(props) =>
    props.resend &&
    css`
      color: ${(props) => props.theme.subColor};
      cursor: pointer;
    `}
`;

export default SignupVerify;
