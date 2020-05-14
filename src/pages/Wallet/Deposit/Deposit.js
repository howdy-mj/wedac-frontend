import React from "react";
import styled, { css } from "styled-components";

function Deposit() {
  return (
    <DepositWrap>
      <DepositWarning>
        <WarningP>
          대환 대출안내 또는 수익률 보장 안내를 받고 개인정보와 인증정보를
          제공하여 GDAC에 원화입금을 한 경우 서비스 제한 및 민형사상 고발 대상이
          될 수 있습니다.
        </WarningP>
      </DepositWarning>
      <Header>반드시 아래의 인증된 계좌에서 송금해주세요.</Header>
      <CustomerInfo>
        <CustomerDiv>
          <CustomerP left>은행명</CustomerP>
          <CustomerP right>**은행</CustomerP>
        </CustomerDiv>
        <CustomerDiv>
          <CustomerP left>입금 계좌</CustomerP>
          <CustomerP right>09**********1234</CustomerP>
        </CustomerDiv>
        <CustomerDiv>
          <CustomerP left>예금주</CustomerP>
          <CustomerP right>김땡땡</CustomerP>
        </CustomerDiv>
      </CustomerInfo>
      <ExpectedDepositDiv>
        <ExpectedP>입금 예정 금액을 입력해 주십시오.</ExpectedP>
        <ExpectedInputWrap>
          <ExpectedInput type="text" inputmode="numeric" value="0" />
          <ExpectedKRW>KRW</ExpectedKRW>
        </ExpectedInputWrap>
        {/* <UnderWarning>최소 입금 예약 가능 금액을 10,000입니다.</UnderWarning> */}
      </ExpectedDepositDiv>
      <DepositButton>입금 예약</DepositButton>
      <BankGuide>
        <GuideTitle>원화 입금 전 유의사항</GuideTitle>
        <GuideContent>
          <strong>- 최소 입금(KRW) 금액은 10,000KRW 입니다.</strong> <br />-
          계정에 인증한 본인 명의 계좌에서만 입금이 가능합니다. <br />-
          원화(KRW) 입금은 24시간 내에 3회 가능합니다. <br />- 입금 심사 시 본인
          확인을 위해 개인정보 서류를 요구할 수 있습니다. <br />- 입금 심사에
          필요한 서류를 제출하지 않거나, 불법 자금으로 의심될 경우 입금한 자금이
          동결될 수 있습니다.
        </GuideContent>
      </BankGuide>
    </DepositWrap>
  );
}

const DepositWrap = styled.div``;

const DepositWarning = styled.div`
  border-bottom: 1px solid #ebeef6;
  height: 88px;
`;

const WarningP = styled.p`
  font-size: 12px;
  letter-spacing: -0.03em;
  color: #596070;
  padding: 14px;
  margin: 20px 14px;
  line-height: 1.7;
  background-color: #f9faff;
`;

const Header = styled.div`
  height: 56px;
  padding-left: 14px;
  font-weight: 700;
  color: #022553;
  line-height: 56px;
  font-size: 14px;
  border-bottom: 1px solid #ebeef6;
`;

const CustomerInfo = styled.div`
  /* position: relative; */
  width: 100%;
`;

const CustomerDiv = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef6;
`;

const CustomerP = styled.p`
  font-size: 14px;
  line-height: 48px;
  ${(props) =>
    props.left &&
    css`
      width: 40%;
      padding-left: 14px;
      color: #022553;
    `}
  ${(props) =>
    props.right &&
    css`
      width: 60%;
      padding-right: 14px;
      font-size: 16px;
      color: #596070;
      text-align: right;
    `}
`;

const ExpectedDepositDiv = styled.div`
  height: 92px;
  padding: 14px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-bottom: 1px solid #ebeef6;
  /* height: 120px; */
`;

const ExpectedP = styled.p`
  color: #022553;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ExpectedInputWrap = styled.div`
  display: flex;
  width: 100%;
  height: 34px;
  line-height: 34px;
`;

const ExpectedInput = styled.input`
  position: relative;
  text-align: right;
  border: none;
  width: 100%;
  border: 1px solid #ebeef6;
  padding-right: 50px;
`;

const ExpectedKRW = styled.div`
  /* position: absolute;
  right: 350px; */
  width: 50px;
  color: #919dae;
  font-size: 12px;
`;

const UnderWarning = styled.p`
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.3;
  color: #e21b36;
  text-align: center;
`;

const DepositButton = styled.button`
  width: calc(100% - 28px);
  height: 44px;
  margin: 30px 14px;
  color: white;
  background-color: rgba(0, 134, 236, 0.5);
  border: none;

  ${(props) =>
    props.actived &&
    css`
      backgroun-color: #0086ec;
      &:hover {
        background-color: #a7dbfe;
      }
    `}
`;

const BankGuide = styled.div`
  padding: 14px;
  margin: 0 10px;
  background-color: #f9faff;
  border: 1px solid #ebeef6;
  font-size: 12px;
  color: #596070;
`;

const GuideTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
`;

const GuideContent = styled.p`
  line-height: 1.7;
`;

export default Deposit;
