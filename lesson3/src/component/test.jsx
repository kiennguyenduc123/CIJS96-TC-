import { useState,useEffect } from "react";
import "./Card.jsx"
// import {Search} = Input;

function Api () {
    
    const [showModal, setShowModal] = useState(false);
    const [pokemonSelected, setPokemonSelected] = useState("");
    const [pokeSearch, setpokeSearch] = useState("");
    const [pokemons,setPokemons] = useState([]);
    const [filteredPokemons,setFilteredPokemons] = useState([]);
    const [listClass,setListClass] = useState({});
    const [selectedTypes, setSelectedTypes] = useState({});

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const reponse = await fetch(' https://pokeapi.co/api/v2/pokemon/')
                const data = await reponse.json();
                const pokemonDetails = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return await res.json();
                    })
                );

                // const formattedPokemons = pokemonDetails.map(pokemon => ({
                //     id: `${String(pokemon.id).padStart(4,'0')}`,
                //     name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                //     types: pokemon.types.map(typeInfo => typeInfo.type.name.charAt(0).toUpperCase() + typ),
                //     image: pokemon.sprites.front_default,
                // })); 

                // const uniqueTypes = {};
                // formattedPokemons.forEach(pokemon => {
                //     pokemon.types.forEach(type => {
                //         uniqueTypes[type] = true; 
                //     });
                // });

                setPokemons(formattedPokemons);
                setFilteredPokemons(formattedPokemons);
                setListClass(uniqueTypes);
                setSelectedTypes(uniqueTypes);
            } catch(error) {
                console.log('Failed to fetch Pokemon data: ', error);
            }
        }
    })
}

export default Api;