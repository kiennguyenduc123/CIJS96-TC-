import React from 'react';
import { useState } from 'react'
import './App.css'
import Card from './component/Card.jsx'
import Modal from './components/modal/index.jsx';
import { useEffect } from 'react';
import Api from './component/test.jsx';
import { useSearchParams, Outlet } from 'react-router-dom';
import { createContext } from 'react';

// export const PokemonContext = createContext();

function App() {
    const pokemons = [
      { id: "#0001", name: "Bulbasaur", types: ["Grass", "Poison"], image: "./001.png", class:"Grass"},
      { id: "#0002", name: "Ivysaur", types: ["Grass", "Poison"], image: "./002.png", class:"Grass" },
      { id: "#0003", name: "Venusaur", types: ["Grass", "Poison"], image: "./003.png", class:"Grass"},
      { id: "#0004", name: "Charmander", types: ["Fire","Bug"], image: "./004.png", class:"Fire" },
      { id: "#0005", name: "Charmeleon", types: ["Fire"], image: "./005.png",class: "Fire" },
      { id: "#0006", name: "Charizard", types: ["Fire", "Flying"], image: "./006.png",class: "Fire" },
      { id: "#0007", name: "Squirtle", types: ["Water","Flying"], image: "./007.png",class: "Water" },
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

    const [pokemon,setPokemon] = useState([]);
    const [filteredPokemons,setFilteredPokemons] = useState([]);
    const [listClass,setListClass] = useState({});
    const [selectedTypes, setSelectedTypes] = useState({});

    const [query,setQuery] = useSearchParams();
    const valueQuerryname = query.get('pokemonName')
    console.log(query.get('pokemonName'))
    
    useEffect(() => {
      const fetchPokemons = async () => {
          try {
              const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
              const data = await response.json();
              const pokemonDetails = await Promise.all(
                  data.results.map(async (pokemon) => {
                      const res = await fetch(pokemon.url);
                      return await res.json();
                  })
              );


              const formattedPokemons = pokemonDetails.map(pokemon => ({
                  id: `#${String(pokemon.id).padStart(4, '0')}`,
                  name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                  types: pokemon.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)),
                  image: pokemon.sprites.front_default,
              }));

              console.log(formattedPokemons);
              // const uniqueTypes = {};
              // formattedPokemons.forEach(pokemon => {
              //     pokemon.types.forEach(type => {
              //         uniqueTypes[type] = true;
              //     });
              // });

              // setPokemon(formattedPokemons);
              // setFilteredPokemons(formattedPokemons);
              // setListClass(uniqueTypes);
              // setSelectedTypes(uniqueTypes);
          } catch (error) {
              console.error('Failed to fetch Pokémon data:', error);
          }
      };

      fetchPokemons();
  }, []);


    // const filterPoke = pokemons.filter((poke) => {
    //   return (
    //     poke.name.toLowerCase().includes(pokeSearch.toLowerCase())
    //   )
    // });

    // const ListClass = {};
    // pokemons.forEach((pokemon) => {
    //   return ListClass[pokemon.class] = 1;  
    // })
     // console.log(ListClass);
     const handleCheckboxChange = (classType, checked) => {
      if (checked) {
        const filteredPokemons = pokemons.filter(pokemon => pokemon.class === classType);
        setListData([...filteredPokemons]);
      } else {
        const filteredPokemons = listData.filter(pokemon => pokemon.class !== classType);
        setListData(filteredPokemons);
      }
    };
    
    const [filterTypes, setFilterTypes] = useState({});
    const filterTypesValues = {};
    pokemons.forEach(types => {
      types.types.forEach(type => {
        if(!filterTypesValues[type]) {
          filterTypesValues[type] = true;
        }
      })
    })

    useEffect(() => {
      setFilterTypes(filterTypesValues)
    }, []);
    
    const handleChangeFilter = (key) => {
      setFilterTypes((prev) => {
        const newFilter = {
          ...prev,
          [key] : !prev[key],
        }
        return newFilter;
      })
    }


    const handleSearch = () => {
      // const filterPokes = pokemons.filter(poke => poke.name.toLowerCase().includes(pokeSearch.toLowerCase()));
      // setListData(filterPokes);
      setListData();
      const filter = pokemons.filter((poke) => {
        const checkSearch = poke.name.toLowerCase().includes(pokeSearch.toLowerCase())
        const checkFilter = poke.types.some((type) => filterTypes[type])
        return checkSearch && checkFilter;
      })
      setListData(filter); 
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
    // <PokemonContext value={{listData}}>
    <>
    <div className='Search'>
            <input type="text" placeholder='Tìm kiếm con pokemon' onChange={(e) =>{ 
              setpokeSearch(e.target.value)
              setQuery({
                pokemonName:e.target.value
              });
              }} />
            <button onClick={handleSearch}>Search</button>
    </div>
    <div className='Box'>
        <p>
          {
            Object.keys(filterTypesValues).map(key => {
              return <p className='item' key = {key}>
                <input type="checkbox" id={key} onChange={(e) => handleCheckboxChange(key, e.target.checked)} checked = {filterTypes[key]} onClick={() => {handleChangeFilter(key)}} />
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
            listData.length > 0 ? listData.filter(item => {
              return valueQuerryname ? item.name.toLowerCase().includes(valueQuerryname.toLowerCase()) : true
            }).map((pokemon) => {
              return(
                <Card key = {pokemon.id} id = {pokemon.id} name = {pokemon.name} type = {pokemon.types} img = {pokemon.image} 
                  getData = {() => handleData(pokemon)} 
                />
              )
            }) : <h1>No Data........</h1>
          }
        {pokData && <Modal data={pokData} getClose = {() => setPokData(null)} onChangePokemon = {onChangePokemon} onSave = {saveData} /> }
      </div>
      {/* <Outlet /> */}
    </>
    // </PokemonContext>
  )
}

export default App;
