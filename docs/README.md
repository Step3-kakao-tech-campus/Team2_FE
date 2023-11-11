# 우리들의 네컷 모음집 "네모" - 2조

<img width="403" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team2_BE/assets/98508955/0f52fc19-e558-430c-be8c-236c1050e833">
<br>

## 🖇 ️팀 내 배포 링크 모음

프론트 배포 인스턴스 주소 : [프론트 배포 인스턴스 주소](https://k5ebddfe59255a.user-app.krampoline.com/)

백 배포 인스턴스 주소 : [백 배포 인스턴스 주소](https://k255e0ec5dd13a.user-app.krampoline.com)

<br>

### 개발 기간

2023.09-11 (카카오 테크 캠퍼스 1기 - 3단계 진행 기간)

<br>

### 사용 기술 및 협업 스텍

#### 주요 기술 스택

1. **React (React.js)**

-   버전: 18.2.0
-   사용 이유: 사용자 인터페이스 구축을 위한 주요 JavaScript 라이브러리

2. **TypeScript**

-   버전: 4.9.5
-   사용 이유: JavaScript에 정적 타입을 추가하여 코드의 안정성과 유지보수성 향상

3. **React Query**

-   버전: 3.39.3
-   사용 이유: 서버 상태 관리를 위한 효율적인 데이터 페칭, 캐싱 및 업데이트

4. **Recoil**

-   버전: 0.7.7
-   사용 이유: React 애플리케이션을 위한 상태 관리 라이브러리

5. **React Router DOM**

-   버전: 6.16.0
-   사용 이유: React에서의 라우팅을 관리하기 위한 라이브러리

6. **Axios**

-   버전: 1.5.1
-   사용 이유: HTTP 요청을 보내기 위한 JavaScript 라이브러리

7. **Sass (SCSS)**

-   버전: 1.67.0
-   사용 이유: CSS 확장 언어, 복잡한 스타일링을 위한 효율적인 작성 가능

8. **Testing Library (React Testing Library)**

-   사용 이유: React 컴포넌트 테스트를 위한 라이브러리

9. **Mock Service Worker (MSW)**

-   버전: 1.3.1
-   사용 이유: 네트워크 요청을 모의(Mock)하기 위한 도구

10. **Yjs**

-   버전: 13.6.8
-   사용 이유: 공동 작업 및 실시간 편집 기능을 위한 데이터 동기화 라이브러리

11. **Prettier & ESLint**

-   Prettier 버전: 3.0.3
-   ESLint-config-prettier 버전: 9.0.0
-   사용 이유: 코드 포맷팅과 정적 분석을 통한 코드 품질 관리

12. **Concurrently & Cross-env**

-   Concurrently 버전: 8.2.0
-   Cross-env 버전: 7.0.3
-   사용 이유: 다양한 스크립트를 동시에 실행하고, 크로스 플랫폼 환경 변수 설정

13. **tldraw/tldraw**

-   버전: 1.29.2
-   사용 이유: 사용자 인터페이스에서 간단하고 가벼운 드로잉 기능을 제공하기 위한 라이브러리입니다.

14. **tldraw/core**

-   버전: 1.23.2
-   사용 이유: @tldraw/tldraw 라이브러리의 핵심 기능을 제공하는 라이브러리로, 드로잉 관련 핵심 기능 및 로직 커스터마이징을 담당합니다.
    <br>

## 🗂️ 최종 ERD

<<<< 최종 ERD 사진 >>>>

# 🔅 네모 프로젝트 설명

> 프로젝트 네모는 함께 찍은 네컷 사진들을 그룹 다이어리에 보관하고, 동시에 편집이 가능한 **공유형 다이어리 꾸미기 서비스**입니다.
> (\* 물론 다른 사진들도 가능합니다 😊)

<br>
<br>

## 프로젝트 제안 배경

요즘은 소유 경제가 아닌 경험 경제라고 합니다. 그만큼 어떤 경험을 했는지가 중요하다고 합니다.
**소중한 경험을 다같이 공유하고 꾸밀 수 있다면 얼마나 좋을까?** 에서 저희의 프로젝트는 시작되었습니다.

MZ세대의 "꾸미기 문화"는 주류 트렌드로 확실하게 자리잡고 있습니다. MZ 트렌드를 다루는 미디어 캐릿에서 "별다꾸" 라는 신조어가 생길 정도이니 말입니다.
MZ세대들의 소통창구인 인스타그램 해시태그 게시물 수에 따르면 다꾸 (413만개), 인생네컷 (125만개) 로
20-30 세대들이 얼마나 이 두 키워드에 열광하는 지 알 수 있습니다. 저희는 이 두개의 키워드를 조합해 함께 찍은 사진들을 그룹 다이어리에 보관하고, 동시에 편집이 가능한 공유형 다이어리 꾸미기 서비스 "네모"를 제안합니다.

<br>

## 5Whys?

<img width="585" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team2_BE/assets/98508955/7ff5e39f-001c-455f-aa81-3f8ce1bdfb23">

<img width="582" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team2_BE/assets/98508955/fc7785e0-90a7-4089-96f4-5795d571b2d2">

<br>

## 서비스 소개

> 실시간 공유형 다이어리 꾸미기 서비스 **네모**

1. 친구들과 나만이 가지고 있는 앨범! **나만의 포토 앨범 만들기**
    - "친구, 연인, 혼자, 가족" 등 여러 태그로 내 소중한 사람들과 함께 앨범을 만들어요!
    -
2. 친구와 동시에 편집이 가능한 **동시 편집 기능**
    - 각자의 집에서 서로 뭘 꾸미는지 볼 수 있어요!
    - 아 쓸말이 없다..
3. QR로 받아온 네컷 사진을 바로 네모 앨범으로?
    - 네모 앨범에서 QR 인식을 하고 네컷 사진을 바로 앨범으로 불러와요!
4. 이제 앨범 꾸미기도 도전이다! 그룹끼리 그리고 나혼자만의 **도전과제**

    - 매일 찍는 사진들을 좀 더 재미있게 즐길 방법이 없을까? 바로 도전과제를 다같이 수행해봐요!
    - 사진찍고 꾸미는 즐거움도 느끼고 골드 단계를 수행하면 나만의 칭호도 획독 할 수 있어요!

5. 다른 그룹원이 삭제한 페이지를 다시 보고싶을땐 **휴지통**에서 다시 찾아오기!
    - 다른 그룹원이 만약 페이지를 삭제했다? 그럼 최대 7일간 보관되는 휴지통에서 다시 복구 시키면 돼요!

<br>

## 🎯 중점을 둔 기능

### FE

#### 1. 캔버스 기반의 도형 및 드로잉 기능 (TLdraw 활용)

-   사용자가 웹 애플리케이션 내에서 직관적으로 드로잉하고 도형을 그릴 수 있는 기능을 제공할 수 있도록 구현했습니다.
-   [깃허브 URL](https://github.com/Step3-kakao-tech-campus/Team2_FE/tree/master/src/pages/Canvas)

#### 2. 웹 소켓 통신을 이용한 실시간 협업 및 동시 편집 기능

-   Yjs 라이브러리(yjs, y-websocket, y-presence)를 활용하여 실시간 협업 및 동시 편집 기능을 구현하여 여러 사용자가 동일한 캔버스(TLdraw) 페이지에 대해 동시에 작업할 수 있도록 했습니다.

#### 3. 반응형 디자인 및 최적화된 사용자 인터페이스

-   react-select, react-modal 등의 라이브러리를 활용하여 사용자 인터페이스를 최적화하고, 반응형 웹 디자인을 구현하여 다양한 디바이스에서의 사용자 경험을 향상시킵니다.
-   [깃허브 URL](https://github.com/Step3-kakao-tech-campus/Team2_FE/tree/master/src/pages)

#### 3. 소셜 로그인 및 사용자 인증

### BE

#### 1. 소셜 로그인

-   카카오 소셜로그인, 구글 소셜 로그인 이용
-   [깃허브 URL](https://github.com/Step3-kakao-tech-campus/Team2_BE/tree/weekly/src/main/java/com/example/team2_be/auth)

#### 2. 실시간 웹 소켓 통신

-   [깃허브 URL](https://github.com/Step3-kakao-tech-campus/Team2_BE/blob/weekly/src/main/java/com/example/team2_be/album/page/AlbumPageSocketHandler.java)

#### 3. 앨범 페이지 기능

-   [깃허브 URL](https://github.com/Step3-kakao-tech-campus/Team2_BE/tree/weekly/src/main/java/com/example/team2_be/album/page)
