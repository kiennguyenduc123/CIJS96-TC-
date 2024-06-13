import React from 'react';
import { useState } from 'react'
import './App.css'
import Card from './component/Card.jsx'
import Modal from './components/modal/index.jsx';

function App() {
    const pokemons = [
      { id: "#0001", name: "Bulbasaur", types: ["Grass", "Poison"], image: "./001.png", class:"Grass"},
      { id: "#0002", name: "Ivysaur", types: ["Grass", "Poison"], image: "./002.png", class:"Grass" },
      { id: "#0003", name: "Venusaur", types: ["Grass", "Poison"], image: "./003.png", class:"Grass"},
      { id: "#0004", name: "Charmander", types: ["Fire"], image: "./004.png", class:"Fire" },
      { id: "#0005", name: "Charmeleon", types: ["Fire"], image: "./005.png",class: "Fire" },
      { id: "#0006", name: "Charizard", types: ["Fire", "Flying"], image: "./006.png",class: "Fire" },
      { id: "#0007", name: "Squirtle", types: ["Water"], image: "./007.png",class: "Water" },
      { id: "#0008", name: "Wartortle", types: ["Water"], image: "./008.png",class: "Water" },
      { id: "#0009", name: "Blastoise", types: ["Water"], image: "./009.png",class: "Water" },
      { id: "#0010", name: "Caterpie", types: ["Bug"], image: "./010.png",class: "Bug" },
      { id: "#0011", name: "Metapod", types: ["Bug"], image: "./011.png",class: "Bug" },
      { id: "#0012", name: "Butterfree", types: ["Bug", "Flying"], image: "./012.png",class: "Bug" },
      { id: "#0013", name: "Weedle", types: ["Bug", "Poison"], image: "./013.png",class: "Bug" },
      { id: "#0014", name: "Kakuna", types: ["Bug", "Poison"], image: "./014.png",class: "Bug" },
    ];
    const [pokeSearch,setpokeSearch] = useState("");
    const [listData,setListData] = useState(pokemons);
    const [pokData,setPokData] = useState(null);

    // const filterPoke = pokemons.filter((poke) => {
    //   return (
    //     poke.name.toLowerCase().includes(pokeSearch.toLowerCase())
    //   )
    // });

    const ListClass = {};
    pokemons.forEach((pokemon) => {
      return ListClass[pokemon.class] = 1;  
    })


    console.log(ListClass);
    
    const handleCheckboxChange = (classType, checked) => {
      if (checked) {
        const filteredPokemons = pokemons.filter(pokemon => pokemon.class === classType);
        setListData([...filteredPokemons]);
      } else {
        const filteredPokemons = listData.filter(pokemon => pokemon.class !== classType);
        setListData(filteredPokemons);
      }
    };

    const handleSearch = () => {
      const filterPokes = pokemons.filter(poke => poke.name.toLowerCase().includes(pokeSearch.toLowerCase()));
      setListData(filterPokes);
    }

     // const onChangePokeSearch = (pokemon) => {
    //   setpokeSearch(pokemon);
    //   console.log(pokeSearch);
    // }
    console.log(pokeSearch);


    const handleData = (item) => {
      setPokData(item);
    }

    const onChangePokemon = (items) => {
      setPokData(items)
    }
    
    const saveData = () => {
      const index = listData.findIndex(item => item.id === pokData.id); // tim va tra ve ket qua la vi tri
      if(index > -1) {
        listData[index] = {
          ...listData[index],
          ...pokData,
        };
        // setListData([...listData]);
        setPokData(null);
      }
    }
  return (
    <>
    <div className='Search'>
            <input type="text" placeholder='Tìm kiếm con pokemon' onChange={(e) => setpokeSearch(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
    </div>
    <div className='Box'>
        <p>
          {
            Object.keys(ListClass).map(key => {
              return <p className='item' key = {key}>
                <input type="checkbox" id={key} onChange={(e) => handleCheckboxChange(key, e.target.checked)} />
                <label htmlFor={key}>{key}</label>
              </p>
            })
          }
        </p>
        {/* <p>
          <input type="Checkbox" id="possion" />
          <label htmlFor="possion">Possion</label>
        </p>
        <p>
          <input type="Checkbox" id="fire" />
          <label htmlFor="fire">Fire</label>
        </p>
        <p>
          <input type="Checkbox" id="water" />
          <label htmlFor="water">Water</label>
        </p> */}
    </div>
       <div className='card_wrapper'>
          {
            listData.length > 0 ? listData.map((pokemon) => {
              return(
                <Card key = {pokemon.id} id = {pokemon.id} name = {pokemon.name} type = {pokemon.types} img = {pokemon.image} 
                  getData = {() => handleData(pokemon)} 
                />
              )
            }) : <h1>No Data........</h1>
          }
        {pokData && <Modal data={pokData} getClose = {() => setPokData(null)} onChangePokemon = {onChangePokemon} onSave = {saveData} /> }
      </div>
    </>
  )
}

export default App;
