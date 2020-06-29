// const a = prompt('A 의 값을 입력해 주세요','');
const sexual = prompt('성적을 입력해 주세요');

if(Number(sexual) >= 90){
    console.log('A학점')
}else if(Number(sexual) >= 80 && Number(sexual) <= 89){
    console.log('b',Number(sexual))
    console.log('B학점')
}else if(Number(sexual) >= 70 && Number(sexual) <= 79){
    console.log('c',Number(sexual))
    console.log('c학점')
}else if(Number(sexual) >= 60 && Number(sexual) <= 69){
    console.log('D',Number(sexual))
    console.log('D학점')
}else if(Number(sexual) < 60){
    console.log('F',Number(sexual))
    console.log('F학점')
}

// 75 >= 80 
// //
// 75 >= 70 = true
// 75 <= 79 = true

// if(Number(sexual) <= 89 || Number(sexual) == 80){
//     console.log('B학점')
// }
// if(Number(sexual) < 79 || Number(sexual) == 70){
//     console.log('C학점')
// }
// if(Number(sexual) <= 69 || Number(sexual) == 60){
//     console.log('D학점')
// }
// if(Number(sexual) < 60){
//     console.log('F학점')
// }

// 80~89
