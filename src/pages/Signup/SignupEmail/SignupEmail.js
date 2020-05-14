import React, { Component } from "react";
import Nav from "../../../component/Nav/Nav";
import Footer from "../../../component/Footer/Footer";
import circle from "../../../images/circle.png";
import checkbox from "../../../images/checkbox.png";
import chec from "../../../images/chec.png";
import styled, { css } from "styled-components";

function SignupEmail() {
  return (
    <>
      <Nav />
      <SignupEmailPage className="SignupEmail">
        <SignupEmailWrapper className="SignupEmailWrapper">
          <SignupEmailFeed className="SignupEmailFeed">
            <SignupEmailGdacP className="SignupEmailGdac">
              GDAC 회원가입
            </SignupEmailGdacP>
            <BottomPart3 className="bottomPart3">
              <TypeEmailPassWord className="typeEmail3">
                <input
                  className="inputEmail3"
                  type="text"
                  name="email"
                  placeholder="이메일"
                />
              </TypeEmailPassWord>
              <BetweenDivP className="betweenDiv3"></BetweenDivP>

              <TypeEmailPassWord className="typePassword3">
                <input
                  className="inputPassword3"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                />
              </TypeEmailPassWord>
              <BetweenDivP className="betweenDiv3"></BetweenDivP>

              <TypeEmailPassWord className="typePasswordAgain3">
                <input
                  className="inputPasswordAgain3"
                  type="password"
                  name="password"
                  placeholder="비밀번호 확인"
                />
              </TypeEmailPassWord>
              <BetweenDivP className="betweenDiv3"></BetweenDivP>

              <AgreementPart className="agreementPart">
                {/* <p> */}
                <AgreementPartInner className="agreementTop">
                  {/* <div
                  // onclick={this.handleClick}
                  className="checkbox"
                > */}
                  <img src={checkbox} alt="checkbox" />
                  GDAC&nbsp;<a href="/#">이용약관,</a>
                  <a href="/#">&nbsp;개인정보처리방침,</a>
                  <a href="/#">&nbsp;원화 입출금 방침</a>에 동의합니다.(필수)
                  {/* </div> */}
                </AgreementPartInner>

                {/* <p> */}
                <AgreementPartInner className="agreementBottom">
                  {/* <div
                    className="checkBox"
                    // onclick={this.handleClick}
                  > */}
                  <img src={checkbox} alt="checkbox" />
                  GDAC 마케팅 정보 수신에 동의합니다. (선택)
                  {/* </div> */}
                </AgreementPartInner>
              </AgreementPart>

              <EmailButtonDiv3 className="emailButtonDiv3">
                <button type="submit" className="emailButton3">
                  이메일로 가입하기
                </button>
              </EmailButtonDiv3>
              <BelowSignupEmailButton3 className="belowSignupEmailButton3">
                <BelowLeft3 className="belowLeft3">
                  <a href="/#">로그인</a>
                </BelowLeft3>
                <BelowLeft3 className="belowRight3">
                  <a href="/#">카카오 계정으로 가입하기</a>
                </BelowLeft3>
              </BelowSignupEmailButton3>
            </BottomPart3>

            <SupportBottom3 className="supportBottom3">
              <SupportFirst3 className="supportFirst3">
                문제가 있으시면
                <a href="/#" target="_blank">
                  개별문의
                </a>
                를 진행해 주세요.
              </SupportFirst3>
              <SupportFirst3 className="supportSecond3">
                <img src={circle} alt="circle" />
                고객센터
                <a href="/https://support.gdac.com" target="_blank">
                  https://support.gdac.com
                </a>
              </SupportFirst3>
            </SupportBottom3>
          </SignupEmailFeed>
        </SignupEmailWrapper>
      </SignupEmailPage>
      <Footer />
    </>
  );
}

export default SignupEmail;

const SignupEmailPage = styled.div`
  background-color: #f7fbff;
`;
const SignupEmailWrapper = styled.div`
  padding: 6px;
  overflow: hidden;
`;
const SignupEmailFeed = styled.div`
  border: 0px solid black;
  min-height: 600px;
  width: 520px;
  margin: 60px auto;
  padding: 24px 0 20px;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.2);
  background-color: #fff;
`;
const SignupEmailGdacP = styled.p`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  padding-bottom: 24px;
  line-height: 24px;
  color: #022553;
  text-align: center;
`;
const BottomPart3 = styled.div`
  border: 0px solid blue;
`;
const TypeEmailPassWord = styled.div`
  padding: 0 65px;
  position: relative;
  z-index: 10;
  height: 50px;
  input {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #f5f8ff;
    border: 1px solid #ebeef6;
    border-radius: 2px;
    padding-left: 15px;

    &::placeholder {
      font-size: 13px;
      font-weight: 600;
      //letter-spacing: -0.03em;
      color: #596070;
      opacity: 0.6;
    }
  }
`;
const BetweenDivP = styled.p`
  height: 24px;
`;
const AgreementPart = styled.div`
  padding: 10px 65px 0;
  padding-bottom: 30px;
  position: relative;
`;
const AgreementPartInner = styled.div`
  font-size: 14px;
  line-height: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  img {
    cursor: pointer;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  a {
    font-weight: 700;
    color: #0086ec;
    text-decoration: none;
  }
`;
const EmailButtonDiv3 = styled.div`
  padding: 0 65px;
  button {
    background-color: rgba(0, 134, 236, 0.5);
    border-color: transparent;
    width: 100%;
    height: 50px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
  }
`;
const BelowSignupEmailButton3 = styled.div`
  padding: 0 65px 6px;
  width: 100%;
  height: 40px;
`;
const BelowLeft3 = styled.div`
  &:first-child {
    float: left;
  }
  &:last-child {
    float: right;
  }
  a {
    display: inline-block;
    margin-top: 14px;
    color: #0086ec;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
    font-weight: bold;
  }
`;
const SupportBottom3 = styled.div`
  padding-top: 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;
  border-top: 1px solid #ebeef6;
`;
const SupportFirst3 = styled.p`
  width: 300px;
  margin: 5px auto;
  line-height: 30px;
  background-color: rgba(2, 37, 83, 0.02);
  border-radius: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 2px;
  }
  a {
    text-decoration: none;
    margin-left: 10px;
    color: #174ca2;
  }
`;
