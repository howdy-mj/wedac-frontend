import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import twitter from "../../images/sns-b-twitter.png";

function HomeFooter() {
  const [hasColor, setHasColor] = useState(false);
  const isHover = () => {
    setHasColor(true);
  };
  const notHover = () => {
    setHasColor(false);
  };

  return (
    <HomeFooterWrap>
      <Container>
        <First>
          <SNS>
            <Logo sns>p</Logo>
            <Logo sns>I</Logo>
            <Logo sns>2</Logo>
            <Img sns src={twitter} alt="twitter" />
            <Logo sns>|</Logo>
          </SNS>
        </First>
        <Second>
          <div>
            <Address>
              <p>주식회사 피어테크 (GDAC) | 대표 한승환</p>
              <p>서울특별시 강남구 역삼동 강남대로 376 강남8258빌딩 13F</p>
              <p>사업자등록번호 549-88-00819 | 팩스번호 02-554-6444</p>
            </Address>
            <Contact>
              <div>
                <P contact>GDAC 상장 안내</P>
                <Span>상장 절차 | 상장 문의</Span>
              </div>
              <div>
                <P contact>마케팅/제휴</P>
                <Span>biz@gdac.com</Span>
              </div>
              <div>
                <P contact>제안/건의/버그</P>
                <Span>contact@gdac.com</Span>
              </div>
            </Contact>
          </div>
          <Category>
            <Ul>
              <Li bold>Products</Li>
              <Li>지닥 솔로리그</Li>
              <Li>지닥 프로리그</Li>
              <Li>그로우 서비스</Li>
              <Li>GDAC API</Li>
            </Ul>
            <Ul>
              <Li bold>GDAC Token</Li>
              <Li>GT 소개</Li>
              <Li>GT 마이닝</Li>
              <Li>GT 백서</Li>
            </Ul>
            <Ul>
              <Li bold>Support Center</Li>
              <Li>공지사항</Li>
              <Li>고객센터</Li>
              <Li>1:1 상담톡</Li>
            </Ul>
            <Ul>
              <Li bold>Information</Li>
              <Li>회사소개</Li>
              <Li>이벤트</Li>
              <Li>이용약관</Li>
              <Li>개인정보 처리방침</Li>
              <Li>오픈 API 이용약관</Li>
              <Li>법인계정 전환안내</Li>
              <Li>수수료 안내</Li>
            </Ul>
          </Category>
        </Second>
        <Third>
          <a
            href="https://resources.gdac.com/docs/peertec-escrow-confirm.pdf"
            target="_blank"
          >
            <Escrow onMouseOver={isHover} onMouseLeave={notHover}>
              <Img
                hasColor={hasColor}
                escrow
                src="https://resources.gdac.com/imgs/escrow-color.png"
                alt="escrow"
              />
              <Div escrow>
                <P escrow>우체국 에스크로이체서비스에 가입된 거래소입니다.</P>
                <P escrow confirm>
                  서비스 가입사실확인
                </P>
              </Div>
            </Escrow>
          </a>
          <Corporate>
            <Img
              corporate
              src="https://resources.gdac.com/imgs/BitGo.png"
              alt="bitgo"
            />
            <Img
              corporate
              src="https://resources.gdac.com/imgs/kakaopay.png"
              alt="kakao"
            />
            <Img
              corporate
              komodo
              src="https://resources.gdac.com/imgs/comodo.png"
              alt="komodo"
            />
            <Img
              corporate
              src="https://resources.gdac.com/imgs/cloudbric.png"
              alt="cloudbric"
            />
          </Corporate>
          <Copyright>
            Copyright © 2019 Peertec Inc. All rights reserved.
          </Copyright>
        </Third>
      </Container>
      <Mobile>
        <MobileContainer>
          <MobileDiv>
            <MobileLogo>l</MobileLogo>
            <MobileP>마켓</MobileP>
          </MobileDiv>
          <Link to="/exchange">
            <MobileDiv>
              <MobileLogo>m</MobileLogo>
              <MobileP>거래소</MobileP>
            </MobileDiv>
          </Link>
          <Link to="/balance">
            <MobileDiv>
              <MobileLogo>k</MobileLogo>
              <MobileP>잔고</MobileP>
            </MobileDiv>
          </Link>
          <Link to="/wallet">
            <MobileDiv>
              <MobileLogo>4</MobileLogo>
              <MobileP>지갑</MobileP>
            </MobileDiv>
          </Link>
          <Link to="/history">
            <MobileDiv>
              <MobileLogo>3</MobileLogo>
              <MobileP>거래내역</MobileP>
            </MobileDiv>
          </Link>
        </MobileContainer>
      </Mobile>
    </HomeFooterWrap>
  );
}

