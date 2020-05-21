import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { SH } from "../../../../config";
import {
  submitPhoneNum,
  changeAuthLevel,
  showNextAuth,
} from "../../../../store/actions";

function Phone({ submitPhoneNum, changeAuthLevel, showNextAuth, phoneNum }) {
  let token = localStorage.getItem("token");
  const history = useHistory();
  const [border, setBorder] = useState(false);
  const [border2, setBorder2] = useState(false);
  const [able, setAble] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [colored, setColored] = useState(false);
  const [vertifyNum, setVertifyNum] = useState("");

  const goBack = () => {
    history.goBack();
  };

  const hasBorder = () => {
    setBorder(true);
  };
  const noBorder = () => {
    setBorder(false);
  };

  const hasBorder2 = () => {
    setBorder2(true);
  };
  const noBorder2 = () => {
    setBorder2(false);
  };

  const numberChange = (e) => {
    let phoneValue = e.target.value;
    console.log("phoneNum", phoneValue);
    submitPhoneNum(phoneValue);
    if (phoneValue.length < 6 || phoneValue.length > 12) {
      setAble(false);
    } else {
      setAble(true);
    }
  };

  const goVerify = () => {
    console.log("phoenNum", phoneNum);
    changeAuthLevel(2);
    submitPhoneNum(phoneNum);
    showNextAuth(
      3,
      "계좌점유 인증",
      "코인 입금을 위해 계좌점유 인증을 진행해주시기 바랍니다."
    );

    fetch(`${SH}/user/sms`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        phone_number: phoneNum,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log("휴대폰 인증 성공");
        setShowInput(false);
        changeAuthLevel(2);
        submitPhoneNum(phoneNum);
        showNextAuth(
          3,
          "계좌점유 인증",
          "코인 입금을 위해 계좌점유 인증을 진행해주시기 바랍니다."
        );
        // showNextAuthLevel(3);
        // showNextAuthGrade("계좌점유 인증");
        // showNextAuthDescription(
        //   "코인 입금을 위해 계좌점유 인증을 진행해주시기 바랍니다."
        // );
      } else {
        console.log("휴대폰 인증 실패");
      }
    });
  };

  const verifyChange = (e) => {
    setVertifyNum(e.target.value);
    console.log(vertifyNum);
    if (e.target.value.length === 4) {
      setColored(false);
    } else {
      setColored(true);
    }
  };

  const checkNumber = () => {
    console.log("인증하기 버튼");
    console.log(vertifyNum);
    fetch(`${SH}/user/sms/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        auth_number: vertifyNum,
      }),
    }).then((res) => {
      console.log(res);
      // if (res.status === 200) {
      //   console.log("휴대폰 인증 성공");
      //   setShowInput(false);
      //   changeAuthLevel(2);
      //   submitPhoneNum(phoneNum);
      //   showNextAuthLevel(3);
      //   showNextAuthGrade("계좌점유 인증");
      //   showNextAuthDescription(
      //     "코인 입금을 위해 계좌점유 인증을 진행해주시기 바랍니다."
      //   );
      //   history.push("/settings/vertification");
      // } else {
      //   console.log("휴대폰 인증 실패");
      // }
    });
  };

  return (
    <PhoneWrap>
      <PhoneContainer>
        <GoBack onClick={goBack}>
          <span>v</span>돌아가기
        </GoBack>
        <Content>
          <Title>휴대전화번호 인증</Title>
          <PhonInputDiv>
            <Contry placeholder="+ 82" />
            <Number
              type="number"
              hasBorder={border}
              onFocus={hasBorder}
              onBlur={noBorder}
              onKeyDown={(e) =>
                (e.keyCode === 69 ||
                  e.keyCode === 190 ||
                  e.keyCode === 187 ||
                  e.keyCode === 189) &&
                e.preventDefault()
              }
              onChange={numberChange}
            />

            <VertifyButton
              disabled={!able}
              style={{
                cursor: able ? "pointer" : "not-allowed",
                backgroundColor: able ? "#0086ec" : "rgba(0, 134, 236, 0.5)",
              }}
              onClick={goVerify}
            >
              인증번호 받기
            </VertifyButton>
          </PhonInputDiv>
          <WriteCodeDiv>
            <CodeInput
              type="number"
              disabled={showInput}
              hasBorder={border2}
              onFocus={hasBorder2}
              onBlur={noBorder2}
              onKeyDown={(e) =>
                (e.keyCode === 69 ||
                  e.keyCode === 190 ||
                  e.keyCode === 187 ||
                  e.keyCode === 189) &&
                e.preventDefault()
              }
              onChange={verifyChange}
              style={{ backgroundColor: showInput ? "#D0D5DD" : "" }}
            />
            <Confirm
              disabled={colored}
              style={{
                cursor: !colored ? "pointer" : "not-allowed",
                backgroundColor: !colored
                  ? "#0086ec"
                  : "rgba(0, 134, 236, 0.5)",
              }}
              onClick={checkNumber}
            >
              인증하기
            </Confirm>
          </WriteCodeDiv>
        </Content>
      </PhoneContainer>
    </PhoneWrap>
  );
}

const mapStateToProps = (state) => {
  return {
    phoneNum: state.authPhone.phoneNum,
  };
};

export default connect(mapStateToProps, {
  submitPhoneNum,
  changeAuthLevel,
  showNextAuth,
})(Phone);

const PhoneWrap = styled.div`
  width: 100%;
`;

const PhoneContainer = styled.div`
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.08);
  height: 500px;
  width: 1000px;
  padding: 36px;
  margin: 50px auto;
`;

const GoBack = styled.div`
  font-size: 14px;
  cursor: pointer;

  span {
    padding-right: 5px;
    font-family: "emoticon";
    font-size: 12px;
  }
`;

const Content = styled.div`
  text-align: center;
  margin: 50px auto;
  width: 450px;
`;

const Title = styled.div`
  color: rgb(2, 37, 83);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const PhonInputDiv = styled.div`
  display: flex;
  height: 60px;
  width: 450px;
  margin: 0 auto;
`;

const Contry = styled.input`
  width: 100px;
  height: 40px;
  margin-right: 5px;
  outline: none;
  border: 1px solid #ebeef6;
  border-radius: 2px;
  color: rgb(145, 157, 174);
  background-color: #f5f8ff;
  padding-left: 20px;
`;

const Number = styled(Contry)`
  width: 300px;
  height: 40px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) =>
    props.hasBorder &&
    css`
      border: 1px solid #919dae;
    `}
`;

const VertifyButton = styled.button`
  width: 320px;
  height: 44px;
  color: white;
  background-color: rgba(0, 134, 236, 0.5);
  border-radius: 3px;
  border: none;
  outline: none;

  ${(props) =>
    props.actived &&
    css`
      backgroun-color: #0086ec;
      &:hover {
        background-color: #a7dbfe;
      }
    `}
`;

const WriteCodeDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CodeInput = styled(Contry)`
  width: 170px;
  height: 42px;
  padding: 0;
  padding-left: 20px;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) =>
    props.hasBorder &&
    css`
      border: 1px solid #919dae;
    `}
`;

const Confirm = styled(VertifyButton)`
  width: 125px;
`;
