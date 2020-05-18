import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { SH } from "../../config";
import * as actions from "../../store/actions";
import kakao from "../../images/kakaotalk.png";
import circle from "../../images/circle.png";

function OnlyLogin({ HandleEmail, HandlePassword, email, password }) {
  const history = useHistory();
  const [warningEmail, setWarningEmail] = useState("");
  const [emailsatisfied, setEmailsatisfied] = useState(false);
  const [emailBorder, setEmailBorder] = useState(true);
  const [pwsatisfied, setPwsatisfied] = useState(false);
  const [warningPW, setWarningPW] = useState("");
  const [passwordBorder, setPasswordBorder] = useState(true);

  const emailValidation = (e) => {
    email = e.target.value;
    setEmailBorder(false);

    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let result = regExp.test(email);

    if (result) {
      setWarningEmail("");
      setEmailBorder(true);
      setEmailsatisfied(true);
      HandleEmail(email);
    } else if (!result) {
      setWarningEmail("이메일 주소를 정확히 입력해주세요.");
      setEmailBorder(false);
      setEmailsatisfied(false);
    }
  };

  const warningEmailMessage = (e) => {
    if (!e.target.value) {
      setWarningEmail("이메일을 입력해 주세요.");
      setEmailBorder(false);
    }
  };

  const passwordValidation = (e) => {
    password = e.target.value;
    setPasswordBorder(false);

    const regExp = /^.*(?=^.{8,50}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    let result = regExp.test(password);
    console.log("password", password);

    if (result) {
      setWarningPW("");
      setPasswordBorder(true);
      setPwsatisfied(true);
      HandlePassword(password);
    } else if (!result) {
      setWarningPW(`영문대문자, 영어소문자, 숫자, 특수문자를 각 1개 이상 포함하여
      8자리~50자리의 비밀번호를 입력하세요.`);
      setPasswordBorder(false);
      setPwsatisfied(false);
    }
  };

  const warningPWMessage = (e) => {
    if (!e.target.value) {
      setWarningPW("비밀번호를 입력해 주세요.");
      setPasswordBorder(false);
    }
  };

  const goLogin = () => {
    console.log(
      JSON.stringify({
        email: email,
        password: password,
      })
    );

    fetch(`${SH}/user/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);

        if (res.access_token) {
          console.log("성공");
          localStorage.setItem("token", res.access_token);
          history.push("/");
        } else {
          alert("이메일 또는 비밀번호가 일치하지 않습니다.");
        }
      })
      .catch((err) => {
        console.log("실패");
        console.log(err);
      });
  };

  return (
    <>
      <LoginPage>
        <LoginWrapper>
          <LoginFeed>
            <LoginGdac>GDAC 로그인</LoginGdac>
            <LoginText>
              <LoginInnerText>
                아래 웹 사이트에 접속하는지 확인해 주세요
              </LoginInnerText>
              <AddressImg
                src={
                  "https://www.gdac.com/resources/images/session/website-address.png"
                }
                alt="website"
              />
            </LoginText>
            <KakaoLogin>
              <KakaoButton>
                <KakaoButtonImg src={kakao} alt="kaka" />
                카카오계정으로 로그인
              </KakaoButton>
            </KakaoLogin>
            <MiddleLine>
              <MiddleLineOr>또는</MiddleLineOr>
            </MiddleLine>
            <BottomPart>
              <TypeEmail>
                <InputEmail
                  className="inputEmail"
                  type="text"
                  name="email"
                  placeholder="이메일"
                  style={{
                    borderColor: emailBorder ? "" : "red",
                  }}
                  onChange={emailValidation}
                  onBlur={warningEmailMessage}
                />
              </TypeEmail>
              <WarningEmail>{warningEmail}</WarningEmail>

              <TypePassword>
                <InputPassword
                  className="inputPassword"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  style={{ borderColor: passwordBorder ? "" : "red" }}
                  onChange={passwordValidation}
                  onBlur={warningPWMessage}
                />
              </TypePassword>
              <WarningPassword>{warningPW}</WarningPassword>

              <EmailButtonDiv onClick={goLogin}>
                <EmailButton
                  type="submit"
                  disabled={!(emailsatisfied && pwsatisfied)}
                  style={{
                    cursor:
                      emailsatisfied === true && pwsatisfied === true
                        ? "pointer"
                        : "not-allowed",
                    backgroundColor:
                      emailsatisfied === true && pwsatisfied === true
                        ? "#0086ec"
                        : "rgba(0, 134, 236, 0.5)",
                  }}
                  className="emailButton"
                >
                  이메일로 로그인
                </EmailButton>
              </EmailButtonDiv>
              <BelowLoginButton>
                <BelowLeft className="belowLeft">
                  <Link to={`/Signup/Signup`}>회원가입</Link>
                </BelowLeft>
                <BelowRight className="belowRight">
                  <a href="/#">비밀번호 찾기</a>
                </BelowRight>
              </BelowLoginButton>
            </BottomPart>

            <SupportBottom className="supportBottom">
              <SupportFirst className="supportFirst">
                문제가 있으시면&nbsp;
                <a href="/#" target="_blank">
                  개별문의
                </a>
                를 진행해 주세요.
              </SupportFirst>
              <SupportSecond className="supportSecond">
                <img src={circle} alt="circle" />
                고객센터
                <a href="/https://support.gdac.com" target="_blank">
                  https://support.gdac.com
                </a>
              </SupportSecond>
            </SupportBottom>
          </LoginFeed>
        </LoginWrapper>
      </LoginPage>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    HandleEmail: (email) => {
      dispatch(actions.loginEmail(email));
    },
    HandlePassword: (password) => {
      dispatch(actions.loginPassword(password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlyLogin);

const LoginPage = styled.div`
  background-color: #f7fbff;
`;
const LoginWrapper = styled.div`
  padding: 6px;
  overflow: hidden;
`;
const LoginFeed = styled.div`
  border: 0px solid black;
  min-height: 600px;
  width: 520px;
  margin: 60px auto;
  padding: 24px 0 20px;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.2);
  background-color: #fff;
`;
const LoginGdac = styled.p`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  padding-bottom: 24px;
  line-height: 24px;
  color: #022553;
  text-align: center;
`;
const LoginText = styled.div`
  display: block;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;
`;
const LoginInnerText = styled.p`
  margin: 0 0 8px;
  color: #596070;
`;
const AddressImg = styled.img`
  width: 220px;
  height: 30px;
  margin: 0 0 24px;
`;
const KakaoLogin = styled.div`
  padding: 0 65px;
`;
const KakaoButton = styled.button`
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
`;
const KakaoButtonImg = styled.img`
  position: absolute;
  left: 20px;
  bottom: 10px;
  width: 29px;
  height: 27px;
`;
const MiddleLine = styled.div`
  margin: 0 65px;
  position: relative;
  display: block;
  height: 33px;
  text-align: center;
  border-top: 1px solid #ebeef6;
`;
const MiddleLineOr = styled.span`
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
`;
const BottomPart = styled.div`
  border: 0px solid blue;
`;
const TypeEmail = styled.div`
  padding: 0 65px;
  position: relative;
  z-index: 10;
  height: 50px;
`;

const InputEmail = styled.input`
  width: 100%;
  height: 46px;
  line-height: 50px;
  background-color: #f5f8ff;
  border: 1px solid #ebeef6;
  border-radius: 2px;
  padding-left: 15px;
  outline: none;

  &::placeholder {
    font-size: 13px;
    font-weight: 600;
    //letter-spacing: -0.03em;
    color: #596070;
    opacity: 0.6;
  }
`;

const WarningEmail = styled.p`
  position: relative;
  min-height: 24px;
  line-height: 1.6;
  padding: 0 65px;
  font-size: 12px;
  color: ${(props) => props.theme.plusColor};
`;

const TypePassword = styled.div`
  padding: 0 65px;
  position: relative;
  z-index: 10;
  height: 50px;
`;

const WarningPassword = styled(WarningEmail)``;

const InputPassword = styled.input`
  width: 100%;
  height: 46px;
  line-height: 50px;
  background-color: #f5f8ff;
  border: 1px solid #ebeef6;
  border-radius: 2px;
  padding-left: 15px;
  outline: none;

  &::placeholder {
    font-size: 13px;
    font-weight: 600;
    //letter-spacing: -0.03em;
    color: #596070;
    opacity: 0.6;
  }
`;
const EmailButtonDiv = styled.div`
  padding: 0 65px;
`;
const EmailButton = styled.button`
  background-color: rgba(0, 134, 236, 0.5);
  border-color: transparent;
  width: 100%;
  height: 50px;
  font-size: 14px;
  color: #fff;
  border-radius: 2px;
`;
const BelowLoginButton = styled.div`
  padding: 0 65px 6px;
  width: 100%;
  height: 40px;
`;
const BelowLeft = styled.div`
  float: left;
  a {
    display: inline-block;
    margin-top: 7px;
    color: #0086ec;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
  }
`;
const BelowRight = styled.div`
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
const SupportBottom = styled.div`
  padding-top: 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;
  border-top: 1px solid #ebeef6;
`;
const SupportFirst = styled.p`
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
const SupportSecond = styled.p`
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
