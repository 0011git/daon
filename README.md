[![daon](https://github.com/user-attachments/assets/a3256e34-4344-4a52-b753-7ee4b3517bdb)](https://qodql.github.io/daon/)

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>   <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
## 🏕 다온펜션 리뉴얼 프로젝트
기존의 '다온펜션' 사이트를 리디자인 및 재구성한 리뉴얼 프로젝트입니다.

![daon_main](https://github.com/user-attachments/assets/5a9f5349-b190-457e-961a-282c00bf717b)


## 🔗 사이트 URL
- 기존 <http://www.daonpension.kr/>
- 리뉴얼 <https://qodql.github.io/daon/>
<!-- - [개인](https://0011git.github.io/daon/) -->



## 📑 개요
1. **주제**
   - '다온펜션' 사이트 리뉴얼
     
2. **목표**
   - 전반적으로 노후화된 기존 사이트를 리뉴얼해 사용자 경험을 개선하고 만족도를 높이는 것을 목표로 함
     
3. **개발 환경**
   - HTML, SCSS, Vanilla Javascript
     
3. **기간 및 인원**
   - 2024.06.19 ~ 2024.09.12 (86일), 5인


     
## 🙌 담당 직무

| 이름   | GitHub                               | 직무           | 해당 |
|:------:|:-----------------------------------:|:--------------:|:----:|
| 이한주 | [Lee-Hanjoo](https://github.com/Lee-Hanjoo) | 팀장, 디자인   |      |
| **성주영** | **[0011git](https://github.com/0011git)** | **리소스 수집** | ✔    |
| 윤경빈 | [qodql](https://github.com/qodql)   | 배포           |      |
| 이홍영 | [Infouse](https://github.com/Infouse) | 개발           |      |
| 허다영 | [Pon119](https://github.com/Pon119) | 기획           |      |

  

## 💡 새로 추가된 주요 기능들
1. **메인 페이지 예약 퀵메뉴**
   - 날짜, 인원 등 세부항목 선택 가능한 예약 퀵메뉴를 메인에 추가하여 예약 기능에 빠르게 접근할 수 있도록 지원

2. **회원가입 및 로그인**
   - sns 로그인 (카카오, 네이버, 구글) 지원
   - 이메일, 비밀번호 등의 입력값 유효성 검사
   - 회원가입 완료와 동시에 로그인이 이루어지도록 함

3. **ChannelIO(채널톡) 챗봇 실시간 상담 서비스**
   - [채널톡](https://developers.channel.io/reference/welcome-to-channel-kr) 사용
   - 채널봇 구동에 필요한 자바스크립트 추가
   - 챗봇의 홈과 대화방을 사이트 주제에 알맞은 내용으로 커스텀, 운영 시간 설정

4. **OpenWeather API 날씨**
    - [OpenWeather API](https://openweathermap.org/) 사용
    - 펜션의 위도 및 경도값으로 실시간 날씨 정보를 불러와 우측 하단 퀵메뉴에 노출

5. **카카오맵 API 지도**
    - [카카오맵 API](https://apis.map.kakao.com/web/) 사용
    - 메인과 about-오시는 길 페이지에서 사용

6. **반응형 웹**   
    - 모바일 스몰(~479px), 모바일 라지(480\~767px) 태블릿(768\~1279px), PC(1280px\~) 해상도 지원

7. **예약 달력 기능**
    - [Tui Datepicker](https://ui.toast.com/tui-date-picker) 라이브러리 사용
    - cookie와 localstorage에 데이터를 저장한 후 다른 페이지에서도 불러올 수 있게 작업



## 📚 참고 URL
- 기획 및 화면 설계 : 
[daon Figma](https://www.figma.com/design/1zlcRdL0iDs2TWlgb5Thoq/240618_%EB%8B%A4%EC%98%A8%ED%8E%9C%EC%85%98-(Copy)?node-id=0-1&node-type=canvas&t=QkvAdj1lJY9kWkMd-0)
- 1차 계획 ppt :
[daon Canva](https://www.canva.com/design/DAGIplQ9SSA/yVOa3ghyW9enxSPvzQCcVw/edit?utm_content=DAGIplQ9SSA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- 발표 ppt : 
[daon Canva](https://www.canva.com/design/DAGPld1e67I/bYGbjtRsdfuDOY-Lullv-w/view?utm_content=DAGPld1e67I&utm_campaign=designshare&utm_medium=link&utm_source=editor)


<!--## 📱 스크린샷 : 개인거 말고 팀꺼에 넣기 -->

---
## 🙋‍♀️ 담당 개발 상세 : 성주영
- **담당 직무** :
  리소스 수집
  
- **담당 페이지** :
  [주변 소개](https://0011git.github.io/daon/sub4_around_spot.html), [로그인](https://0011git.github.io/daon/login.html), [회원가입](https://0011git.github.io/daon/join.html)

- **담당 주요 기능** :  
    - 인터페이스 기능 :
         - 주변 소개 페이지에서 Intersection Observer 사용, 스크롤 시 컨텐츠가 동적으로 나타나도록 구현
           
    - 시스템 기능 :
         - 주변 소개 페이지의 데이터 수집 및 json화
         - 카카오, 네이버, 구글 sns 회원가입
         - 로그인 및 회원가입 시 입력값 유효성 검사



## 🔍 주변 소개 페이지
![daon_around_spot](https://github.com/user-attachments/assets/64228a68-67c4-4fe8-9e99-c3b2079385b1)

1. **데이터 수집**

   - 데이터(json) 구조: 총 6개의 관광지. 각각의 관광지를 하나의 오브젝트로, 오브젝트를 모아서 한 개의 배열```sub4_cards```로 구성함
   - 데이터 종류: 값이 변경되는 것만 수집. 오브젝트마다 동일한 아이콘 등은 수집하지 않음
   - 텍스트 데이터의 데이터 형식 일관성 유지를 위해 ```<br>```태그가 있는 경우 \n로 저장, 렌더링 시 다시 태그로 치환함

      ```json
      "sub4_cards":[
            {
              "name":"남이섬",
              "eng":"Nami Island",
              "link": "https://www.namisum.com/",
              "img": [
                  {"src": "./img/img_sub4_nami_01.jpg",
                   "alt": "남이섬 한옥 처마 밑 우산"},
                  {"src": "./img/img_sub4_nami_02.jpg",
                   "alt": "남이섬 메타세쿼이아길"}
                  ],
              "tshort": ["10분", "강원 춘천시 남산면 남이섬길 1", "031-580-8114"],
              "tlong": "유명 관광지인 남이섬은 배를 타고 들어가는 북한강 위의 반달 모양 섬이다.\n남이섬에 입장하면 나무들이 만들어 준 천국이라 해도 과언이 아닐 만큼 아름다운 숲길이 섬 전체를 가득 메우고 있다. 섬 가장자리로 여러 개의 강변 산책길(자전거도로), 수십년 이상 된 나무숲 길이 다수 있으며 푸른 잔디와 축구장, 미니 동물원, 수상레저 등 다양한 볼거리와 즐길거리가 있다. 이 외에도 다양한 전시와 문화행사, 콘서트를 꾸준히 개최하고 있다."
              },
      {}, {}, {}, {}, {}]
      ```

2. **렌더링**

   - 유지보수의 편리함을 위해 json값이 추가/변경/삭제되어도 코드 변경이 없도록 구현
     
       - 고정된 마크업 구조에서 데이터 값만 변경시키는 방식의 innerText대신, 데이터와 태그를 함께 변경시킬 수 있는 innerHTML사용
       - json 배열 데이터의 각각의 오브젝트를 html로 누적해서 렌더링
       - \n → ```<br>``` 태그로 치환
         
      ```js
       // js
         const elContents = document.querySelector('.around_spot .contents');
           data.sub4_cards.forEach((card) => {
               //tlong의 엔터(\n) -> <br> 태그로 바꾸기
               let tlongHTML = card.tlong.replace('\n', '<br>');
               //html 넣기(유지보수(ex데이터추가)를 위해서 innerHTML로 넣는게 더 효율적)
               elContents.innerHTML += `<article class="sub4_card">...</article>`;
           })
      ```

3. **스크롤 인터렉션**

   - IntersectionObserver 사용
   - 스크롤 시 자연스럽게(threshold:0.05) 오브젝트가 하나씩, 아래에서 위로 올라오면서(y축:5%->0%) 보이도록(opacity:0->1) 적용
      ```js
      // js
       const elCard = document.querySelectorAll('.sub4_card');
              const interactive = function(entries){
                  entries.forEach((article) => {
                      if(article.isIntersecting == true){
                          article.target.classList.add('active');
                          intersection.unobserve(article.target);
                      }
                  })
              }
              const option = {threshold: 0.05};
              const intersection = new IntersectionObserver(interactive, option);
              for(let i=0; i<elCard.length; i++){
                  intersection.observe(elCard[i]);
              }
      ```
      
      ```css
      // scss
      .sub4_card {
          opacity: 0;
          transition: 1.2s;
          transform: translateY(5%);
          &.active{
              opacity: 1;
              transform: translateX(0%);
          }
      ```



## 🔑 로그인 페이지
<!-- 이미지 or gif -->
1. **sns 회원가입 및 로그인**

   (1) 카카오
<!-- 이미지 or gif -->


   (2) 네이버
<!-- 이미지 or gif -->



   (3) 구글
<!-- 이미지 or gif -->



2. 자체 로그인
   - DB가 없어 구현 불가
   - 회원가입 페이지와 동일한 유효성 검사 진행



## 🔐 회원가입 페이지
<!-- 이미지 or gif -->
1. **유효성 검사**
   
  : 검사 시점 blur, *조건에 맞지 않는 경우* 해당하는 경고 메시지를 인풋박스 하단에 표시


   (1) **이메일**
      - 아이디 + @ + 도메인 부분으로 구분 (ex. example@daon.com)
        
          - 아이디(example) : 영문 대소문자, 숫자, ._-%+- 의 특문 입력 가능
          - @ 필수
          - 도메인 앞(daon): 영문 대소문자, 숫자, .-의 특문 입력 가능
          - . 필수
          - 도메인 뒤(com): 2~6자, 영문 대소문자 입력 가능
      ```js
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      ```

   (2) **비밀번호**
      - 아이디 + @ + 도메인 부분으로 구분 (ex. example@daon.com)
        
          - 아이디(example) : 영문 대소문자, 숫자, ._-%+- 의 특문 입력 가능
          - @ 필수
          - 도메인 앞(daon): 영문 대소문자, 숫자, .-의 특문 입력 가능
      ```js
      const pwRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,15}$/;
      ```

   (3) **비밀번호 확인**
      - 비밀번호와 동일


   (4) **이름**

   (5) **휴대폰 번호**
      - 010|011|
      - 


2. **기타**

   (1) **x버튼, 비밀번호 보이기 버튼**
      - 입력값이 존재할 때 활성화
      - x버튼 클릭 시 입력값 삭제
      - 눈모양 버튼 클릭 시 비밀번호 표시/가리기
        
   (2) **팝업**
      - 로고 클릭 시 메인으로 이동하는데, 가입 중도 이탈을 막기 위해 팝업을 띄움



## ✅ 회원가입 완료 페이지
<!-- 이미지 or gif -->
1. **이름 표기**
   - 이전 페이지에서 쿠키에 저장한 회원정보에서 이름 데이터를 가져와 표시

2. **로그인 상태로 전환**
   - 가입 완료 시 가상의 액세스 토큰 발급, 세션의 login = true로 변경됨
   - 이후 로그아웃 이전까지 토큰값 유지



## 💥 트러블 슈팅
1. **로그인 플로우**
<!-- 이미지 or gif -->


   
