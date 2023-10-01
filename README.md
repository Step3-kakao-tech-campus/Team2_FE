# git convention
***
## commit
### type
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- design: CSS 등 사용자 UI 디자인 변경
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor: 코드 리펙토링
- test: 테스트 코드, 리펙토링 테스트 코드 추가
- chore: 빌드, 관리(페키지메니저 등)

### 형식
```
<type><break or not>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
```
단 body를 적지 않아도 됨.

## branch
### 기본
- master
- develop
- weekly

### 기능 추가 시
- feat/{기능 or page}

## PR
- 코드리뷰 pr
> PR 제목 : 부산대_0조_아이템명_0주차   

- 기능 추가 pr
> [#<PR 번호>] 변경사항   

ex ) [#3] 로그인 기능

# code convention
***

## 참고
- https://ui.toast.com/fe-guide/ko_CODING-CONVENTION
- prettierrc 파일

## 폴더 구조
```
   ├── public
   │   └── assets
   │
   └── src
       ├── common
       │   ├── atom
       │   ├── molecule
       │   ├── organism
       │   └── template
       │
       ├── pages
       │   └── components
       │
       ├── recoil
       │
       ├── services
       │
       ├── util
       │
       └── types
```

