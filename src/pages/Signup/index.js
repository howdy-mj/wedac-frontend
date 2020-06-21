import React from "react";
import { Link, useHistory } from "react-router-dom";
import Kakao from "kakaojs";
import styled, { css } from "styled-components";
import { YE } from "../../config";
import Nav from "../../component/Nav/Nav";
import Footer from "../../component/Footer/Footer";
import kakaoImg from "../../images/kakaotalk.png";
import circle from "../../images/circle.png";

function Signup() {
  const history = useHistory();

  const kakaoRegister = () => {
    Kakao.Auth.login({
      success: (authObj) => {
        fetch(`${YE}/user/kakao-login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("token", res.token);
            history.push("/");
            window.location.reload();
          });
      },
      fail: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <>
      <Nav />
      <SignupPage className="Signup">
        <SignupWrapper className="signupWrapper">
          <SignupFeed className="signupFeed">
            <SignupGdac className="signupGdac">GDAC 회원가입</SignupGdac>
            <KakaoSignup onClick={kakaoRegister} className="kakaoSignup">
              <KakaoSignupButton>
                <img src={kakaoImg} alt="kaka" />
                카카오 계정으로 가입하기
              </KakaoSignupButton>
            </KakaoSignup>
            <MiddleLine2 className="middleLine2">
              <span>또는</span>
            </MiddleLine2>
            <EmailSignup className="emailSignup">
              <Link to={`/signupEmail`}>
                <EmailSignupButton type="button" className="emailSignupButton">
                  이메일로 가입하기
                </EmailSignupButton>
              </Link>
            </EmailSignup>
            <BelowSignupButton className="belowSignupButton">
              <BottomLeft2 className="bottomLeft2">
                이미 계정이 있으신가요? <a href="/login">로그인</a>
              </BottomLeft2>
              <BottomRight2 className="bottomRight2">
                <a href="/#">Registration guide</a>
              </BottomRight2>
            </BelowSignupButton>
            <SupportBottom2 className="supportBottom2">
              <SupportFirst2 className="supportFirst2">
                문제가 있으시면&nbsp;
                <a href="/#" target="_blank">
                  개별문의
                </a>
                를 진행해 주세요.
              </SupportFirst2>
              <SupportSecond2 className="supportSecond2">
                <img src={circle} alt="circle" />
                고객센터
                <a href="/https://support.gdac.com" target="_blank">
                  https://support.gdac.com
                </a>
              </SupportSecond2>
            </SupportBottom2>
          </SignupFeed>
        </SignupWrapper>
      </SignupPage>
      <Footer />
    </>
  );
}

export default Signup;

const SignupPage = styled.div`
  background-color: #f7fbff;

  @media ${(props) => props.theme.mobile} {
    height: 90vh;
  }
`;
const SignupWrapper = styled.div`
  padding: 6px;
  overflow: hidden;

  @media ${(props) => props.theme.mobile} {
    margin-top: 46px;
  }
`;
const SignupFeed = styled.div`
  border: 0px solid black;
  width: 520px;
  margin: 60px auto;
  padding: 24px 0 20px;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.2);
  background-color: #fff;
`;
const SignupGdac = styled.p`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  padding-bottom: 24px;
  line-height: 24px;
  color: #022553;
  text-align: center;
`;
const KakaoSignup = styled.div`
  padding: 0 65px;
`;
const KakaoSignupButton = styled.button`
  cursor: pointer;
  margin: 0 auto 34px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  position: relative;
  margin: 0 auto 34px;
  font-weight: 700;
  color: #000;
  background-color: #ffeb00;
  border-color: #ffeb00;
  border-radius: 2px;
  border: 0;
  width: 100%;
  height: 50px;
  &:hover {
    background-color: #ecda0b;
  }
  img {
    position: absolute;
    left: 20px;
    bottom: 10px;
    width: 29px;
    height: 27px;
  }
`;
const MiddleLine2 = styled.div`
  margin: 0 65px;
  position: relative;
  display: block;
  height: 33px;
  text-align: center;
  border-top: 1px solid #ebeef6;
  span {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.03em;
    position: absolute;
    top: -20px;
    left: 37%;
    display: inline-block;
    padding: 10px 30px;
    color: #919dae;
    background-color: #fff;
  }
`;
const EmailSignup = styled.div`
  padding: 0 65px;
`;
const EmailSignupButton = styled.button`
  cursor: pointer;
  margin: 0 auto 34px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  position: relative;
  margin: 0 auto 5px;
  font-weight: 700;
  color: #022553;
  background-color: #ebeef6;
  border-color: #ebeef6;
  border-radius: 2px;
  border: 0;
  width: 100%;
  height: 50px;
  &:hover {
    background-color: #dcdfe6;
  }
`;
const BelowSignupButton = styled.div`
  padding: 0 65px 6px;
  width: 100%;
  height: 40px;
`;
const BottomLeft2 = styled.div`
  float: left;
  font-size: 12px;
  a {
    display: inline-block;
    margin-top: 14px;
    color: #0086ec;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
  }
`;
const BottomRight2 = styled.div`
  float: right;
  a {
    display: inline-block;
    margin-top: 14px;
    color: #0086ec;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
  }
`;
const SupportBottom2 = styled.div`
  padding-top: 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;
  border-top: 1px solid #ebeef6;
`;
const SupportFirst2 = styled.p`
  width: 300px;
  margin: 5px auto;
  line-height: 30px;
  background-color: rgba(2, 37, 83, 0.02);
  border-radius: 15px;
  a {
    text-decoration: none;
    color: #00338d;
  }
`;
const SupportSecond2 = styled.p`
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
