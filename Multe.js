let a = prompt('A 의 값을 입력해 주세요','');
let b = prompt('B 의 값을 입력해주세요.','');

//덥샘
function plus (a, b){
    let c = Number(a) + Number(b)
    return c
}
//뺄셈
function subtract (a, b){
    let c = Number(a) - Number(b)
    return c
}
//곱셈
function multiply (a, b){
    let c = Number(a) * Number(b)
    return c
}
//나누셈
function division (a, b){
    let c = Number(a) / Number(b)
    return c
}
//%?

if(1 <= a && b <= 10000){
    let sumPlus = plus(a,b)
    let sumSubtract = subtract(a,b)
    let sumMultiply = multiply(a,b)
    let sumDivision =  division (a,b)
    console.log( a,'+',b,'값 ==', sumPlus)
    console.log( a,'-',b,'값 ==', sumSubtract)
    console.log( a,'*',b,'값 ==', sumMultiply)
    console.log( a,'/',b,'값 ==', sumDivision)
}else {
    alert ('a는 1크거나 같거나 b느 10,000크거나 같아야 합니다. a,b 다시 확인 해주세요.')
}















// 잘모르겠음 외부 모듈 오류??
//Cannot use import statement outside a module   ?? 외부 모듈에소 import사용 할수 가 없다??? 왜 안되는지 모르겠음.
// import test from './common/calculate'

// console.log(test())
// console.log('확인 로그!!')

// let a = prompt('A 의 값을 입력해 주세요','');
// let b = prompt('B 의 값을 입력해주세요.','');



// calculate.tt();
// calculate.tt2();

// console.log( a,'/',b,'값 ==')
// if(0 < a && b <10){
// let sumPlus = plus(a,b)
// console.log( a,'/',b,'값 ==', sumPlus)
// }else {
// alert ('a는 0보다 작거나 b 가 10보다 크면 안됩니다. 다시 확인 해주세요.')
// }