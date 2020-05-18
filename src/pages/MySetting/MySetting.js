import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Nav from "../../component/Nav/Nav";
import OnlyLogin from "../Login/OnlyLogin";
import DashBoard from "./Dashboard/Dashboard";
import Vertification from "./Verification/Verification";
import Footer from "../../component/Footer/Footer";

function MySetting(props) {
  // console.log("MySetting", props.match.params.category);
  let token = localStorage.getItem("token");
  const [selected, setSelected] = useState(0);

  const changeTab = (id) => {
    setSelected(id);
    props.history.push(`/settings/${id}`);
  };

  const tabs = {
    0: <DashBoard category={selected} />,
    1: <Vertification category={selected} />,
  };

  return (
    <>
      <Nav />
      {!token ? (
        <OnlyLogin />
      ) : (
        <MySettingWrap>
          <SettingHeader>
            <InnerWrap>
              <HeaderDiv
                isActive={selected === 0}
                onClick={() => {
                  changeTab(0);
                }}
              >
                대시보드
              </HeaderDiv>
              <HeaderDiv
                isActive={selected === 1}
                onClick={() => {
                  changeTab(1);
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

export default MySetting;
