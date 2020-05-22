import React from "react";
import styled, { css } from "styled-components";

function Partners() {
  return (
    <PartnersWrap>
      <Global>
        <GlobalContainer>
          <Left>
            <LeftTitle>
              글로벌 TOP 보안 파트너들과 함께 <br />
              24시간 안심거래 보장
            </LeftTitle>
            <div>
              <Subtitle>계정보안</Subtitle>
              <Explain>
                편의성과 신뢰성을 더한 간편 안전인증 서비스 <br />
                기반 체계적인 보안시스템.
              </Explain>
            </div>
            <div>
              <Subtitle>지갑보안</Subtitle>
              <Explain>
                업계 최고 수준으로 인정받는 BitGo 이중월렛 <br />
                기반 고객들의 자산 안전보관.
              </Explain>
            </div>
          </Left>
          <Right>
            <GlobalImg></GlobalImg>
          </Right>
        </GlobalContainer>
      </Global>
      <Local>
        <LocalContainer className="container">
          <LocalTitle>피어테크(GDAC) 파트너스</LocalTitle>
          <LocalImg></LocalImg>
        </LocalContainer>
      </Local>
    </PartnersWrap>
  );
}

const PartnersWrap = styled.div`
  width: 100%;

  @media (min-width: 1220px) {
    /* width: 1152px; */
  }
`;

const Global = styled.div`
  height: 555px;
  padding: 80px 38px;

  @media (min-width: 1220px) {
    width: 1152px;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.tabletS} {
    height: 831px;
    padding: 88px 64px;
  }
`;

const GlobalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.tabletS} {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  text-align: left;
  width: 424px;

  @media ${(props) => props.theme.tabletS} {
    text-align: center;
  }
`;

const LeftTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: $textColor;
  letter-spacing: 0;
  padding-bottom: 35px;
  line-height: 45px;
`;

const Subtitle = styled.div`
  color: ${(props) => props.theme.noChangeColor};
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
`;

const Explain = styled.div`
  color: #596070;
  letter-spacing: -0.03em;
  margin-top: 10px;
  line-height: 25px;
`;

const Right = styled.div`
  @media ${(props) => props.theme.tabletS} {
    margin-top: 30px;
  }
`;

const GlobalImg = styled.div`
  background: url("https://resources.gdac.com/imgs/security-logos.png")
    no-repeat 0 0;
  height: 355px;
  width: 456px;
  background-size: contain;

  @media ${(props) => props.theme.tabletS} {
    width: 410px;
    height: 320px;
  }
`;

const Local = styled.div`
  height: 545px;
  padding: 80px 38px;
  background-color: white;

  @media ${(props) => props.theme.tabletS} {
    height: 387px;
    padding: 60px 38px;
  }

  @media ${(props) => props.theme.mobile} {
    height: 363px;
  }
`;

const LocalContainer = styled.div`
  @media (min-width: 1220px) {
    width: 1152px;
    margin: 0 auto;
  }
`;

const LocalTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.noChangeColor};

  @media ${(props) => props.theme.tabletS} {
    text-align: center;
  }
`;

const LocalImg = styled.div`
  background: url("https://resources.gdac.com/imgs/partners-logo.png") no-repeat
    0 0;
  background-size: contain;
  width: 100%;
  height: 300px;
  margin-top: 40px;
`;

export default Partners;
