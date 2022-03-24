1. next에는 webpack이 들어있다. css는 원래 import를 할 수 없다. 하지만 webpack이 이를 가능하게 해준다. style태그로 바꿔서 html 파일에 넣어준다.

2. 반응형은 모바일 먼저 진행하는 것이 좋다. 데스크탑부터 진행하면 브레이크포인트 설정이 골때린다.

3. 가로 디자인 부터 고려하고 세로를 디자인한다.

4. Antd 그리드 시스템에 대해서 이해를 하자. Grid 시스템인데 24 등분한다. 24 등분이 넘어가면 세로로 쌓이고 아니면 가로로 쌓인다.

5. gutter 컬럼 사이에 간격을 말한다.

6. a 태그에서 target="\_blank"를 사용할 땐 rel="noreferrer nopoener"까지 써줘야 보안 위협이 사라진다.

7. Echarts, Antd, Vue 대륙의 실수

8. Global style css className을 덮어쓸 수 있다.

9. 정규식 https://regexr.com/ 테스트 사이트

10. middleware 원리는 삼단 고차 함수이면 된다.

11. 제네레이터 문법 정리

```
// const gen = function* () {
//   console.log(1);
//   yield;
//   console.log(2);
//   yield;
//   console.log(3);
//   yield 4;
// };

// const generator = gen();

// generator.next();

// const gen2 = function* () {
//   while (true) {
//     yield '무한';
//   }
// };

// const generator2 = gen2();
// generator2.next();

// let i = 0;
// const gen3 = function* () {
//   while (true) {
//     yield i++;
//   }
// };

// const generator3 = gen3();
// generator3.next();

```

12. saga side-effects 정리
    delay
    설정된 시간 이후에 resolve하는 Promise 객체를 리턴한다.

            put
            특정 액션을 dispatch한다.

            call
            주어진 함수를 실행한다.
            미들웨어가 Promise의 resolve를 기다리게 하기 때문에 동기함수에 사용한다.

            take
            들어오는 특정 액션을 처리한다. 한번 실행되고 이벤트가 삭제된다.

            takeEvery
            모든 리퀘스트에 대해 task를 실행한다.
            function* watchFetchData(){
            yield takeEvery('FETCH_REQUESTED', fetchData)    }

            fork
            백그라운드에서 task가 실행된다.

            all
            이 함수를 사용해서 제너레이터 함수를 배열의 형태로 넣어주면 제너레이터 함수들이 병행적으로 동시에 실행되고, 전부 resolve 될떄까지 기다린다.

            cancle
            fork된 task를 취소시킨다. (ex: yield cancel(task))
            제너레이터를 finally 구간으로 가게한다. 이때 취소한 task 하위에 다른 task가 포함되어 있다면 모두 취소된다.
