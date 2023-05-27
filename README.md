<h1 align="center">29cm Front-End Mission 👋</h1>

<br>

![](https://pds.joongang.co.kr/svcimg/newsletter/content/202205/03/74e73d6d-adae-47bc-8071-6c2ccace2802.jpg) <br>

## :page_with_curl: 소개

> 프론트엔드 서류 지원한 신재훈 입니다. <br>

### 주요기능

- **React Suspense와 ErrorBoundary**를 통한 fallback UI 렌더링
- 선택된 페이지에 따라 다르게 출력되는 페이지 번호
- hydrate 이슈를 피하기 위한 **커스텀 훅 개발**
- 유저 경험을 위한 **skeleton UI** 개발
- 최적화를 위한 적절한 **메모이제이션 활용**

<br>

### 트러블슈팅

#### 문제

```
react query와 suspense를 함께 사용하면 pre-render시에 데이터 fetching을 하면서 fetching완료전까지 hydrate하지 않는 이슈가 발생했습니다.

제가 원했던 흐름은 아래와 같았지만,
pre render => hydrate (fetching) => 완료전까지 fallback UI render (pending) => 완료 후 데이터 render (fullfilled)

실제로 동작은 달랐습니다.
pre render => data fetch 될때까지 기다림 => hydrate => 다시 data fetch => data render

특이한건 pre render때 fetching을 해놓고 hydrate하면서 다시 fetching을 하는거였는데, 이유는 밝히지 못했습니다.
과제 제출 후 계속 공부해볼 계획입니다.
```

#### 해결

```
해결 방법은 의외로 간단했습니다.

data를 fetching하는 컴포넌트를 ssr : false 옵션으로 dynamic import하는 것 입니다.

이렇게 해주면, pre render시에 컴포넌트를 render하지 않고, hydrate시에 import하면서 원하는 순서대로 구현이 가능했습니다.
```

## :wrench: 사용 스택

- NextJS `13.4.52`
- ReactJS `18.2.0`
- Emotion `11.11.0`
- Typescript `5.0.4`
- Zustand `4.3.8`
- React-Query `3.39.3`

<br>
<br>

## :clipboard: 컨벤션

### Git Commit

```
feat        : 기능 (새로운 기능)
fix         : 버그 (버그 수정)
refactor    : 리팩토링
design      : CSS 등 사용자 UI 디자인 변경
comment     : 필요한 주석 추가 및 변경
style       : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
docs        : 문서 수정 (문서 추가, 수정, 삭제, README)
test        : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
chore       : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
init        : 초기 생성
install     : 라이브러리 설치
rename      : 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
remove      : 파일을 삭제하는 작업만 수행한 경우
```

### ETC

```
네이밍 : 카멜케이스
css : inline css 금지 , css 템플릿은 컴포넌트 하단에 둠
컴포넌트 : 페이지별로 컴포넌트 폴더에 폴더를 생성
```

## :runner: 설치 및 시작

```bash
$ npm install
$ npm run dev
```

#### 접속

```
 http://localhost:3000
```
