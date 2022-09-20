const i = 200;

// i = 300;

let arr1 = [1, 10, '100', '광주', null]
let arr2 = new Array('1', null, 100, 50, 'A')

console.log(arr1);
console.log(arr2);
console.log(arr2[1]);

const arr3 = new Array('1', null, 100, 50, 'A');
arr3[1] = true;
console.log(arr3);

console.log(arr3.length); // size
console.log(arr3.concat('-')); // 배열을 합침
console.log(arr3.join('-')); // 배열을 끊어서 출력
arr3.pop(); // 마지막 인덱스의 자료를 꺼냄
console.log(arr3);
arr3.push('a'); // 마지막 인덱스에 추가
console.log(arr3);
arr3.shift(); // 첫번째 인덱스의 자료를 꺼냄
console.log(arr3);
arr3.unshift(2); // 첫번째 인덱스에 추가
console.log(arr3);

let str = "abcdefgdkdkdkwoer";
console.log(str[4]);
console.log(str.charAt(4));