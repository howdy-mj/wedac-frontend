import React, { useState } from "react";
import styled, { css } from "styled-components";
import levelCheck from "../../../images/levelCheck.PNG";
import deposit from "../../../images/deposit.PNG";
import withdraw from "../../../images/withdraw.PNG";

function Vertification() {
  const [done, setDone] = useState(false);
  const [logo, setLogo] = useState("y");
  const [possible, setPossible] = useState(false);
  const [complete, setComplete] = useState(false);

  return (
    <VertificationWrap>
      <VertificationContainer>
        <Title>인증센터</Title>
        <Top>
          <Left>
            <LevelContent>
              <FirstLine>
                <CheckLogo>
                  <img src={levelCheck} alt="" />
                </CheckLogo>
                <ShowLevel>
                  <div>Level 5</div>신원 인증
                </ShowLevel>
              </FirstLine>
              <Detail>
                현재 회원님은 코인 및 원화 입출금이 가능합니다. 출금한도 개별
                승인을 원하는 경우 신원 인증을 진행해주시기 바랍니다.
              </Detail>
              <GoAuth>인증하기</GoAuth>
            </LevelContent>
          </Left>

          <Right>
            <CurrentAuthority>
              <SmallTitle>현 인증레벨 권한</SmallTitle>
              <EachContainer>
                <ConLeft>
                  <AuthorityImg src={deposit} alt="" />
                  코인 입금
                </ConLeft>
                <ConRight isPossible={possible}>
                  {possible ? "가능" : "불가능"}
                </ConRight>
              </EachContainer>
              <EachContainer>
                <ConLeft>
                  <AuthorityImg src={withdraw} alt="" />
                  코인 출금
                </ConLeft>
                <ConRight isPossible={possible}>
                  {possible ? "가능" : "불가능"}
                </ConRight>
              </EachContainer>
              <EachContainer>
                <ConLeft>
                  <AuthorityImg src={deposit} alt="" />
                  원화 입금
                </ConLeft>
                <ConRight isPossible={possible}>
                  {possible ? "가능" : "불가능"}
                </ConRight>
              </EachContainer>
              <EachContainer>
                <ConLeft>
                  <AuthorityImg src={withdraw} alt="" />
                  원화 출금
                </ConLeft>
                <ConRight isPossible={possible}>
                  {possible ? "가능" : "불가능"}
                </ConRight>
              </EachContainer>
              <MoreInfo>원화 및 코인 상세 출금 한도 보기</MoreInfo>
            </CurrentAuthority>
          </Right>
        </Top>
        <Bottom>
          <CurrentState>인증현황</CurrentState>
          <StageContainer>
            <EachLevel>
              <Line></Line>
              <Middle>
                <CheckBox isDone={true}>x</CheckBox>
                <div>
                  <Level>Level 1</Level>
                  <Description done>이메일 인증</Description>
                </div>
              </Middle>
              <UserInfo>abcd@gmail.com</UserInfo>
            </EachLevel>
          </StageContainer>

          <StageContainer>
            <EachLevel>
              <Line></Line>
              <Middle>
                <CheckBox>{logo}</CheckBox>
                <div>
                  <Level>Level 2</Level>
                  <Description>휴대전화번호 인증</Description>
                </div>
              </Middle>
              <UserInfo isComplete={complete}>
                {complete ? "01058****33" : "인증하기"}
              </UserInfo>
            </EachLevel>
          </StageContainer>

          <StageContainer>
            <EachLevel>
              <Line></Line>
              <Middle>
                <CheckBox>{logo}</CheckBox>
                <div>
                  <Level>Level 3</Level>
                  <Description>계좌 점유 인증</Description>
                </div>
              </Middle>
              <UserInfo undone>인증하기</UserInfo>
            </EachLevel>
          </StageContainer>

          <StageContainer>
            <EachLevel>
              <Line></Line>
              <Middle>
                <CheckBox>y</CheckBox>
                <div>
                  <Level>Level 4</Level>
                  <Description>카카오페이 인증</Description>
                </div>
              </Middle>
              <UserInfo undone>인증하기</UserInfo>
            </EachLevel>
          </StageContainer>

          <StageContainer>
            <EachLevel>
              <Middle>
                <CheckBox>y</CheckBox>
                <div>
                  <Level>Level 5</Level>
                  <Description>신원 인증</Description>
                </div>
              </Middle>
              <UserInfo undone>인증하기</UserInfo>
            </EachLevel>
          </StageContainer>
        </Bottom>
      </VertificationContainer>
    </VertificationWrap>
  );
}

