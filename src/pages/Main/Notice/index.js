import React from "react";
import styled, { css } from "styled-components";

function Notice() {
  return (
    <NoticeWrap>
      <Oneline>
        <Mark>공지</Mark>
        <Text>암호화폐 거래시 주의사항</Text>
      </Oneline>
      <ThreeContainer>
        <ContainerWrap>
          <ContainerDiv left>
            <Subtitle>API 서비스</Subtitle>
            <Content>
              <ContentP>오픈 API서비스로</ContentP>
              <ContentP>더 빠르고 스마트하게 거래!</ContentP>
            </Content>
          </ContainerDiv>
          <ContainerDiv right>
            <ContentImg
              src="https://resources.gdac.com/imgs/newsSlider/marketingbanner_gdac_logo.png"
              alt="logo"
            />
          </ContainerDiv>
        </ContainerWrap>
        <ContainerWrap middle>
          <ContainerDiv left>
            <Subtitle>그로우 서비스</Subtitle>
            <Content>
              <ContentP>그로우 커스터디 자산</ContentP>
              <ContentP>300억원 돌파!</ContentP>
            </Content>
          </ContainerDiv>
          <ContainerDiv right>
            <ContentImg
              src="https://resources.gdac.com/imgs/newsSlider/grow-small-banner.png"
              alt="logo"
            />
          </ContainerDiv>
        </ContainerWrap>
        <ContainerWrap>
          <ContainerDiv left>
            <Subtitle>그로우 서비스</Subtitle>
            <Content>
              <ContentP>루나 그로우 소개</ContentP>
              <ContentP>바로가기</ContentP>
            </Content>
          </ContainerDiv>
          <ContainerDiv right>
            <ContentImg
              src="https://resources.gdac.com/imgs/newsSlider/grow-small-banner.png"
              alt="logo"
            />
          </ContainerDiv>
        </ContainerWrap>
      </ThreeContainer>
    </NoticeWrap>
  );
}

const NoticeWrap = styled.div`
  position: relative;

  @media ${(props) => props.theme.mobile} {
    height: 470px;
  }
`;

const Oneline = styled.div`
  height: 48px;
  background-color: #ebeef6;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mark = styled.div`
  height: 22px;
  width: 33px;
  background-color: rgb(21, 170, 243);
  color: white;
  border-radius: 2px;
  text-align: center;
  padding-top: 3px;
  margin-right: 10px;
`;

const Text = styled.div`
  color: ${(props) => props.theme.noChangeColor};
`;

const ThreeContainer = styled.div`
  padding: 32px 32px;
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    padding: 24px 24px;
    align-items: center;
  }
`;

const ContainerWrap = styled.div`
  height: 150px;
  width: 364px;
  background-color: ${(props) => props.theme.gdacColor};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 24px 24px;

  ${(props) =>
    props.middle &&
    css`
      margin: 0 30px;
    `}
  
  @media ${(props) => props.theme.mobile} {
    height: 138px;
    width: 552px;

    ${(props) =>
      props.middle &&
      css`
        margin: 4px 0;
      `}
  }
`;

const ContainerDiv = styled.div`
  display: inline;

  ${(props) =>
    props.left &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `}
`;

const Subtitle = styled.div`
  font-size: 12px;
`;

const Content = styled.div`
  margin-top: 20px;
  line-height: 35px;
`;

const ContentP = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const ContentImg = styled.img`
  height: 38px;
  width: 38px;
`;

export default Notice;
