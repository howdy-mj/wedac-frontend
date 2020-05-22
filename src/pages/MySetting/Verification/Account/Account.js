import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { YE } from "../../../../config";
import {
  submitAuthUserName,
  submitAuthUserBank,
  submitAuthUserAccount,
  submitAuthAccount,
  changeAuthLevel,
  showNextAuth,
} from "../../../../store/actions";

function Account({
  submitAuthUserName,
  submitAuthUserBank,
  submitAuthUserAccount,
  submitAuthAccount,
  name,
  bank,
  account,
  changeAuthLevel,
  showNextAuth,
}) {
  let token = localStorage.getItem("token");
  const history = useHistory();
  const [nameValidation, setName] = useState(false);
  const [bankValidation, setBank] = useState(false);
  const [accountValidation, setAccount] = useState(false);
  const goBack = () => {
    history.goBack();
  };

  const nameChange = (e) => {
    let nameValue = e.target.value;
    console.log(nameValue);
    nameValue.length > 1 ? setName(true) : setName(false);
    submitAuthUserName(nameValue);
  };

  const bankChange = (e) => {
    let bankValue = e.target.value;
    submitAuthUserBank(bankValue);
    bankValue.length > 1 ? setBank(true) : setBank(false);
  };

  const accountChange = (e) => {
    let accountValue = e.target.value;
    submitAuthUserAccount(accountValue);
    accountValue.length > 1 ? setAccount(true) : setAccount(false);
  };

  const submitAccount = () => {
    console.log("제출");
    submitAuthAccount(name, bank, account);
    changeAuthLevel(3);
    showNextAuth(
      4,
      "카카오페이 인증",
      `현재 회원님은 코인 및 원화 입출금이 가능합니다. 출금한도
    개별 승인을 원하는 경우 신원 인증을 진행해주시기 바랍니다.`
    );
    console.log(name, bank, account);

    fetch(`${YE}/user/bankaccount`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify({
        name: name,
        bank_name: bank,
        bank_account: account,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log("성공");
        localStorage.setItem("accountAuth", true);
        history.push("/settings/vertification");
      } else {
        console.log("실패");
      }
    });
  };

  return (
    <AccountWrap>
      <AccountContainer>
        <GoBack onClick={goBack}>
          <span>v</span>돌아가기
        </GoBack>
        <Content>
          <Title>계좌 인증</Title>
          <InnerDiv>
            <InputDiv>
              <Name>이름</Name>
              <NameInput onChange={nameChange} />
            </InputDiv>
            <InputDiv>
              <Bank>은행</Bank>
              <BankInput placeholder="" onChange={bankChange} />
            </InputDiv>
            <InputDiv>
              <AccountNum>계좌번호</AccountNum>
              <AccountInput
                onKeyDown={(e) =>
                  (e.keyCode === 69 ||
                    e.keyCode === 190 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                onChange={accountChange}
              />
            </InputDiv>
          </InnerDiv>
          <SubmitButton
            disabled={!(nameValidation && bankValidation && accountValidation)}
            style={{
              cursor:
                nameValidation && bankValidation && accountValidation
                  ? "pointer"
                  : "not-allowed",
              backgroundColor:
                nameValidation && bankValidation && accountValidation
                  ? "#0086ec"
                  : "rgba(0, 134, 236, 0.5)",
            }}
            onClick={submitAccount}
          >
            인증하기
          </SubmitButton>
        </Content>
      </AccountContainer>
    </AccountWrap>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.authAccount.name,
    bank: state.authAccount.bank,
    account: state.authAccount.account,
  };
};

export default connect(mapStateToProps, {
  submitAuthUserName,
  submitAuthUserBank,
  submitAuthUserAccount,
  submitAuthAccount,
  changeAuthLevel,
  showNextAuth,
})(Account);

const AccountWrap = styled.div`
  width: 100%;
`;

const AccountContainer = styled.div`
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
  width: 400px;
`;

const Title = styled.div`
  color: rgb(2, 37, 83);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const InnerDiv = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const InputDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

const Name = styled.div`
  color: rgb(2, 37, 83);
  font-size: 18px;
  width: 120px;
  line-height: 30px;
  text-align: left;
`;

const NameInput = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 5px;
  outline: none;
  border: 1px solid #ebeef6;
  border-radius: 2px;
  color: rgb(145, 157, 174);
  background-color: #f5f8ff;
  padding-left: 20px;
`;

const Bank = styled(Name)``;

const BankInput = styled(NameInput)``;

const AccountNum = styled(Name)``;

const AccountInput = styled(NameInput)`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const SubmitButton = styled.button`
  width: 120px;
  height: 35px;
  color: white;
  background-color: rgba(0, 134, 236, 0.5);
  border-radius: 3px;
  border: none;
  outline: none;
  margin-top: 20px;

  ${(props) =>
    props.actived &&
    css`
      backgroun-color: #0086ec;
      &:hover {
        background-color: #a7dbfe;
      }
    `}
`;
