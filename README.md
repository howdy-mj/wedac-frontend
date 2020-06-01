### 프로젝트 요약

- 소개: 암호화폐 거래소 [지닥](https://www.gdac.com/) 웹사이트 클론

- 기간: 2020.05.11 - 2020.05.22 (약 2주)

- 인원: 프론트엔드 2명([MJ Kim](https://github.com/howdy-mj), [Seunghyunkim1](https://github.com/Seunghyunkim1)), 백엔드 2명([soohyung0121](https://github.com/soohyung0121), [yenilee](https://github.com/yenilee))

- Backend-Repo: [wedac-backend](https://github.com/wecode-bootcamp-korea/wedac-backend)

---

### 데모

[![메인](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdZVv7S%2FbtqEng4H4Us%2FiOE4NXVkaLj7dpGY5Yod91%2Fimg.png)](https://youtu.be/LdF1LG_R4Uo)

데모영상 보러가기▲(이미지 클릭)

---

### 사용된 기술

- **Frontend**: JavaScript, React.js, Styled Component
- **Backend**: Python, Django, Selenium, BeautifulSoup4, MySQL
- **Deployment**: AWS EC2(예정)

---

### 구현 기능

**메인**:

- `json` 형태로 Mock data를 구현하여 메인배너 구현
- 일정 시간이 지남에 따라 배너 자동 변경 (예정)
- 우측 화살표 클릭 시, 배너 변경
- Backend API를 fetch하여 코인 데이터 불러오기(KRW, BTC, GT 마켓)
- 반응형 웹사이트

**Nav/Footer**:

- Nav, Footer 레이아웃 구성
- 특정 페이지의 Nav 색상 변경
- 로그인 유무에 따른 Nav 텍스트 및 링크 변경

**거래소**:

- 코인 데이터들(KRW, BTC, GT 마켓)을 Backend API를 fetch요청, `map` 함수를 통해 MiddleRight컴포넌트에 구현
- 각 코인들의(KRW, BTC, GT 마켓)분류에 맞게 탭전환 기능 구현 (MiddleRight, SectionBottom)
- 각 코인들(KRW, BTC, GT 마켓) 클릭시 Link to 로 url 변경 구현
- 변경된 url에 따라 동일페이지 다른 컴포넌트(sectionLeft)에서 'match.params'로 API fetch요청, 'map'함수로 화면에 구현
- 구현된 sectionLeft API(코인 유동가격) 클릭시 최상단 컴포넌트로 props로 api전달 후 매수/매도 컴포넌트의 주문가격input에 props로 받아서 구현
- 매수 버튼 클릭시 fetch Post형식으로 백엔드에게 주문가격 전송/ console창에서만 기능확인
- tradingview 라이브러리 사용
- 반응형웹 구현 (web, tablet, mobile)

**회원가입/로그인**:

- 아이디, 비밀번호, 비밀번호 중복확인 정규식으로 조건 체크
- 필수 input이 다 입력되었을 때만 회원가입 버튼 활성화
- 카카오톡 회원가입/로그인 구현
- 이메일 인증 구현
- Redux로 state 관리

**내 설정**:

- 로그인 할 때 사용한 email이 내 설정에 뜸
- 휴대폰 인증 구현
- 계좌 점유 인증(임의로 만듦) 구현
- 인증 단계 모두 Redux로 관리
- 인증 할 때마다 다음 단계를 보여 줌

**잔고**:

- 로그인 했을 때만 화면 표시
- 계좌 점유 인증 완료 후, 입금/출금 가능
- Backend API를 fetch해와서 실시간 잔고 반영(거래소, 잔고, 지갑 페이지에)

**지갑**:

- 로그인 했을 때만 화면 표시

**거래내역**:

- 로그인 했을 때만 화면 표시
