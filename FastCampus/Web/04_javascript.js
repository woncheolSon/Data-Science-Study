// package : runner, script - code run
// nodejs : npm 패키지 관리 매니져
// mac : brew install node

// console.log("dss");

// 주석
// 한줄주석 : // code...
// 여러줄주석 : /* code... */

// 변수 선언
// var a = 1;
// var b = 2;
// console.log(a+b);

// 식별자 규칙
// 상수명 : 대문자 스네이크 케이스
// 변수명 : 카멜 케이스
// 모듈 : 파스칼 케이스
// 컨벤션 : google js 컨벤션, airbnb js 컨벤션
// 특수기호 : 파이썬 _, js에서는 $ 사용이 가능
// _name : private, $target : selector

// 연산자
// +, -, *, /, %, ++, --
// var a = 5;
// var result = a++;
// console.log(a, result); // 6 5
//
// var a = 5;
// var result = ++a;
// console.log(a, result); // 6 6

// 데이터 타입
// var a = 1;          // number
// var b = 1.1;        // number
// var c = "dss";      // string
// var d = [1,2,3];    // object
// var e = {a:1, b:2}; // object
// var f = true;       // boolean
// console.log(typeof a, typeof b, typeof c, typeof d);
// console.log(typeof e, typeof f);

// null, undefined, NaN
// null : 변수에 값이 없을 정의
// undefined : 값이 지정되지 않음
// NaN : 존재하지 않는 데이터
// var a = null;
// console.log(a);
//
// var b;
// console.log(b);
//
// var c = 0/0;
// console.log(c);

// 비교연산자
// <, >, >=, <=, ==, !=, ===, !==
// ==과 ===의 차이
// 결론부터 말씀드리면 무조건 === 로 사용하시면 됩니다.
// ==은 데이터의 값만 비교합니다.
// console.log(1 == 1);    // true
// console.log(1 == "1");  // true

// ===은 데이터의 값과 데이터의 타입을 비교합니다.
// console.log(1 === 1);    // true
// console.log(1 === "1");  // false

// NaN
// 비교연산에서 NaN이 들어가면 무조건 false
// console.log(NaN === NaN);
// console.log(NaN == NaN);

// 논리연산자
// &&(and), ||(or)
// console.log(true && false);
// console.log(true || false);

// 조건문
// python - if, elif, else
// js - if, else if, else
// if(false){
//     console.log("hello");
// } else if(true){
//     console.log("world");
// } else {
//     console.log("dss");
// }

// false로 간주되는 데이터
// null, undefined, NaN, 0, ""

// true로 간주되는 데이터
// [], {}

// 문제 1. 점수를 입력받아서 학점을 출력하는 코드
// var point = 76;
// var result = "";
// // todo
// if(point >= 90){
//     result = "A";
// }else if(point >= 80){
//     result = "B";
// }else if(point >= 70){
//     result = "C";
// }else if(point >= 60){
//     result = "D";
// }else{
//     result = "F";
// }

// console.log(result); // "C"

// 반복문
// while, for, do while
// break, continue
// var num = 0;
// while(true){
//     num++;
//     if(num === 3){
//         continue;
//     }
//     if(num > 5){
//         break;
//     }
//     console.log(num);
// }
// console.log(num);

// python - for : iterable data 갯수만큼 반복
// for(초기값;조건;증감)
// es6 - in, class, 화살표함수(lambda)
// for(var i=0; i<5; i++){
//     console.log(i);
// }

// 배열
// var arr = ['a','b','c','d','e'];
// console.log(arr[2]);
//
// // 추가
// arr.push('f');
// console.log(arr);
// arr.unshift('z');
// console.log(arr);
//
// // 제거
// arr.shift(); // 앞의 요소 삭제
// console.log(arr);
// arr.pop();   // 마지막 요소 삭제
// console.log(arr);
//
// // 정렬
// arr.reverse();
// console.log(arr);
// arr.sort();
// console.log(arr);
//
// // 자르기 - splice
// var arr2 = arr.splice(2,2); // 2번 요소에서 3개를 자릅니다.
// console.log(arr, arr2);

// 객체
// 파이썬에서 class로 만드는 객체와 같은 의미
// 파이썬에서 딕셔너리 데이터 타입과도 같은 의미

// var obj = {}; // var obj = new Object();
// obj.name = "doojin";
// obj['addr'] = "seoul";
// console.log(obj);

// 객체를 리터럴로 선언한다.
// 리터럴? : 변수에 대입해주는 값
// var obj2 = {
//     name:"jin",
//     addr:"seoul",
//     skill: function(){
//         console.log("coding");
//     }
// };
//
// console.log(obj2);
// console.log(obj2.skill());

// function
// hoisting - 변수를 선언하면 최상단으로 올라갑니다.
// function sum(num1, num2){
//     return num1 + num2;
// }
// var result = sum(1, 2);
// console.log(result);
//
// var minus = function(num1, num2){
//     return num1 - num2;
// };
// var result = minus(3, 2);
// console.log(result);

// 스코프
// var a = "hello";
// function disp(){
//     var a = "world";
//     console.log(a);
// }
// disp();
// console.log(a);

// var a = "hello";
// function disp(){
//     a = "world";
//     console.log(a);
// }
// disp();
// console.log(a);

// 즉시실행함수, 익명함수
// 자바스크립트는 프론트엔드 언어입니다.
// 프론트엔드언어는 코드가 브라우져에 공개 됩니다.
// 서비스를 접속한 이용자가 전역 함수를 실행할수 있습니다.
// 보안에 문제가 생길수 있기 때문에, 모든 함수나 변수를
// 지역 변수나 함수로 선언을 해줍니다.
// (function(){
//     var name = "doojin";
//     function disp(){
//         console.log(name);
//     }
//     disp();
// })();
//
// var name = "doojin";
// function disp(){
//     console.log(name);
// }
// disp();
//
// (function(){
//
// }());

// OOP - 캡슐화, 추상화, 은닉화
// getter, setter
// 실제로 자바스크립트에서 모듈을 사용하는 방법
// 모듈패턴

// 모듈 객체 변수 선언
// Module 이라는 변수가 있으면 Module에 Module이 대입
// 없으면 빈 객체를 만듦니다.
// var Module = Module || {};
//
// (function(_Module){
//
//     var _name = "doojin";
//
//     _Module.getName = function(){
//         return _name;
//     };
//
//     _Module.setName = function(name){
//         _name = name;
//     };
//
// })(Module);
//
// console.log(Module.getName());
// console.log(Module._name);

// clouser 클로져, 프로토타입 개념을 추가적으로 공부

// 콜백함수
// 함수에서 아규먼트로 함수를 받아서 함수안의 코드가 다 수행된후에
// 아규먼트로 받은 함수를 수행합니다.
// 여기서 아규먼트로 받은 함수를 콜백 함수라고 합니다.
function add(callback, n1, n2){
    var result = n1 + n2;
    callback(result);
}

function disp(result){
    console.log(result);
}

function sqrt(result){
    console.log(result*result);
}

var result = add(disp, 2, 3);
console.log(result);

var result = add(sqrt, 2, 3);
console.log(result);

// api 주고 받을때
// api - request, response -> callback 함수를 수행