const HomeFooterWrap = styled.footer`
  position: relative;
  background-color: ${(props) => props.theme.gdacColor};
  width: 100%;
  height: 529px;
  padding: 0 32px;
  padding-top: 70px;

  @media ${(props) => props.theme.tabletM} {
    height: 808px;
  }

  @media ${(props) => props.theme.mobile} {
    height: 46px;
    padding: 0 0;
  }
`;

const Container = styled.div`
  @media ${(props) => props.theme.mobile} {
    display: none;
  }

  @media ${(props) => props.theme.desktop} {
    width: 1152px;
    margin: 0 auto;
  }
`;

const First = styled.div`
  margin-bottom: 40px;
  display: flex;

  @media (min-width: 1221px) {
    justify-content: space-between;
  }
`;

const SNS = styled.div`
  position: absolute;
  right: 20px;
  height: 40px;

  @media (min-width: 1221px) {
    position: static;
  }
`;

const Logo = styled.span`
  font-family: "emoticon";
  font-size: 20px;
  color: white;

  ${(props) =>
    props.sns &&
    css`
      margin-left: 15px;
      height: 20px;
      width: 20px;
    `};
`;

const Img = styled.img`
  ${(props) =>
    props.logo &&
    css`
      height: 40px;
      width: 130px;
    `}
  ${(props) =>
    props.sns &&
    css`
      margin-left: 15px;
      height: 20px;
      width: 20px;
    `}
  ${(props) =>
    props.escrow &&
    css`
      height: 60px;
      width: 60px;
      filter: grayscale(100%);
    `}
  ${(props) =>
    props.corporate &&
    css`
      height: 20px;
      width: 75px;
      margin-left: 20px;
    `}
  ${(props) =>
    props.komodo &&
    css`
      height: 30px;
      width: 50px;
    `}

  ${(props) =>
    props.hasColor &&
    css`
      filter: grayscale(0);
    `}
`;

const Second = styled.div`
  color: white;
  display: flex;
`;

const Address = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.03em;
  padding-bottom: 6px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const Contact = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.03em;
  margin-bottom: 40px;
  line-height: 20px;
`;

const P = styled.p`
  ${(props) =>
    props.contact &&
    css`
      display: inline-block;
      width: 110px;
      padding-bottom: 8px;
    `}

  ${(props) =>
    props.escrow &&
    css`
      font-size: 10px;
      color: #bec7d5;
      line-height: 1.4;
      text-align: left;
    `}
  ${(props) =>
    props.confirm &&
    css`
      background-color: #bec7d5;
      color: #0e3672;
      text-align: center;
      margin-top: 2px;
      font-family: "NotoSans";
    `}
`;

const Span = styled.span`
  color: ${(props) => props.theme.subColor};
  cursor: pointer;
`;

const Category = styled.div`
  display: flex;
  position: absolute;
  right: 40px;

  @media ${(props) => props.theme.tabletM} {
    top: 400px;
    left: -10px;
  }

  @media (min-width: 1221px) {
    position: static;
  }
`;

const Ul = styled.ul`
  width: 126px;
  margin-left: 40px;
`;

const Li = styled.li`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 28px;

  ${(props) =>
    props.bold &&
    css`
      font-size: 16px;
      font-weight: 700;
    `}
`;

const Third = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;

  @media ${(props) => props.theme.tabletM} {
    margin-top: 340px;
  }
`;

const Escrow = styled.div`
  height: 68px;
  width: 220px;
  display: flex;
  background-color: #0c2f64;
  border: 1px solid #0c2f64;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
  }
`;

const Div = styled.div`
  ${(props) =>
    props.escrow &&
    css`
      width: 145px;
      padding-left: 8px;
    `}

  @media (min-width: 1221px) {
    position: static;
  }
`;

const Corporate = styled.div`
  position: absolute;
  left: 450px;
  bottom: 20px;

  @media ${(props) => props.theme.tabletM} {
    display: none;
  }

  @media (min-width: 1221px) {
    position: static;
  }
`;

const Copyright = styled.div`
  position: absolute;
  right: 40px;
  bottom: 20px;
  font-size: 12px;
  color: hsla(0, 0%, 100%, 0.6);

  @media (min-width: 1221px) {
    position: static;
  }
`;

const Mobile = styled.nav`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    width: 100%;
    background-color: #00338d;
    z-index: 99999;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MobileDiv = styled.div`
  text-align: center;
  padding-top: 5px;
`;

const MobileLogo = styled.span`
  font-family: "emoticon";
  font-size: 18px;
  color: #929eb0;
`;

const MobileP = styled.p`
  color: hsla(0, 0%, 100%, 0.6);
  font-size: 10px;
`;

export default HomeFooter;
