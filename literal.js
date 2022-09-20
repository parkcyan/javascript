let myName = "홍길동" // 리터럴
let yourName = new String("김길동") // 생성자

console.log(myName, yourName);

let myObj = {
    name : `선영훈`,
    gender : `남`,
    liveIn : `광산구`
}

let yourObj = new Object ({
    name : `홍길동`,
    gender : `남성`,
    born : `전남`
})

console.log(myObj.name, myObj['gender']);
console.log(yourObj.name, yourObj['born']); 