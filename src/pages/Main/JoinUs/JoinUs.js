import React from "react";
import styled, { css } from "styled-components";

function JoinUs() {
  return (
    <JoinUsWrap>
      <JoinContainer>
        <Text>
          <Subtitle>GDAC과 함께하세요!</Subtitle>
          <WeAre>
            GDAC은 암호화폐 거래 기반의 새롭고 다양한 투자의 기회 제공을 위해
            언제나 한발 앞서 노력하고 있습니다.
          </WeAre>
        </Text>
        <ActionButton>
          <ActionDiv goExchange>
            <p>거래소 둘러보기</p>
          </ActionDiv>
          <ActionDiv goLogin>
            <p>로그인</p>
          </ActionDiv>
        </ActionButton>
      </JoinContainer>
    </JoinUsWrap>
  );
}

const JoinUsWrap = styled.div`
  height: 234px;
  background-color: #e2f3ff;
  padding: 0 38px;

  @media ${(props) => props.theme.tabletS} {
    height: 312px;
  }
`;

const JoinContainer = styled.div`
  display: flex;
  padding: 60px 0;
  justify-content: space-around;

  @media ${(props) => props.theme.tabletS} {
    flex-direction: column;
  }

  @media (min-width: 1220px) {
    width: 1152px;
    margin: 0 auto;
  }
`;

const Text = styled.div`
  width: 537px;
`;

const Subtitle = styled.div`
  font-size: 18px;
  color: #596070;
`;

const WeAre = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  line-height: 40px;
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.tabletS} {
    margin-top: 32px;
  }
`;

const ActionDiv = styled.div`
  height: 46px;
  width: 180px;
  font-size: 14px;
  text-align: center;
  line-height: 45px;

  ${(props) =>
    props.goExchange &&
    css`
      background-color: #f5f8ff;
      color: #041938;
      margin-right: 15px;
      &:hover {
        background-color: #a7dbfe;
      }
    `}
  

  ${(props) =>
    props.goLogin &&
    css`
      background-color: ${(props) => props.theme.subColor};
      color: white;
      &:hover {
        background-color: ${(props) => props.theme.gdacColor};
      }
    `}

  @media ${(props) => props.theme.tabletS} {
    width: 220px;
  }
`;
export default JoinUs;
