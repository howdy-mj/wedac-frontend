import React from "react";
import styled from "styled-components";

function WalletHistory() {
  return (
    <WalletHistoryWrap>
      <Title>
        <div>구분</div>
        <div>신청 금액</div>
        <div>상태</div>
        <div>확인시간</div>
      </Title>
      <Content>내역이 존재하지 않습니다.</Content>
    </WalletHistoryWrap>
  );
}

const WalletHistoryWrap = styled.div`
  width: 100%;
  color: #919dae;
  font-size: 12px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-around;
  line-height: 30px;
  padding: 6px 0;
  height: 40px;
  border-bottom: 2px solid #ebeef6;
`;

const Content = styled.div`
  margin: 60px auto;
  text-align: center;
`;

export default WalletHistory;
