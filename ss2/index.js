// const arr = [1,2,3,4,5];
// console.log(arr[2]);

// const cars = ["BMW","Volvo","Saab","Ford","Fiat","Audi"]
// const newarray = cars.map((value) => {
//     return "Kádasda";
// })

// console.log(newarray);

// const filterarr = cars.filter((value) => {
//     return value === "BMW";
// }) 

// console.log(filterarr);

// const person = {
//     name:"doraemon",
//     age:10
// }

// console.log(person["name"]);

//duyet cac phan tu cua doi tuong
// for(const acb in person) {
//     console.log(abc,':',person[abc]) 
// }

// for (const iterator of cars) {
//     console.log(iterator);
// }

// const listperson = [
//     {
//         name:"doraemon",
//         age:10,
//     },
//     {
//         name:"nobita",
//         age:16
//     }
// ];

// for(let i =0;i<listperson.length;i++) {
//     const element = listperson[i];
//     // console.log(element.name);
//     for (const key in element) {
//         console.log(element);
//     }
// }


//bai4
// const listnumber = [1,2,3,4];
// const double = listnumber.map((item) => {
//     return item*2;
// });

// console.log(double);

//bai 5

// const listnumber = [1,2,3,4,5,6];
// const double = listnumber.filter((item) => {
//     return item % 2 !==0;
// })

// console.log(double)

//bai 6 
// const employee = [
//     {id:1,name:"John",workingDays:22,lateDates:2}
//     ,{id:2,name:"Tailor",workingDays:32,lateDates:4}
// ]

// const result =employee.reduce((prevaule,item) => {
//     return prevaule.workingDays + item.workingDays;
// },{
//     workingDays:0
// });

// console.log(result)

//bai7
// const employee = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     {id: 3, name: "Mark", salary: 3000 },
// ];
// let Max = employee[0].salary;
// let indexMax = 0;
// for(let i=0;i<employee.length;i++) {
//     const element = employee[i];
//     if(element.salary > Max) {
//         Max = element.salary;
//         indexMax = i;
//     }
// }
// console.log(employee[indexMax]);


//bai 8

// const employee = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let Max = employee[0].workingDays - employee[0].lateDays
// let indexMax = 0;
// for(let i=0;i<employee.length;i++) {
//     const element = employee[i];
//     const work = element.workingDays - element.lateDays
//     if(work > Max) {
//         Max = work;
//         indexMax = i;
//     }
// }
// console.log(employee[indexMax]);


//bai9

// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];

// const result = {

// };

// const listName = employees.map(item => item.name);
// // console.log(employees);
// // console.log(listName);

// listName.forEach((item,index) => {
//     if(!result[item]) {
//         result[item] = [];
//     }
//     result[item].push(employees[index]);
// });

// console.log(result)

// bài 10

// const employee = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// let Max = employee[0].workingDays / employee[0].salary
// let indexMax = 0;
// for(let i=0;i<employee.length;i++) {
//     const element = employee[i];
//     const work = element.workingDays / element.salary
//     if(work > Max) {
//         Max = work;
//         indexMax = i;
//     }
// }
// console.log(employee[indexMax]);


// bài 11 

// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];

// const result = {

// };

// employees.forEach((item) => {
//     if(!result[item.workingDays]) {
//         result[item.workingDays] = 1;
//     }else{
//         result[item.workingDays]++;
//     }
// })
// console.log(result);

//bai 12

// const employees = [
//     { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
// ];

// const newemploy = employees.map((employee) => ({
//     name:employee.name,
//     email:employee.email,
//     workinfo: {
//         workingDays: employee.workingDays,
//         lateDays: employee.lateDays
//     }
// }));

// console.log(newemploy);

// bai 13
let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];

//1.1
    // const result = (name,description) => {
    //     tasks.push({name:name,description:description,completed:false});
    //     return tasks;
    // }
    // console.log(result("Viet bao cao","Viets tien do du an"));

//1.2

// function markTaskscomplete(...taskIndexes) {
//     taskIndexes.forEach((index) => {
//         if(index >=0 && index < tasks.length) {
//             tasks[index].completed = true;
//         }
//     });
//     return tasks;
    
// }

// console.log(markTaskscomplete(0,2));

//1.3

function sortTasksAlphabetically(ascending = true) {
    tasks.sort((a, b) => (
        ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    ));
}
sortTasksAlphabetically();
console.log(tasks);