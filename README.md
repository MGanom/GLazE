# GLazE (Game Lazily & Easily)

## 소개
GLazE는 Game Lazily & Easily의 약자로, 각종 게임에 관련된 유용한  
정보들을 빠르고 쉽게 접근할 수 있게 하기 위해 만들어졌습니다.

## 진행기간
* 1차완성: 210802 ~ 210813
* 디자인 및 코드 정리: 210816 ~

## 진행상황
<details>
<summary>210802</summary>
  
* 웹페이지 제작을 위한 초기세팅
* Youtube API 연결
* Main 페이지 추가
</details>

<details>
<summary>210803</summary>
  
* Authentication을 위한 Firebase 연결  
* LostArk, LOL, POE, ETC 페이지 추가 + 각 페이지에 관련 Youtube 목록 연결  
* Header 업데이트, 배경이미지 추가  
</details>

<details>
<summary>210804</summary>

* Firebase를 통한 Authentication (구글, 깃허브, 게스트) 및 로그아웃 구현  
* History를 활용하여 라우터 간 이동 시에도 로그인 정보가 유지되도록 구현   
* 로그아웃을 하거나 비로그인 상태로 페이지 진입 시도 시 History를 활용하여  
Login화면으로 넘어가도록 구현  
* Header, body, title 업데이트
</details>
 
<details>
<summary>210805</summary>

* 프로필 만들기 기능 구현  
* Firebase를 활용하여 로그인 정보에 따라 프로필 정보가 유지되도록 하고,  
Guest로 로그인 시 프로필 기능 이용 불가하도록 구현  
* History를 활용하여 라우터 간 이동 시에도 프로필 정보가 유지되도록 구현  
* Cloudinary를 활용하여 프로필 이미지 업로드 기능 구현, 프로필 이미지 업로드 중 설정완료 버튼 비활성화  
* 프로필 수정 중 새 프로필 이미지를 업로드 하지 않을 시 이전에 업로드한 프로필로 유지되도록 구현  
</details>
  
<details>
<summary>210806</summary>

* 탭 별로 관련 Youtube 영상이 나열되도록 구현하고 css 적용   
* Youtube 항목 선택 시 Player가 오버레이되어 영상이 재생되도록 구현  
* 자주 사용하는 색상들을 variable화 하여 이를 import 하며 디자인 시작  
</details>

<details>
<summary>210809</summary>

* Header와 프로필 카드 코드 정리 및 작동 버그 수정  
* Header와 프로필 카드 디자인  
* data 폴더 안에 Sites.js를 만들어 각 카테고리와 관련된 사이트들에 대한 정보를 담고,  
map을 통해 각 페이지에 연결, 구현  
* Footer 디자인  
</details>

<details>
<summary>210810</summary>

* 각 페이지에서 사이트를 북마크에 추가하면 Firebase에 저장되도록 구현  
* 저장된 북마크를 Main에서 확인하고 클릭하여 링크로 넘어가거나 삭제할 수 있도록 구현  
* 몇 개의 useEffect에 dependency를 추가하여 불필요한 render가 발생하지 않도록 수정
</details>

<details>
<summary>210811</summary>

* 코드 효율성 개편, Main 내용 추가  
* NeoDGM 폰트 추가, Main 디자인, 페이지 전체적으로 색감 수정 및 디자인  
</details>

<details>
<summary>210812</summary>

* 불필요한 코드 정리  
* 모든 페이지 디자인 개편  
* CSS의 폰트 및 여러 부분에 대해 px을 em 혹은 rem으로 수정 
</details>

<details>
<summary>210813</summary>

* Guest로 로그인 시 북마크 기능 이용 불가하도록 구현  
* Guest로 로그인 시 Logout 버튼이 아닌 login 버튼이 나오도록 수정  
* Title을 Info Portal에서 GLazE로 변경  
* Vercel을 통해 사이트 배포 완료  
* 기타 CSS  
</details>

<details>
<summary>210816~210820</summary>

* 210816
  * px단위로 작성된 css 대부분을 em으로 수정  
  * 코드 부분 정리
* 210817
  * media query를 활용하여 화면 크기가 작아질 시 정렬 방식 변경  
  * 기타 CSS
* 210818
  * min-width를 제거하고 작은 화면 크기에도 맞게 반응형 웹 업데이트
  * 기타 CSS
* 210819
  * media query breakpoint를 새로 설정
  * 기타 CSS
* 210820
  * 반응형 CSS 추가 적용
  * Header, sitelist css 버그 수정
  * 기타 CSS
</details>
