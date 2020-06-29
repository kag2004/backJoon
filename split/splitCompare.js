const abtext = prompt('A와B 를 입력해주세요 띄어쓰기 기준으로 비교가 됩니다. 주의해주세요.','');


let strArray = abtext.split(' ');

if(strArray[0] > strArray[1]){
    console.log('>')
}
if(strArray[0] < strArray[1]){
    console.log('<')
}
if(strArray[0] == strArray[1]){
    console.log('==')
}
console.log(strArray[0],'//',strArray[1])

