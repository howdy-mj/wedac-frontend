import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { YE } from "../../../config";
import Nav from "../../../component/Nav/Nav";
import Footer from "../../../component/Footer/Footer";
import circle from "../../../images/circle.png";
import checkbox from "../../../images/checkbox.png";
import checked from "../../../images/chec.png";
import * as actions from "../../../store/actions";

function SignupEmail({
  HandleEmail,
  HandlePassword,
  HandleDoubleCheck,
  email,
  password,
  pwDoubleCheck,
}) {
  const history = useHistory();
  const [warningEmail, setWarningEmail] = useState("");
  const [emailsatisfied, setEmailsatisfied] = useState(false);
  const [emailBorder, setEmailBorder] = useState(true);
  const [pwsatisfied, setPwsatisfied] = useState(false);
  const [warningPW, setWarningPW] = useState("");
  const [passwordBorder, setPasswordBorder] = useState(true);
  const [show, setShow] = useState(false);
  const [checkLengthYN, setCheckLengthYN] = useState("F");
  const [checkUpperYN, setCheckUpperYN] = useState("F");
  const [checkLowerYN, setCheckLowerYN] = useState("F");
  const [checkNumYN, setCheckNumYN] = useState("F");
  const [checkCharYN, setCheckCharYN] = useState("F");
  const [doublesatisfied, setDoublesatisfied] = useState(false);
  const [warningDouble, setWarningDouble] = useState("");
  const [pwDoubleBorder, setPwDoubleBorder] = useState(true);
  const [isNecessary, setIsNecessary] = useState(false);
  const [isOption, setIsOption] = useState(false);
  // const [notAllowed, setNotAllowed] = useState(true);

  const emailValidation = (e) => {
    email = e.target.value;
    HandleEmail(email);
    setEmailBorder(false);

    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let result = regExp.test(email);

    if (result) {
      setWarningEmail("");
      setEmailBorder(true);
      setEmailsatisfied(true);
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
    HandlePassword(password);
    setPasswordBorder(false);

    const regExp = /^.*(?=^.{8,50}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    const Upper = /[A-Z]/;
    const Lower = /[a-z]/;
    const Number = /[0-9]/;
    const Char = /[!@#$%^&+=]/;
    let result = regExp.test(password);
    console.log("password", password);

    if (result) {
      setWarningPW("");
      setPasswordBorder(true);
      setPwsatisfied("true");
      HandlePassword(password);
    } else if (!result) {
      setWarningPW(`영문대문자, 영어소문자, 숫자, 특수문자를 각 1개 이상 포함하여
      8자리~50자리의 비밀번호를 입력하세요.`);
      setPasswordBorder(false);
    }

    if (password.length > 7) {
      setCheckLengthYN("x");
    } else {
      setCheckLengthYN("F");
    }

    if (Upper.test(password)) {
      setCheckUpperYN("x");
    } else {
      setCheckUpperYN("F");
    }
    if (Lower.test(password)) {
      setCheckLowerYN("x");
    } else {
      setCheckLowerYN("F");
    }

    if (Number.test(password)) {
      setCheckNumYN("x");
    } else {
      setCheckNumYN("F");
    }

    if (Char.test(password)) {
      setCheckCharYN("x");
    } else {
      setCheckCharYN("F");
    }

    if (e.target.value === pwDoubleCheck || pwDoubleCheck === "") {
      setWarningDouble("");
      setPwDoubleBorder(true);
      setPwsatisfied(true);
    } else if (e.target.value !== pwDoubleCheck) {
      setWarningDouble("비밀번호와 일치하지 않습니다. 다시 확인해 주세요.");
      setPwDoubleBorder(false);
      setPwsatisfied(false);
    }
  };

  const warningPWMessage = (e) => {
    setShow(false);
    if (!e.target.value) {
      setWarningPW("비밀번호를 입력해 주세요.");
      setPasswordBorder(false);
    }
  };

  const pwDoubleValidation = (e) => {
    pwDoubleCheck = e.target.value;
    HandleDoubleCheck(pwDoubleCheck);
    setPwDoubleBorder(false);

    if (pwDoubleCheck === password) {
      setWarningDouble("");
      setPwDoubleBorder(true);
      setDoublesatisfied(true);
      HandleDoubleCheck(pwDoubleCheck);
    } else {
      setWarningDouble("비밀번호와 일치하지 않습니다. 다시 확인해 주세요.");
      setPwDoubleBorder(false);
      setDoublesatisfied(false);
    }
  };

  const warningDoubleMessage = (e) => {
    if (password && pwDoubleCheck !== password) {
      setWarningDouble("비밀번호와 일치하지 않습니다. 다시 확인해 주세요.");
    }
  };

  const showGuide = () => {
    setShow(true);
  };

  const hasArgreeNecessary = () => {
    setIsNecessary(!isNecessary);
  };

  const hasAgreeOption = () => {
    setIsOption(!isOption);
  };

  const goVerify = (e) => {
    e.preventDefault();

    fetch(`${YE}/user/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        check_password: pwDoubleCheck,
      }),
    }).then((res) => {
      if (res.status === 200) {
        history.push("/signupVerify");
      } else if (res.status === 404) {
        console.log("재입력");
      }
    });
  };

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
                  type="text"
                  name="email"
                  placeholder="이메일"
                  style={{
                    borderColor: emailBorder ? "" : "red",
                  }}
                  onChange={emailValidation}
                  onBlur={warningEmailMessage}
                  required
                />
              </TypeEmailPassWord>
              <WarningEmail>{warningEmail}</WarningEmail>

              <TypeEmailPassWord className="typePassword3">
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  style={{ borderColor: passwordBorder ? "" : "red" }}
                  onChange={passwordValidation}
                  onBlur={warningPWMessage}
                  onFocus={showGuide}
                />
                <PasswordGuide showGuide={show}>
                  <p>
                    <CheckYN
                      style={{ color: checkLengthYN === "x" ? "#3bbee0" : "" }}
                    >
                      {checkLengthYN}
                    </CheckYN>
                    8자 이상 50자 이하
                  </p>
                  <p>
                    <CheckYN
                      style={{ color: checkUpperYN === "x" ? "#3bbee0" : "" }}
                    >
                      {checkUpperYN}
                    </CheckYN>
                    최소 1개 이상 대문자 포함
                  </p>
                  <p>
                    <CheckYN
                      style={{ color: checkLowerYN === "x" ? "#3bbee0" : "" }}
                    >
                      {checkLowerYN}
                    </CheckYN>
                    최소 1개 이상 소문자 포함
                  </p>
                  <p>
                    <CheckYN
                      style={{ color: checkNumYN === "x" ? "#3bbee0" : "" }}
                    >
                      {checkNumYN}
                    </CheckYN>
                    최소 1개 이상 숫자 포함
                  </p>
                  <p>
                    <CheckYN
                      style={{ color: checkCharYN === "x" ? "#3bbee0" : "" }}
                    >
                      {checkCharYN}
                    </CheckYN>
                    최소 1개 이상 특수 문자 포함($, @, %...)
                  </p>
                </PasswordGuide>
              </TypeEmailPassWord>
              <WarningPassword>{warningPW}</WarningPassword>

              <TypeEmailPassWord className="typePasswordAgain3">
                <input
                  type="password"
                  name="passwordDouble"
                  placeholder="비밀번호 확인"
                  style={{ borderColor: pwDoubleBorder ? "" : "red" }}
                  onChange={pwDoubleValidation}
                  onBlur={warningDoubleMessage}
                />
              </TypeEmailPassWord>
              <WarningPasswordCheck>{warningDouble}</WarningPasswordCheck>

              <AgreementPart className="agreementPart">
                <AgreementPartInner
                  firstline
                  name="necessary"
                  value={isNecessary}
                  onClick={hasArgreeNecessary}
                >
                  <CheckboxImg checkTF={isNecessary} />
                  GDAC&nbsp;<a href="/signupEmail">이용약관,</a>
                  <a href="/signupEmail">&nbsp;개인정보처리방침,</a>
                  <a href="/signupEmail">&nbsp;원화 입출금 방침</a>에
                  동의합니다.(필수)
                </AgreementPartInner>

                <AgreementPartInner
                  name="option"
                  value={isOption}
                  onClick={hasAgreeOption}
                >
                  <CheckboxImg checkTF={isOption} />
                  GDAC 마케팅 정보 수신에 동의합니다. (선택)
                </AgreementPartInner>
              </AgreementPart>

              <EmailButtonDiv3 onClick={goVerify} className="emailButtonDiv3">
                <button
                  type="submit"
                  disabled={
                    !(
                      emailsatisfied &&
                      pwsatisfied &&
                      doublesatisfied &&
                      isNecessary
                    )
                  }
                  style={{
                    cursor:
                      emailsatisfied === true &&
                      pwsatisfied === true &&
                      doublesatisfied === true &&
                      isNecessary === true
                        ? "pointer"
                        : "not-allowed",
                    backgroundColor:
                      emailsatisfied === true &&
                      pwsatisfied === true &&
                      doublesatisfied === true &&
                      isNecessary === true
                        ? "#0086ec"
                        : "rgba(0, 134, 236, 0.5)",
                  }}
                  className="emailButton3"
                >
                  이메일로 가입하기
                </button>
              </EmailButtonDiv3>

              <BelowSignupEmailButton3 className="belowSignupEmailButton3">
                <BelowLeft3 className="belowLeft3">
                  <Link to="/login">로그인</Link>
                </BelowLeft3>
                <BelowLeft3 className="belowRight3">
                  <a href="/signup">카카오 계정으로 가입하기</a>
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

const mapStateToProps = (state) => {
  return {
    email: state.goRegister.email,
    password: state.goRegister.password,
    pwDoubleCheck: state.goRegister.pwDoubleCheck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    HandleEmail: (email) => {
      dispatch(actions.goRegisterEmail(email));
    },
    HandlePassword: (password) => {
      dispatch(actions.goRegisterPassword(password));
    },
    HandleDoubleCheck: (pwDoubleCheck) => {
      dispatch(actions.goRegisterPwDoubleCheck(pwDoubleCheck));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupEmail);

const SignupEmailPage = styled.div`
  background-color: #f7fbff;
  height: 100%;
  @media ${(props) => props.theme.mobile} {
    height: 90vh;
  }
`;

const SignupEmailWrapper = styled.div`
  padding: 6px;
  overflow: hidden;
  @media ${(props) => props.theme.mobile} {
    margin-top: 46px;
  }
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
  height: 50px;
  input {
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
      ${(props) =>
        props.hasborder &&
        css`
          border: red;
        `}
    }
    &:after:focus {
      border-color: ${(props) => props.theme.plusColor};
    }
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

const PasswordGuide = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  height: 111px;
  width: 407px;
  padding: 8px 14px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.2);
  z-index: 999999999;
  p {
    font-size: 12px;
    letter-spacing: -0.03em;
    line-height: 17px;
    color: #596070;
  }
  ${(props) =>
    props.showGuide &&
    css`
      display: block;
    `}
`;

const CheckYN = styled.span`
  font-family: "emoticon";
  margin-right: 5px;
`;

const WarningPassword = styled(WarningEmail)``;

const WarningPasswordCheck = styled(WarningEmail)``;

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
  color: #596070;
  cursor: pointer;
  ${(props) =>
    props.firstline &&
    css`
      margin-bottom: 10px;
    `}
  a {
    font-weight: 700;
    color: #0086ec;
    text-decoration: none;
  }
`;

const CheckboxImg = styled.div`
  cursor: pointer;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: url(${checkbox}) no-repeat 0 0;
  background-size: contain;
  ${(props) =>
    props.checkTF &&
    css`
      background: url(${checked}) no-repeat 0 0;
      background-size: contain;
    `}
`;

const EmailButtonDiv3 = styled.div`
  padding: 0 65px;
  button {
    /* background-color: rgba(0, 134, 236, 0.5); */
    border-color: transparent;
    width: 100%;
    height: 50px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    outline: none;
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
