// Funtion
//f(x) = a*x + b
// Normal funtion :
//function funname(logic trong ham) {}
// ham nay k tra ve gia tri gi

// import { sum as mathSum } from './math.js'

// import math {sumMath} from './math.js'
// function sayHello(x) {
//     let a= 3;
//     let b= 4;
//     const result = a*x + b;
//     console.log(result);
//     return result;
// }
//  let resultsayHello  = sayHello(8);
//  console.log(resultsayHello);

//Arrow funtion
// const sayHi = (x) => {
//     let a = 2;
//     let b = 8;
//     return a*x + b
// }
// let result = sayHi(2);


// Khi suy ra (=>) là 1 giá trị hoặc các logic trả về giá trị thì giống như giá trị bình thường
// const sayhi = (x) => 2 * x + 9;

// const sayhi = (x,y,z) => ({ name:'MindX' });

// template literal
// được sử dụng để nối chuối hay xử lý các giá trị(giá trị)

// const user = "MindX";
// const text = "Text" + " " + user;
// const text = `Hello ${user}`
// console.log(text);

// console.log("==========Mindx===============")
// const result = sum(1,4);

// console.log(result)
// console.log("==============Toan tu 3 cham=====================")
// const arr = [1,2,3]
// console.log(arr);
// console.log(...arr);

// const person = {
//     name:"Mindx",
//     age:18;
// }

// const {name,age} = person;

// const coordinate = [1,2,3];

// const [x,y,z] = coordinate;

// function square(x) {
//     return x*x;
// }

// const result = square(2);
// console.log(result);

// const square = (x) => {
//     return x * x;
// }

// const result = square(2);
// console.log(result);

// const square = x => x*x

// const square = (x) => (x*x)
// const result = square(2);
// console.log(result);


//baii2 
//   const out = (text,word) => {
//     return text.includes(word);
//   }

//     console.log(out("Hello word","word"));


//bài 3
    // let add = (arr,plit) => {
    //     let result = [];
    //     for(let i =0;i<arr.length;i++) {
    //         let word = plit +":" + arr[i]; 
    //         result.push(word);
    //     }
    //     return result
    // }
    // console.log(add(["one","two","three"],"Number"));

// bai 4
// const add = (arr) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         const name = arr[i] * 2;
//         result.push(name);
//     }
//     console.log(result);
// }
// add([1,2,3,4])

//bai 5
// const add = (arr) => {
//     let result = [];
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] % 2 !=== 0) {
//             result.push(arr[i]);
//         } 
//     }
//     console.log(result)
// }

// add([1,2,3,4,5,7,8,9])


// bai 6
//     let add = (arr) => {
//         let result = 0;
//         for(let i=0;i<arr.length;i++) {
//             result += arr[i].workingDays;
//         }
//         return result;
//     }

// console.log( add([{id:1,name:"John",workingDays:22,lateDates:2},{id:2,name:"Tailor",workingDays:32,lateDates:4}]))


// bai 7
//     let add = (arr) => {
//         let max = arr[0];
//         for(let i =1;i<arr.length;i++) {
//             if(arr[i].salary > max.salary) {
//                 max = arr[i];
//             }
//         } 
//         return max;
//     }

// console.log(add([
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ]))

// bài 8

let work = (arr) => {
    let max = arr[0];
    let workmax = arr[0].workingDays - arr[0].lateDays;
    for(let i=1;i<arr.length;i++) {
        let workday= arr[i].workingDays - arr[i].lateDays;
        if(workday > workmax) {
            max = arr[i];
            // workday = workmax;
        } 
    }
    return max;
}

console.log(work([{ id: 1, name: "John", workingDays: 22, lateDays: 2 },
{ id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
{ id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
]));

