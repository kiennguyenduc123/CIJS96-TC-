import { useState } from 'react';
import './App.css';
// import ShowNumber from './ShowNumber';
// function App() {
//   const number = 10;
//   const listNumber = [1,2,3,4,5,6,7,8,9,10];
//   return (
//     <>
//       <p>Listing reding</p>
//       <p>{number}</p>
//       <p>DS so : {listNumber}</p>
//       <p>DS bo loc: {' '} 
//         {
//           listNumber.filter((item) => {
//             return item % 2 === 0;
//         }).map((item) => {
//           return <ShowNumber key = {item} number = {item}/>//Moi khi dùng phương thức filter hay map phải cho nó 1 cái key
//         })}
//       </p>
//     </>
//   )
// }


function App() {
 const [listStudent, setListStudent] = useState([
   {
     id: 1,
     name: 'Doraemon',
     weight: 120,
   },
   {
     id: 2,
     name: 'Nobita',
     weight: 20,
   },
   {
     id: 3,
     name: 'Jaien',
     weight: 60,
   },
 ]);
 const [newStudent, setNewStudent] = useState({
   name: '',
   weight: 0,
   id: new Date().getTime,
 });
 const handleSubmit = (e) => {
   e.preventDefault();
  //  console.log(newStudent);
   listStudent.push(newStudent)
   setListStudent([...listStudent]);
 };
 return (
   <>
     <p>List rendering</p>
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Nhập tên học sinh"
         name="name"
         value={newStudent.name}
         onChange={(e) => {
           setNewStudent({
             ...newStudent,
             name: e.target.value,
           });
         }}
       />
       <br />
       <input
         type="number"
         name="weight"
         value={newStudent.weight}
         onChange={(e) => {
           setNewStudent({
             ...newStudent,
             weight: e.target.value,
           });
         }}
       />
       <br />
       <button>Submit</button>
     </form>
     {listStudent.map((item) => {
       return (
         <div key={item.id}>
           <span>{item.name}</span> - <span>Cân nặng: {item.weight}</span>
         </div>
       )
     })}
   </>
 );
}


export default App;
