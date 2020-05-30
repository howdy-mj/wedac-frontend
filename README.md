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

- 코인 데이터들을 Backend API를 fetch하여 `map` 함수를 통해 화면에 구현
- 다른 Coin 클릭 시, `match.params`를 사용하여 해당 카테고리 이동경로 구현

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
