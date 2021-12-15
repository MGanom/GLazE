# GLazE (Game Lazily & Easily)

## 소개
GLazE는 Game Lazily & Easily의 약자로, 각종 게임에 관련된 유용한  
정보들을 빠르고 쉽게 접근할 수 있게 하기 위해 만들어졌습니다.

## 진행기간
* 1차 완성: 210802 ~ 210813
* 디자인 및 코드 정리: 210816 ~ 210908
* 기능 추가: 211203 ~

## 사용 기술
HTML, CSS(SASS), JavaScript(Axios), React(CRA, React Router, Hooks)

## 사용 서비스
Firebase, Cloudinary, Youtube API, Postman, Vercel

## 페이지 구성
### 1. 로그인
* Firebase Authentication 기능을 활용하여 Google, Github, Guest 로그인을 구현하였다. 
* History API를 활용하여 로그인 정보와 게스트 여부 정보를 메인으로 넘기게 된다.
* 브라우저에 로그인 기록이 남아있다면 다시 로그인하지 않아도 자동으로 로그인 되어 메인으로 넘어가게 된다.
* 만약 로그인을 하지 않은 상태로 다른 페이지에 접근을 시도하게 되면 로그인 화면으로 돌아와지게 된다.

### 2. Header & Footer

* Header
   * Firebase Realtime Database 를 활용하여 구현한 로그인 정보에 따른 프로필 카드 기능이 있다.
   * 게스트 여부에 대한 정보를 로그인 시에 넘겨 받아 Guest는 프로필 카드 기능을 사용할 수 없도록 설정하였다.
   * 수정 버튼을 누르면 수정 창이 생기고, 완료 버튼을 누르거나 취소 버튼을 누르면 수정 창이 닫힌다.
   * 프로필 카드의 이미지는 Cloudinary에 저장되어 업로드 및 출력이 이루어 진다.
   * 로그아웃 버튼을 눌러 로그인 화면으로 돌아갈 수 있다.
   * 각 카테고리로 넘어갈 수 있는 버튼들이 Router로 연결 돼 있다.
* Footer
   * 제작자의 Github로 넘어갈 수 있는 링크가 있다.
   * 개선사항 및 버그 제보를 할 수 있는 버튼이 있다. 유저 ID, 닉네임, 제보 사항이 Firebase에 저장되어 확인할 수 있다. 

### 3. 메인
* 프로젝트 사이트에 관한 설명과 즐겨찾기 기능이 있다.
* Firebase Realtime Database 를 활용하여 즐겨찾기 기능을 구현하였다.
* useEffect를 통해 즐겨찾기 리스트가 업데이트 되도록 설정해두었다.
* 직접 즐겨찾기 리스트에 추가하고 싶은 링크를 등록할 수 있다.
* Guest일 시 사용이 불가능하고 로그인 시에만 사용할 수 있다.

### 4. League of Legends, Lost Ark, Path of Exile 탭
* 관련 영상 보기
   * Async+Await과 Youtube API를 활용하여 해당 카테고리에 대해 최근 2일 간 가장 인기 있었던 영상들을 출력하도록 했다.
   * iframe으로 player를 삽입하여 영상을 클릭하면 바로 시청이 가능하다.
* 관련 정보 사이트
   * Site.js파일에 모든 정보가 담겨 있어 각 페이지마다 import 되어 항목들이 출력된다.
   * 해당 탭과 관련해 유용한 사이트들이 나열되는 곳으로 로그인 상태일 시 즐겨찾기 목록에 추가할 수 있는 버튼이 생긴다.
   * 로고를 클릭하면 해당 사이트가 새 탭에서 열린다.

### 5. Other 탭
* 관련 영상 보기
  * Async+Await과 Youtube API를 활용하여 게임이라는 카테고리에 대해 최근 2일 간 가장 인기 있었던 영상들을 출력하도록 했다.
  * 마찬가지로 iframe으로 player를 삽입하여 영상을 클릭하면 바로 시청이 가능하다.
