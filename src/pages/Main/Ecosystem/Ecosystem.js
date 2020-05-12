import React from "react";
import styled, { css } from "styled-components";
import soloLeage from "../../../images/solo-league.png";
import teamLeage from "../../../images/team-league.png";
import mining from "../../../images/gt-mining.png";

function Ecosystem() {
  return (
    <EcosystemWrap>
      <EcosystemContainer>
        <Left>
          <Top>
            <TopTitle>GDAC ECOSYSTEM</TopTitle>
            <TopDescription>
              GDAC은 미래의 잠재력을 가진 프로젝트의 상장과 암호화폐 투자에 대한
              편의성을 제공합니다. 나아가 다양한 상품을 통해 사용자들에게 새로운
              투자의 기회를 만들어갑니다.
            </TopDescription>
          </Top>
          <Bottom>
            <ContainerWrap>
              <div>
                <Img src={soloLeage} alt="" />
              </div>
              <Content>
                <ContentTitle>솔로리그</ContentTitle>
                <ContentDescription>
                  개인 간의 거래 기여도 경쟁을 통해 보상을 획득하는 이벤트
                  플랫폼입니다.
                </ContentDescription>
              </Content>
            </ContainerWrap>
            <ContainerWrap>
              <div>
                <Img src={teamLeage} alt="" />
              </div>
              <Content>
                <ContentTitle>프로리그</ContentTitle>
                <ContentDescription>
                  개인 간의 거래 기여도 순위에 따라 보상을 획득하는 거래 활성
                  플랫폼입니다.
                </ContentDescription>
              </Content>
            </ContainerWrap>
            <ContainerWrap>
              <div>
                <Img src={mining} alt="" />
              </div>
              <Content>
                <ContentTitle>GT 마이닝</ContentTitle>
                <ContentDescription>
                  GT는 마이닝과 사용성의 순환을 통해 지속가능한 생태계를
                  구축하기 위한 중심 역할을 담당합니다.
                </ContentDescription>
              </Content>
            </ContainerWrap>
          </Bottom>
        </Left>
        <Right>
          <CardContainer>
            <Card one>
              <CardText>
                <CardTitle>누적 솔로리그 리워드</CardTitle>
                <CardReward>
                  <Span>403,035,518</Span>
                  <Span per>KRW</Span>
                </CardReward>
                <MoreInfo>
                  <MoreP>자세히보기</MoreP>
                </MoreInfo>
              </CardText>
              <CardImg one></CardImg>
            </Card>
            <Card two>
              <CardText>
                <CardTitle>누적 리그 리워드</CardTitle>
                <CardReward>
                  <Span>6,057,288,963</Span>
                  <Span per>KRW</Span>
                </CardReward>
              </CardText>
              <CardImg two></CardImg>
            </Card>
            <Card three>
              <CardText>
                <CardTitle>누적 GT 마이닝 리워드</CardTitle>
                <CardReward>
                  <Span>1,718,166,904</Span>
                  <Span per>GT</Span>
                </CardReward>
                <MoreInfo>
                  <MoreP>자세히보기</MoreP>
                </MoreInfo>
              </CardText>
              <CardImg three></CardImg>
            </Card>
          </CardContainer>
        </Right>
      </EcosystemContainer>
    </EcosystemWrap>
  );
}

const EcosystemWrap = styled.div`
  background-color: white;
  width: 100%;
  height: 912px;
  margin-top: 50px;

  @media ${(props) => props.theme.tabletS} {
    height: 1136px;
  }

  @media ${(props) => props.theme.mobile} {
    height: 1300px;
  }
`;

const EcosystemContainer = styled.div`
  padding: 128px 38px;
  display: flex;
  justify-content: space-between;
  /* width: 1152px;
  margin: 0 auto; */

  @media ${(props) => props.theme.tabletS} {
    padding: 0 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 0;
  }

  @media (min-width: 1220px) {
    width: 1152px;
    margin: 0 auto;
  }
`;

const Left = styled.div`
  width: 50%;

  @media ${(props) => props.theme.tabletS} {
    padding: 128px 38px 50px 38px;
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 24px 24px;
  }
`;

