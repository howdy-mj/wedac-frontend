import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";
import Nav from "../../component/Nav/Nav";
import OnlyLogin from "../Login/OnlyLogin";
import DashBoard from "./Dashboard/Dashboard";
import Vertification from "./Verification/Verification";
import Footer from "../../component/Footer/Footer";

function MySetting(props) {
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState("dashboard");
  const [type, setType] = useState("");

  // MySetting
  const changeTab = (category) => {
    setSelected(category);
    props.history.push(`/settings/${category}`);
  };

  // Vertification의 휴대전화인증, 계좌점유인증
  const vertifyPhone = (type) => {
    setType(type);
    window.scrollTo(0, 0);
    props.history.push(`/settings/${props.match.params.category}/${type}`);
  };

  const vertifyAccount = (type) => {
    setType(type);
    window.scrollTo(0, 0);
    props.history.push(`/settings/${props.match.params.category}/${type}`);
  };

  const tabs = {
    dashboard: <DashBoard />,
    vertification: (
      <Vertification
        type={type}
        vertifyPhone={vertifyPhone}
        vertifyAccount={vertifyAccount}
      />
    ),
  };

  return (
    <>
      <Nav />
      {1 === 0 ? (
        <OnlyLogin />
      ) : (
        <MySettingWrap>
          <SettingHeader>
            <InnerWrap>
              <HeaderDiv
                isActive={selected === "dashboard"}
                onClick={() => {
                  changeTab("dashboard");
                }}
              >
                대시보드
              </HeaderDiv>
              <HeaderDiv
                isActive={selected === "vertification"}
                onClick={() => {
                  changeTab("vertification");
                }}
              >
                인증센터
              </HeaderDiv>
              <HeaderDiv>보안강화</HeaderDiv>
              <HeaderDiv>알림설정</HeaderDiv>
              <HeaderDiv>API관리</HeaderDiv>
            </InnerWrap>
          </SettingHeader>
          {/* 대시보드, 인증센터, 보안강화, 알림설정, API관리 tabs*/}
          {tabs[selected]}
        </MySettingWrap>
      )}
      <Footer />
    </>
  );
}

const MySettingWrap = styled.div``;

const SettingHeader = styled.div`
  padding: 0 36px;
  height: 71px;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(2, 37, 83, 0.08);
`;

const InnerWrap = styled.div`
  display: flex;
  max-width: 1000px;
  padding-top: 32px;
  margin: auto;
`;

const HeaderDiv = styled.div`
  cursor: pointer;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 700;
  color: #919dae;
  line-height: 24px;

  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.subColor};
      border-bottom: 1px solid ${(props) => props.theme.subColor};
    `}
`;

export default withRouter(MySetting);