* 관련 정보 사이트
  * 여러 게임에 관한 정보를 얻을 수 있는 사이트들이 등록 돼 있다.

### 6. 그 외 구현 사항
* 반응형 CSS를 적용하여 화면 크기에 따라 요소들의 배치와 크기가 변한다.
   * 프로필 카드와 수정 창이 가로 정렬에서 세로 정렬로 변한다.
   * '관련 영상 보기' 항목의 정렬 방식이 바둑판 형식에서 횡스크롤 형식으로 변한다.
   * '관련 정보 사이트' 항목의 정렬 방식이 바둑판 형식에서 횡스크롤 형식으로 변한다.
   * 요소들을 전부 %, rem, em으로 구성하여 media query를 통해 일괄적으로 사이즈 변경이 되도록 구현했다.
* Vercel로 배포 완료하였다.

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
<summary>210816~210823</summary>

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
* 210823
  * 불필요하게 렌더되는 코드 memo로 개선
  * 북마크를 지워도 새로고침 전까지 사라지지 않던 버그 수정
</details>

<details>
<summary>210824</summary>
  
* 메인페이지에 사용자가 직접 원하는 사이트를 즐겨찾기로 등록할 수 있는 기능 구현
* 즐겨찾기를 추가할 때 firebase에서 id값을 즐겨찾기 항목 갯수에 따라 부여하도록 개편하여
  중복 id를 피하고 다른 항목이 영향을 받지 않도록 수정
* Guest가 사용할 수 있는 기능 추가 제한

</details>

<details>
<summary>210826</summary>
  
* 즐겨찾기 목록 크기 조정, 링크 주소가 나오도록 구현
* 고정 수치를 제외한 모든 px 단위 rem으로 변경
* 여러 작동 시 발생하는 error와 warning 등 해결
* 기타 CSS
</details>

<details>
<summary>210827~210830</summary>

* 210827
  * Header 메뉴 크기 변경
  * 작은 화면에서 이용하기 더 편하게 최적화
* 210830
  * 터치화면 환경에서 북마크 표시가 제대로 작동하도록 수정
</details>

<details>
<summary>210908</summary>
  
* Guest로 로그인 시 북마크 기능이 사용가능하던 현상 수정
* 코드 부분 간결화
* Main의 즐겨찾기 기능 설명 내용 추가
</details>

<details>
<summary>211203</summary>
  
* 잘못된 접근 시 alert를 출력하고, 메인화면으로 돌아가도록 구현
* 프로필 이미지를 새 창에서 확인하는 기능 추가
* Guest로 로그인 시 즐겨찾기 사용 불가 하다는 문구 추가
</details>

<details>
<summary>211206</summary>
  
* Footer에 건의사항 및 버그 제보 버튼 추가 및 작업 중
* Modal Component 작업 중
</details>

<details>
<summary>211207</summary>
  
* Modal Component 작업 중
</details>

<details>
<summary>211208</summary>
  
* Modal Component 작업 완료
* 건의사항 및 버그 제보 기능 구현 중
</details>

<details>
<summary>211209</summary>
  
* 건의사항 및 버그 제보 기능 구현 완료
* 게스트로 로그인 시 제보 기능 사용 불가하도록 구현
* Main에 기능 관련하여 설명 추가
</details>

<details>
<summary>211213</summary>
  
* 유튜브 영상 재생 중 리스트에 hover 시 플레이어 크기가 바뀌던 버그 수정
* 로그인 페이지에 로그인 시 사용할 수 있는 추가 기능에 대한 설명 추가
* 기타 CSS
</details>

<details>
<summary>211214</summary>
  
* 건의사항 및 버그 제보 시 모달창이 현재 화면 기준으로 중앙에 뜨고, 스크롤이 불가능하도록 수정
* 기타 CSS
</details>

<details>
<summary>211215</summary>
  
* 방명록 기능 구현 중
</details>
