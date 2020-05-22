// action의 type 정의

// 회원가입, 로그인
export const REGISTER = "REGISTER";
export const CHECK_EMAIL = "CHECK_EMAIL";
export const CHECK_PASSWORD = "CHECK_PASSWORD";
export const CHECK_DOUBLE_PASSWORD = "CHECK_DOUBLE_PASSWORD";
export const LOGIN_EMAIL = "LOGIN_EMAIL";
export const LOGIN_PASSWORD = "LOGIN_PASSWORD";

// Auth 단계
export const AUTH_LEVEL = "AUTH_LEVEL";
export const AUTH_GRADE = "AUTH_GRADE";
export const AUTH_PHONE = "AUTH_PHONE";
export const AUTH_ACCOUNT = "AUTH_ACCOUNT";
export const NEXT_AUTH_LEVEL = "NEXT_AUTH_LEVEL";
export const NEXT_AUTH_GRADE = "NEXT_AUTH_GRADE";
export const NEXT_AUTH_DESCRIPTION = "NEXT_AUTH_DESCRIPTION";

export const NEXT_AUTH = "NEXT_AUTH";

// Auth_Account (계좌 점유 인증)
export const AUTH_USER_NAME = "AUTH_USER_NAME";
export const AUTH_USER_BANK = "AUTH_USER_BANK";
export const AUTH_USER_ACCOUNT = "AUTH_USER_ACCOUNT";

// Exchange
export const CHANGE_COIN = "CHANGE_COIN";
export const BUY = "BUY";
export const SELL = "SELL";

// Deposit, Withdraw
export const CHANGE_MYASSET = "CHANGE_MYASSET";