const Top = styled.div`
  letter-spacing: -0.3px;

  @media ${(props) => props.theme.tabletS} {
    width: 50%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const TopTitle = styled.div`
  color: ${(props) => props.theme.noChangeColor};
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  margin-bottom: 15px;
`;

const TopDescription = styled.div`
  color: #919dae;
  font-size: 18px;
  line-height: 27px;

  @media ${(props) => props.theme.mobile} {
    max-width: 410px;
  }
`;

const Bottom = styled.div`
  width: 390px;
  height: 403px;
  margin: 0 65px;

  @media ${(props) => props.theme.tabletS} {
    margin: auto;
  }
`;

const ContainerWrap = styled.div`
  display: flex;
  letter-spacing: -0.3px;
  margin-top: 50px;
  align-items: center;
`;

const Img = styled.img`
  height: 50px;
  width: 60px;
`;

const Content = styled.div`
  width: 282px;
  margin-left: 48px;
`;

const ContentTitle = styled.div`
  color: ${(props) => props.theme.noChangeColor};
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

const ContentDescription = styled.div`
  color: #919dae;
  font-size: 16px;
  line-height: 24px;
  margin-top: 15px;
`;

const Right = styled.div`
  @media ${(props) => props.theme.tabletS} {
    background-color: #f5f8ff;
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    height: 576px;
  }
`;

const CardContainer = styled.div`
  height: 656px;
  width: 460px;
  background-color: #f5f8ff;
  padding: 64px 0;

  @media ${(props) => props.theme.tabletS} {
    height: 288px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 0;
  }
`;

const Card = styled.div`
  height: 160px;
  width: 320px;
  margin: 0 auto;
  display: flex;

  ${(props) =>
    props.one &&
    css`
      background-color: #8e9bae;
    `}

  ${(props) =>
    props.two &&
    css`
      margin: 0 auto;
      margin-top: 24px;
      margin-bottom: 24px;
      background-color: #0048b6;
    `}

  ${(props) =>
    props.three &&
    css`
      background-color: #ffb02c;
    `}

  @media ${(props) => props.theme.tabletS} {
    width: 220px;
    margin: 0 0;

  ${(props) =>
    props.two &&
    css`
      margin-left: 20px;
      margin-right: 20px;
    `}
  }

  @media ${(props) => props.theme.mobile} {
    margin: 0 0;
    width: 100%;

    ${(props) =>
      props.two &&
      css`
        margin-top: 20px;
        margin-bottom: 20px;
      `}
  }
`;

const CardText = styled.div`
  z-index: 1000;
  color: white;
  padding-left: 20px;
  letter-spacing: -0.3px;
  position: absolute;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const CardTitle = styled.p`
  display: inline-block;
  padding-top: 24px;
  font-size: 14px;
  line-height: 1.57;
`;

const CardReward = styled.p`
  padding-top: 10px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;

const Span = styled.span`
  margin-right: 7px;

  ${(props) =>
    props.per &&
    css`
      font-size: 16px;
    `}
`;

const MoreInfo = styled.div`
  padding: 40px 22px 5px 28px;
  margin-left: 182px;
  border-bottom: 1px solid #fff;

  @media ${(props) => props.theme.tabletS} {
    margin-left: 76px;
  }

  @media ${(props) => props.theme.mobile} {
    position: absolute;
    right: 0;
  }
`;

const MoreP = styled.div`
  font-size: 14px;
  letter-spacing: -0.03em;
  padding-left: 10px;
`;

const CardImg = styled.div`
  margin-left: 160px;
  ${(props) =>
    props.one &&
    css`
      z-index: 12;
      background: url("https://resources.gdac.com/imgs/reward1.png") no-repeat 0
        0;
      height: 160px;
      width: 160px;
      border: 0;
    `}

  ${(props) =>
    props.two &&
    css`
      z-index: 1;
      background: url("https://resources.gdac.com/imgs/reward2.png") no-repeat 0
        0;
      height: 160px;
      width: 160px;
      border: 0;
    `}

  ${(props) =>
    props.three &&
    css`
      z-index: 1;
      background: url("https://resources.gdac.com/imgs/reward3.png") no-repeat 0
        0;
      height: 160px;
      width: 160px;
      border: 0;
    `}

  @media ${(props) => props.theme.tabletS} {
    margin-left: 60px;
  }

  @media ${(props) => props.theme.mobile} {
    margin: 0 0 0 auto;
  }
`;

export default Ecosystem;
