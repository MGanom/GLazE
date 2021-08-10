# About
정보를 얻기 위한 링크, 영상 등을 접할 수 있는 웹사이트

# 진행상황
210802:  
-- 웹페이지 제작을 위한 초기세팅  
-- Youtube API 연결  
-- Main 페이지 추가

210803:  
-- Authentication을 위한 Firebase 연결  
-- LostArk, LOL, POE, ETC 페이지 추가 + 각 페이지에 관련 Youtube 목록 연결  
-- Header 업데이트, 배경이미지 추가  

210804:  
-- Firebase를 통한 Authentication (구글, 깃허브, 게스트) 및 로그아웃 구현  
-- History를 활용하여 라우터 간 이동 시에도 로그인 정보가 유지되도록 구현   
-- 로그아웃을 하거나 비로그인 상태로 페이지 진입 시도 시 History를 활용하여  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login화면으로 넘어가도록 구현  
-- Header, body, title 업데이트  

210805:  
-- 프로필 만들기 기능 구현  
-- Firebase를 활용하여 로그인 정보에 따라 프로필 정보가 유지되도록 하고,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guest로 로그인 시 프로필 기능 이용 불가하도록 구현  
-- History를 활용하여 라우터 간 이동 시에도 프로필 정보가 유지되도록 구현  
-- Cloudinary를 활용하여 프로필 이미지 업로드 기능 구현, 프로필 이미지 업로드 중 설정완료 버튼 비활성화  
-- 프로필 수정 중 새 프로필 이미지를 업로드 하지 않을 시 이전에 업로드한 프로필로 유지되도록 구현  

210806:  
-- 탭 별로 관련 Youtube 영상이 나열되도록 구현하고 css 적용   
-- Youtube 항목 선택 시 Player가 오버레이되어 영상이 재생되도록 구현  
-- 자주 사용하는 색상들을 variable화 하여 이를 import 하며 디자인 시작  

210809:  
-- Header와 프로필 카드 코드 정리 및 작동 버그 수정  
-- Header와 프로필 카드 디자인  
-- data 폴더 안에 Sites.js를 만들어 각 카테고리와 관련된 사이트들에 대한 정보를 담고,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;map을 통해 각 페이지에 연결, 구현  
-- Footer 디자인  

210810:  
-- 각 페이지에서 사이트를 북마크에 추가하면 Firebase에 저장되도록 구현  
-- 저장된 북마크를 Main에서 확인하고 클릭하여 링크로 넘어가거나 삭제할 수 있도록 구현  
-- 몇 개의 useEffect에 dependency를 추가하여 불필요한 render가 발생하지 않도록 수정  
