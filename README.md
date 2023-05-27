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

## :runner: 설치 및 시작

```bash
$ npm install
$ npm run dev
```
