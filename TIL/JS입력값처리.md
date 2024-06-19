프로그래머스에서는 입력값을 쉽게 받아올 수 있는데 백준은 node.js로 매우 까다롭게 받아와야해서 사용을 안했다.

JavaScript에서는 fs 모듈의 `readFileSync()` 함수를 사용하여 파일에서 데이터를 읽어올 수 있다.

fs 모듈의 `readFileSync()` 를 사용하기 위해서는 코드의 맨 위에 `const fs = require("fs");`를 적어주어야 한다.

`let`을 사용해도 잘 돌아가지만 fs 모듈을 불러올 때 `const`를 사용하는 이유는 프로그램 실행 도중에 fs 모듈의 내용이 변경되지 않도록 보장하기 위해서다.

그 후 `fs.readFileSync(0)` 함수로 입력을 받을 수 있게 된다.

주의 해야할 점은 JavaScript는 입력을 항상 전체로 받고 있고, 입력을 우리가 알아 들을 수 없는 형태로 받고 있다.→ toString()

### 1. 기본적인 입력값

```jsx
const fs = require("fs");

let input = fs.readFileSync(0).toString();
```

### **2. 공백을 사이에 두고 입력**

```jsx
3 6
const fs = require("fs");
//1.
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0])
let b = Number(input[1])

//2.
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
```

### 3. 2개의 줄에 걸쳐 입력

```jsx
3
6
const fs = require("fs");
let input = fs.readFileSync(0).toString().split(**"\n"**);

let a = input[0];
let b = input[1];

console.log(a, b);
```

### 4. 2개의 줄에 걸쳐서 + 여러개

```jsx
1 2
3
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 첫번째 줄은 공백으로 나눠져 있기 때문에
// 한번 더 split을 해준다.
let arr = input[0].split(" ")
let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(input[1]);

// 출력
console.log(a, b, c); 1 2 3
```

### 5. 여러개의 줄에 걸쳐서 입력

```jsx
5 -> n
2 -> 차례대로
7
3
9
4
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]); //5

// 출력
for (let i = 1; i <= n; i++) {
    // x는 i번째 숫자를 의미
    let x = Number(input[i]);
}
```

## 문자, 문자열 입력 / 문자 받아 출력

공백 문자들이나 줄바꿈 문자 `\n`이 존재한다면, 이것까지 같이 입력에 들어오게 된다.

`trim()` 이라는 함수를 이용하여 입력의 양 끝의 공백문자와 줄바꿈 문자를 제거하자.