const VertificationWrap = styled.div`
  max-width: 1000px;
  margin: 24px auto 120px auto;
`;

const VertificationContainer = styled.div`
  box-shadow: rgba(2, 37, 83, 0.08) 0px 2px 8px 0px;
  height: 920px;
`;

const Top = styled.div`
  padding: 32px 32px 18px;
  width: 100%;
  display: flex;
`;

const Left = styled.div`
  display: flex;
`;

const Title = styled.div`
  color: #022553;
  font-size: 24px;
  font-weight: 700;
  padding: 32px 32px 0 32px;
`;

const LevelContent = styled.div`
  max-width: 494px;
  border: 1px solid rgb(217, 220, 232);
  padding: 24px;
  background-color: #fbfcfe;
`;

const FirstLine = styled.div`
  display: flex;
`;

const CheckLogo = styled.div`
  padding-right: 10px;
`;

const ShowLevel = styled.div`
  line-height: 24px;
  padding-top: 2px;
  font-weight: bold;
  font-size: 18px;
  color: rgb(2, 37, 83);
  div {
    font-size: 12px;
    font-weight: 400;
    color: rgb(145, 157, 174);
  }
`;

const Detail = styled.div`
  min-height: 100px;
  padding: 36px 0px 24px;
  color: rgb(145, 157, 174);
  font-size: 14px;
  line-height: 1.6;
`;

const GoAuth = styled.div`
  color: white;
  background-color: ${(props) => props.theme.subColor};
  height: 50px;
  text-align: center;
  padding: 0 10px;
  font-size: 14px;
  line-height: 50px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease 0s;
    background-color: #00338d;
  }
`;

const Right = styled.div`
  padding-left: 60px;
`;

const Bottom = styled.div`
  padding: 8px 32px 0px;
  width: 550px;
  height: 400px;
`;

const CurrentAuthority = styled.div``;

const SmallTitle = styled.div`
  color: #022553;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const EachContainer = styled.div`
  font-size: 14px;
  color: #596070;
  line-height: 26px;
  display: flex;
  margin-top: 10px;
  line-height: 25px;
`;

const ConLeft = styled.div`
  display: flex;
  margin-right: 150px;
`;

const ConRight = styled.div`
  min-width: 77px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 12px;
  border-radius: 8px;
  color: ${(props) =>
    props.isPossible ? "rgb(50, 132, 119);" : "rgb(185, 70, 73)"};
  background: ${(props) =>
    props.isPossible ? "rgb(182, 241, 230);" : "rgb(255, 209, 210)"};
`;

const AuthorityImg = styled.img`
  margin-right: 5px;
  width: 30px;
  height: 30px;
`;

const MoreInfo = styled.div`
  color: rgb(0, 134, 236);
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 30px;
  text-align: right;
`;

const CurrentState = styled.div`
  line-height: 24px;
  padding-top: 2px;
  font-weight: bold;
  font-size: 18px;
  color: rgb(2, 37, 83);
  margin-bottom: 20px;
`;

const StageContainer = styled.div`
  padding: 20px 24px;
  background-color: #f7f8fa;
`;

const EachLevel = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const CheckBox = styled.p`
  font-family: "emoticon";
  font-size: 32px;
  margin-right: 10px;
  color: ${(props) => props.theme.subColor};
  line-height: 45px;
`;

const Line = styled.div`
  position: absolute;
  top: 38px;
  width: 1px;
  height: 53px;
  padding-left: 16px;
  border-right: 1px solid rgb(0, 134, 236);
  border-color: rgb(0, 134, 236);
`;

const Middle = styled.div`
  display: flex;
`;

const Level = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgb(145, 157, 174);
`;

const Description = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

const UserInfo = styled.div`
  width: 200px;
  height: 36px;
  font-size: 12px;
  color: #919dae;
  border: 1px solid rgb(217, 220, 232);
  text-align: center;
  line-height: 34px;

  ${(props) =>
    props.undone &&
    css`
      background-color: ${(props) => props.theme.subColor};
      color: white;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.gdacColor};
        transition: all 0.3s ease 0s;
      }
    `};
`;

export default Vertification;
