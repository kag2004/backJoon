const a = prompt('A 의 값을 입력해 주세요','');
const b = prompt('B 의 값을 입력해주세요.','');


let one = b.substr(0,1)
console.log('첫째',one)
let two = b.substr(1,1)
console.log('2째',two)
let three = b.substr(2,1)
console.log('3째',three)

threeCalculated(a,three)
twoCalculated(a, two)
oneCalculated(a, one)
totalSum(a,b)

//첫번쨰 
function oneCalculated (a, one){
    console.log(a,'*',one,'번째 곱 첫번째 ',a*one);
}
//두번쨰
function twoCalculated (a,wto){
    console.log(a,'*',wto,'번째 항목 두번째',a*wto);
}
//세번쨰
function threeCalculated (a, three){
    console.log(a,'*',three,'번째 항목 세번째',a*three);
}
//a*b 총합
function totalSum (a, b){
    console.log(a,'*',b,'값은 ==',a*b);
}