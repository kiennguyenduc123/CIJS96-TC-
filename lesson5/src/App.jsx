import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

// từ dữ liệu để xu ly giao diện
// Khi nó thay đổi giá trị thì nó sẽ đọc lại và cập nhập lại giao diện
// Khai báo
//React hooks là: Khi thay đổi giá trị    
// States: 

  //age là giá trị hiện tại
  //setAge là để cập nhật lại giá trị (lấy giá trị mới so sánh vs giá trị mới)
  // const [age, setAge] = useState(10);
  // const handleClick = () => {
  //   setAge(age + 1);
  // }
  // const [person , setPerson] = useState({name: "Mindx", age: 10})
  // const increaAge = () => {
  //       setPerson({
  //         ...person,
  //         age: person.age + 1
  //       })
  // }
  // return (
  //   <>
  //     <div className='cijt96'>
  //       <h1>{props.message} MindX, Age: <span className='Showage'>{age}</span></h1>
  //       <button onClick={increaAge}>Increa</button>
  //       <hr />  
  //     </div>
    //</>
  //)

  function App(props) {

  const pokemons = [
    { id: "#0001", name: "Bulbasaur", types: ["Grass", "Poison"], image: "./001.png" },
    { id: "#0002", name: "Ivysaur", types: ["Grass", "Poison"], image: "./001.png" },
    { id: "#0003", name: "Venusaur", types: ["Grass", "Poison"], image: "./001.png" },
    { id: "#0004", name: "Charmander", types: ["Fire"], image: "./001.png" },
    { id: "#0005", name: "Charmeleon", types: ["Fire"], image: "./001.png" },
    { id: "#0006", name: "Charizard", types: ["Fire", "Flying"], image: "./001.png" },
    { id: "#0007", name: "Squirtle", types: ["Water"], image: "./001.png" },
    { id: "#0008", name: "Wartortle", types: ["Water"], image: "./001.png" },
    { id: "#0009", name: "Blastoise", types: ["Water"], image: "./001.png" },
    { id: "#0010", name: "Caterpie", types: ["Bug"], image: "./001.png" },
    { id: "#0011", name: "Metapod", types: ["Bug"], image: "./001.png" },
    { id: "#0012", name: "Butterfree", types: ["Bug", "Flying"], image: "./001.png" },
    { id: "#0013", name: "Weedle", types: ["Bug", "Poison"], image: "./001.png" },
    { id: "#0014", name: "Kakuna", types: ["Bug", "Poison"], image: "./001.png" },
    { id: "#0015", name: "Beedrill", types: ["Bug", "Poison"], image: "./001.png" },
  ];
    const [pokemon,setPokemon] = useState(pokemons);

    return (
      <>
        <div className='card_wrapper'>
          {
            pokemon.map((item) => {
              return(
                <Card key = {item.id} id = {item.id} name = {item.name} type = {item.types} img = {item.image} />
              )
            })
          }
      </div> 
      </>
    )
  }

export default App
