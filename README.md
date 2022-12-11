## 프로젝트 요약

```
netflix페이지를 클론한 홈페이지입니다. the moiveDB API키를 이용해 영화 정보를 불러옵니다. 
메인페이지에서 영화를 검색할 수 있고, 상세보기를 조회할 수 있습니다.
```

---

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
    <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black"/>   

 
</div>

---

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

### 배포 링크

[배포링크 바로가기](https://cute-lily-b20b68.netlify.app/)
<br/>

## 프로젝트 설명

<details>
<summary>  📂 디렉토리 구조</summary>
<div markdown="1">

```

🗂 src
┣ 📁 apis
    ┣ requests.js  
    ┗ axios.js
 ┣ 📁 components
 	┗  📁MovieModal
    	┗ index.js
    ┣ Banner.js
    ┣ Footer.js
    ┣ Row.js
    ┗ Nav.js
 ┣ 📂 pages
   ┣ DetailPage
   ┣ MainPage
   ┗ SearchPage
 ┣ 📂 hooks
   ┗ useDebounce.js
   ┗ useOnClickOutside.js
 ┣ App.js
 ┣ index.js
 
```

</div>
</details>

<details>
<summary>🗔 기능설명</summary>
<div markdown="1">

```
-메인 페이지
실제 넷플릭스처럼 헤더에 배너 + 검색어를 입력할 수 있는 창이 있고, 밑엔 카테고리별 영화 추천이 뜹니다.
axios 인스턴스를 생성하고, 카테고리별 통신을 해야하는 파라미터들을 객체로 묶어, 중복을 최소화 하였습니다.
+ 비디오 영상이 없는 영화정보도 있어, 비디오 영상이 있는 영화만 play버튼이 활성화됩니다.

- 검색어
useQuery로 검색어를 불러오고 useDebouce훅을 이용해, input의 변화를 1초마다 감지해 통신을 하게끔 구현했습니다.

- 상세페이지
movieId값을 받아와 useParams를 이용해 받아옵니다. id에 영화를 axios로 받아온 후, 영화에 필요한 이미지나 정보들을 보여줍니다.

- 모달 창
영화를 클릭시 모달 창으로 정보들이 뜨는데, 모달 창 외부를 클릭시 ref.current를 이용해 모달 창이 닫히게끔 구현했습니다.

- 예고편
Iframe 태그를 사용해, 크기 값을 조절하고, 유튜브의 링크를 활용하였습니다. 자동재생과 전체화면과 같은 옵션은 선택적으로 주었습니다.
```
</div>
</details>


---


### 사용한 라이브러리 및 API, CDN 등

- axios
- react-router-dom
- styled-components

---






