### 프로젝트 요약

- 소개: 암호화폐 거래소 [지닥](https://www.gdac.com/) 웹사이트 클론

- 기간: 2020.05.11 - 2020.05.22 (약 2주)

- 인원: 프론트엔드 2명([MJ Kim](https://github.com/howdy-mj), [Seunghyunkim1](https://github.com/Seunghyunkim1)), 백엔드 2명([soohyung0121](https://github.com/soohyung0121), [yenilee](https://github.com/yenilee))

- Backend-Repo: [wedac-backend](https://github.com/wecode-bootcamp-korea/wedac-backend)

---

### 데모

[![메인](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdZVv7S%2FbtqEng4H4Us%2FiOE4NXVkaLj7dpGY5Yod91%2Fimg.png)](https://youtu.be/LdF1LG_R4Uo)

데모영상 보러가기▲(이미지 클릭)

<div style="font-style: italic; font-size: 14px; ">

본 프로젝트는 2020.05.11 기준으로 작업되어 현재 화면과 다를 수 있습니다.

</div>

---

### 사용된 기술

- **Frontend**: JavaScript, React.js, Styled Component
- **Backend**: Python, Django, Selenium, BeautifulSoup4, MySQL
- **Deployment**: AWS EC2(예정)

---

### What I Did

**메인**:

- `json` 형태로 Mock data를 구현하여 메인배너 구현
- 5초마다 배너 자동 넘김 구현
- 우측 화살표 클릭 시, 배너 변경
- Backend API를 fetch하여 코인 데이터 불러오기(KRW, BTC, GT 마켓) 및 탭 전환
- `props`로 전일대비가 음수일 경우 파란색, 양수일 경우 빨간색, 0일 경우 남색으로 현재가 및 전일대비 텍스트 색상 구현
- 반응형 구현 (web, tablet, mobile)

**Nav/Footer**:

- Nav, Footer 레이아웃 구성
- 특정 페이지의 Nav 색상 변경
- 로그인 유무에 따른 Nav 텍스트 및 링크 변경
- 반응형 구현 (web, tablet, mobile)

**회원가입/로그인**:

- 아이디, 비밀번호, 비밀번호 중복확인 정규식으로 조건 체크
- 비밀번호 5가지 조건을 만족할 때마다, 해당 조건의 색상 및 아이콘 변경
- 필수 input이 다 입력되었을 때만 회원가입 버튼 활성화
- '이메일로 가입하기' 버튼 클릭 시 이메일 전송 구현(Backend), 이메일 url 클릭 시 다시 wedac으로 돌아오기
- 카카오톡 회원가입/로그인 구현
- 회원가입 및 로그인 state를 Redux로 관리
- 반응형 구현 (web, tablet, mobile)

**내 설정**:

- 로그인 할 때 사용한 email이 내 설정에 뜸
- 휴대폰 인증 구현(Backend)
- 계좌 점유 인증(임의로 만듦) 구현
- 인증 단계 모두 Redux로 관리
- 인증 할 때마다 다음 단계를 보여 주고, 인증한 내용으로 '내 설정'과 '지갑'의 값 변경

**잔고**:

- 로그인 했을 때만 화면 표시
- 잔고, 미체결 주문 tab 전환 구현
- Backend API를 fetch해와서 실시간 잔고 반영(거래소, 잔고, 지갑 페이지에)
- 반응형 구현 (web, tablet, mobile)

**지갑**:

- 로그인 했을 때만 화면 표시
- 입금, 출금, 지갑 내역 tab 전환 구현
- 입금, 출금 tab은 계좌 점유 인증을 했을 때만 표시
- 계좌 점유 인증 완료 후, 원화 입출금 가능
- redux로 state를 관리해서 입출금 시 Backend API fetch해서 실시간 원화 잔고 변동

**거래내역**:

- 로그인 했을 때만 화면 표시
- 체결내역, 입출금내역 tab 전환 구현
- 반응형 구현 (web, tablet, mobile)

---

### To do...

(2020.06.18 업데이트)

- 메인에 주의사항 모달창 띄우기
- 메인에 KRW/BTC/GT 마켓 우측에 searchBox 넣기
- tradingview 데이터 넣기
- 승현님이 만든 거래소 페이지 코드 이해하기, 혼자 다시 만들어보기
- 코드 리팩토링
