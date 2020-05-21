import React from "react";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import Phone from "./Phone/Phone";
import Account from "./Account/Account";
import levelCheck from "../../../images/levelCheck.PNG";
import deposit from "../../../images/deposit.PNG";
import withdraw from "../../../images/withdraw.PNG";
import { changeAuthLevel } from "../../../store/actions";

function Vertification({
  email,
  phoneNum,
  vertifyPhone,
  vertifyAccount,
  match,
  nextLevel,
  nextGrade,
  description,
}) {
  let emailAuth = localStorage.getItem("emailAuth");
  let accountAuth = localStorage.getItem("accountAuth");
  const currentUrl = match.params.type;

  return (
    <>
      {currentUrl === undefined ? (
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
                      <div>Level {nextLevel}</div>
                      {nextGrade}
                    </ShowLevel>
                  </FirstLine>
                  <Detail>{description}</Detail>
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
                    <ConRight isPossible={accountAuth}>
                      {accountAuth ? "가능" : "불가능"}
                    </ConRight>
                  </EachContainer>
                  <EachContainer>
                    <ConLeft>
                      <AuthorityImg src={withdraw} alt="" />
                      코인 출금
                    </ConLeft>
                    <ConRight isPossible={accountAuth}>
                      {accountAuth ? "가능" : "불가능"}
                    </ConRight>
                  </EachContainer>
                  <EachContainer>
                    <ConLeft>
                      <AuthorityImg src={deposit} alt="" />
                      원화 입금
                    </ConLeft>
                    <ConRight isPossible={accountAuth}>
                      {accountAuth ? "가능" : "불가능"}
                    </ConRight>
                  </EachContainer>
                  <EachContainer>
                    <ConLeft>
                      <AuthorityImg src={withdraw} alt="" />
                      원화 출금
                    </ConLeft>
                    <ConRight isPossible={accountAuth}>
                      {accountAuth ? "가능" : "불가능"}
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
                      <Description>이메일 인증</Description>
                    </div>
                  </Middle>
                  <UserInfo isComplete={true}>{email}</UserInfo>
                </EachLevel>
              </StageContainer>

              <StageContainer>
                <EachLevel>
                  <Line></Line>
                  <Middle>
                    <CheckBox>{emailAuth ? "x" : "y"}</CheckBox>
                    <div>
                      <Level>Level 2</Level>
                      <Description>휴대전화번호 인증</Description>
                    </div>
                  </Middle>
                  <UserInfo
                    isComplete={emailAuth ? true : false}
                    onClick={() => {
                      vertifyPhone("authPhone");
                    }}
                  >
                    {emailAuth ? phoneNum : "인증하기"}
                  </UserInfo>
                </EachLevel>
              </StageContainer>

              <StageContainer>
                <EachLevel>
                  <Line></Line>
                  <Middle>
                    <CheckBox>{accountAuth ? "x" : "y"}</CheckBox>
                    <div>
                      <Level>Level 3</Level>
                      <Description>계좌 점유 인증</Description>
                    </div>
                  </Middle>
                  <UserInfo
                    isComplete={accountAuth ? true : false}
                    onClick={() => {
                      vertifyAccount("authAccount");
                    }}
                  >
                    {accountAuth ? email : "인증하기"}
                  </UserInfo>
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
                  <UserInfo isComplete={false}>인증하기</UserInfo>
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
                  <UserInfo isComplete={false}>인증하기</UserInfo>
                </EachLevel>
              </StageContainer>
            </Bottom>
          </VertificationContainer>
        </VertificationWrap>
      ) : currentUrl === "authPhone" ? (
        <Phone />
      ) : (
        <Account />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    phoneNum: state.currentAuthStatus.phoneNum,
    nextLevel: state.nextAuthStatus.nextLevel,
    nextGrade: state.nextAuthStatus.nextGrade,
    description: state.nextAuthStatus.description,
  };
};

export default connect(mapStateToProps, { changeAuthLevel })(
  withRouter(Vertification)
);

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
  /* max-width: 494px; */
  width: 490px;
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
  border: 1px solid rgb(217, 220, 232);
  text-align: center;
  line-height: 34px;
  color: #919dae;

  ${(props) =>
    !props.isComplete &&
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
