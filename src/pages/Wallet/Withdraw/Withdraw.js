import React from "react";
import styled, { css } from "styled-components";

function Withdraw() {
  let accountAuth = localStorage.getItem("accountAuth");
  return (
    <WithdrawWrap>
      {accountAuth ? (
        <>
          <WithdrawWarning>
            <WarningP>
              대환 대출안내 또는 수익률 보장 안내를 받고 개인정보와 인증정보를
              제공하여 GDAC에 원화입금을 한 경우 서비스 제한 및 민형사상 고발
              대상이 될 수 있습니다.
            </WarningP>
          </WithdrawWarning>
          <Available>
            <AvailableLeft>출금 가능 금액</AvailableLeft>
            <AvailableRight>
              <ARValue>0</ARValue>
              <ARPer>KRW</ARPer>
            </AvailableRight>
          </Available>
          <BankAccount>
            <BankLeft>입금 받을 계좌</BankLeft>
            <BankRight>
              <p>**은행</p>
              <p>09*****1234</p>
            </BankRight>
          </BankAccount>
          <TotalWithdrawWrap>
            <TotalWithdraw>출금 요청 금액</TotalWithdraw>
            <TotalRight>
              <div>
                <input />
              </div>
              <div>
                <button>최대</button>
              </div>
            </TotalRight>
          </TotalWithdrawWrap>
          <WithdrawInfo>
            <div>
              <InfoLeft>1회 출금한도</InfoLeft>
              <InfoRight>50,000,000 KRW</InfoRight>
            </div>
            <div>
              <InfoLeft>1일 출금잔여한도</InfoLeft>
              <InfoRight>100,000,000 KRW</InfoRight>
            </div>
            <div>
              <InfoLeft>수수료</InfoLeft>
              <InfoRight>1,000 KRW</InfoRight>
            </div>
          </WithdrawInfo>
          <TotalWithdrawAmount>
            <AmountLeft>총 출금 금액(수수료 포함)</AmountLeft>
            <AmountRight>
              <TotalARValue>0</TotalARValue>
              <TotalARPer>KRW</TotalARPer>
            </AmountRight>
          </TotalWithdrawAmount>
          <BankGuide>
            <GuideTitle>출금 시 주의사항 안내</GuideTitle>
            <GuideContent>
              - 본인명의 실명확인된 계좌로만 출금이 가능합니다. <br />
              - 최소 출금 가능 금액은 5,000 KRW 입니다. <br />
              - 출금 요청 시 이상 거래 유무 확인 후 출금됩니다. <br />
              - 부정거래가 의심될 경우 출금이 제한될 수 있습니다. <br />
              - 은행 점검시간에는 출금이 불가능합니다. <br />
              (은행점검시간 안내)
            </GuideContent>
          </BankGuide>
          <WithdrawButton>출금신청</WithdrawButton>
        </>
      ) : (
        <NoEmailAuth>계좌 점유 인증이 필요합니다.</NoEmailAuth>
      )}
    </WithdrawWrap>
  );
}

const WithdrawWrap = styled.div``;

const WithdrawWarning = styled.div`
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

const Available = styled.div`
  display: flex;
  height: 76px;
  line-height: 76px;
  border-bottom: 1px solid #ebeef6;
`;

const AvailableLeft = styled.p`
  padding-left: 14px;
  width: 40%;
  font-size: 14px;
`;

const AvailableRight = styled.p`
  padding-right: 14px;
  width: 60%;
  text-align: right;
`;

const ARValue = styled.span`
  font-weight: 700;
  color: #596070;
  font-size: 16px;
`;

const ARPer = styled.span`
  font-size: 12px;
  margin-left: 5px;
  letter-spacing: -0.03em;
  color: #919dae;
`;

const BankAccount = styled(Available)``;

const BankLeft = styled(AvailableLeft)`
  font-weight: 700;
`;

const BankRight = styled.div`
  padding-right: 14px;
  width: 60%;
  text-align: right;
  margin-top: 20px;
  p {
    line-height: 20px;
    font-weight: 700;
    color: #596070;
    font-size: 14px;
  }
`;

const TotalWithdrawWrap = styled(Available)`
  height: 86px;
  background-color: #f5f8ff;
`;

const TotalWithdraw = styled(BankLeft)`
  line-height: 86px;
  width: 30%;
`;

const TotalRight = styled.div`
  padding-right: 14px;
  width: 60%;
  text-align: right;
  display: flex;
  padding-left: 15px;
  width: 70%;

  input {
    font-size: 14px;
    height: 34px;
    width: 240px;
    text-align: right;
    border: none;
    padding-right: 10px;
    size: 18px;
    font-weight: 700;
    color: #596070;
  }

  button {
    width: 80px;
    height: 34px;
    color: white;
    background-color: ${(props) => props.theme.subColor};
    border: none;
  }
`;

const WithdrawInfo = styled.div`
  font-size: 12px;
  line-height: 24px;
  padding: 14px 0;
  border-bottom: 1px solid #ebeef6;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const InfoLeft = styled.div`
  padding-left: 14px;
`;

const InfoRight = styled.div`
  padding-right: 14px;
`;

const TotalWithdrawAmount = styled(Available)`
  height: 56px;
`;

const AmountLeft = styled(BankLeft)`
  line-height: 56px;
`;

const AmountRight = styled(AvailableRight)`
  line-height: 56px;
`;

const TotalARValue = styled(ARValue)`
  font-size: 18px;
`;

const TotalARPer = styled(ARPer)``;

const BankGuide = styled.div`
  padding: 14px;
  margin: 20px 10px;
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

const WithdrawButton = styled.button`
  width: calc(100% - 28px);
  height: 44px;
  margin: 0 14px;
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

const NoEmailAuth = styled.div`
  font-size: 14px;
  margin: 50px auto;
  text-align: center;
  color: #022553;
`;

export default Withdraw;
