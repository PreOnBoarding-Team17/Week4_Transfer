# Week4_Assignment\_\_Transfer 🚀

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 목록 📍](#2-구현-목록-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [프로젝트 제작 과정 ✍🏻](#5-프로젝트-제작-과정-)
6. [프로젝트 설치 및 실행 ✨](#6-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크](https://week4-transfer.netlify.app/)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 4주차 8번째 기업 과제
- 주제 : 링크로 공유한 파일들을 다운로드 받을 수 있는 페이지 구현
- 기간 : 2022.02.24 ~ 2022.02.26

<br />

## 2. 구현 목록 📍

<br/>

### 🔥 과제 요구 기능

#### 링크 목록 화면

- [x] 링크 아이템 클릭 시 상세페이지 이동
- [x] 제목 아래 URL은 다음과 같이 표시
  - [x] 유효기간 이내 : 도메인 주소를 포함한 상세페이지로 이동하는 전체 경로 표시
  - [x] 유효기간 만료 : '만료됨' 표시
- [x] URL 클릭 시 다음과 같이 동작
  - [x] 유효기간 이내 : URL을 클립보드에 복사하고 `${링크 제목} 주소가 복사 되었습니다.` 내용이 Alert로 표시
  - [x] 유효기간 만료 : 아무 동작도 하지 않음
- [x] 파일 개수의 숫자에 3자리 단위마다 콤마 표시
- [x] 파일 사이즈는 소수점 둘째 자리까지, 단위는 B,KB,MB,GB,TB 로 표기
- [x] 유효기간은 다음과 같이 표기
  - [x] 48시간 미만 : xx시간 xx분
  - [x] 48시간 이상 : x일
  - [x] 만료 : 만료됨
- [x] 받은 사람이 있을 경우 받은 사람 텍스트를 미리 주어진 코드베이스와 같이 <Avatar/> 컴포넌트 이용

#### 링크 상세 화면

- [x] 링크 정보 표시
- [x] 받기 버튼을 누르면 `다운로드 되었습니다.` 를 내용으로 가지는 브라우저 기본 Alert 표시
- [x] 링크의 유효기간이 만료되지 않았을 경우에만 파일 목록 표시

<br/>

### ✨ 추가 구현 기능

```plaintext
 🔅 이 부분은 기본 구현 목록 외 필요하다고 생각해 구현한 기능입니다.
```

#### 링크 목록 화면

- [x] 기본으로 제공된 컴포넌트를 분리해 재활용이 가능하도록 구현
- [x] API에 주어진 파일을 썸네일로 보여줄 수 없을 때는 기본 이미지를 보여주도록 구현

#### 링크 상세 화면

- [x] 만료된 링크에서 받기 버튼을 눌렀을 때 `만료된 파일입니다.` 메세지를 Alert로 표시
- [x] 제목이 지정되지 않은 링크에서는 `제목 없음` 을 기본으로 보여주도록 설정
- [x] API에 주어진 파일을 썸네일로 보여줄 수 없을 때는 기본 이미지를 보여주도록 구현

<br />

## 3. 프로젝트 구조 🌲

```bash
src
├── api
├── common
│   ├── interface
│   └── styles
├── components
│   ├── TableData
│   │    ├── TableDataInfo
│   │    └── TableDataTitle
│   ├── Avatar
│   ├── Button
│   ├── Container
│   └── Validity
├── contextAPI
├── hooks
├── pages
│   ├── DetailPage
│   └── LinkPage
├── styles
│   ├── colors
│   └── GlobalStyle
│
├── App.tsx
└── index.tsx
```

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                                      |
| ------------------------------------------ | ---------------------------------------------- |
| [황상섭](https://github.com/sangseophwang) | 초기 세팅, DetailPage 구현, 문서 작성          |
| [정인권](https://github.com/developjik)    | LinkPage UI 및 로직 구현, Context API, 배포    |
| [현다솜](https://github.com/som-syom)      | 유효기간 로직 구현, 디테일 수정, 컴포넌트 분리 |

<br/>

## 5. 프로젝트 제작 과정 ✍🏻

### [1] 컨벤션은 다음과 같이 정했습니다 ✨

| 커밋명      | 내용                                             |
| ----------- | ------------------------------------------------ |
| ✨ feat     | 파일, 폴더, 새로운 기능 추가                     |
| 🐛 fix      | 버그 수정                                        |
| 💄 style    | 코드 스타일 변경                                 |
| 📝 docs     | 문서 생성, 추가, 수정(README.md)                 |
| ♻️ refactor | 코드 리팩토링                                    |
| 🚑️ chore   | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/PreOnBoarding-Team17/Week4_Transfer/issues/1)서 확인해보실 수 있습니다!

<br/>

### [2] 풀 리퀘스트 시 팀원들과 코드 리뷰를 진행했습니다 🔥

[풀리퀘스트 링크](https://github.com/PreOnBoarding-Team17/Week4_Transfer/pulls?q=is%3Apr+is%3Aclosed)

![스크린샷 2022-02-26 오전 12 27 25](https://user-images.githubusercontent.com/98322239/155741817-f1a3eab6-0a7a-488a-8ddb-8a5b96183ccb.png)


<br/>

### [3] 이슈를 작성해 서로의 진행상황을 공유했습니다 👀

[이슈 링크](https://github.com/PreOnBoarding-Team17/Week4_Transfer/issues?q=is%3Aissue+is%3Aclosed)

![스크린샷 2022-02-26 오전 12 27 54](https://user-images.githubusercontent.com/98322239/155741826-6cee5461-f3f4-488b-ba9a-6d97f646501c.png)


<br/>

## 6. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone
```

2. 다음 명령어를 차례대로 입력해주세요.

```plaintext
$ yarn install

$ yarn start
```

<br/>
