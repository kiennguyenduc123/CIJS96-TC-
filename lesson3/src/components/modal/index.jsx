import React from 'react';
import './styles.css';
// import { useContext } from 'react';
// import {useParams} from 'react-router-dom'
// import { PokemonContext } from '../../App';

const Modal = (props) => {
    // console.log(props.data)
    // const params = useParams();
    // const pokemonId = params.id;
    // const store = useContext(PokemonContext);
    // const crrPokemon = store.pokemons.find(item => {
    //     const crrid = item.id.split('#')[1];
    //     return crrid == pokemonId
    // })
    // console.log(crr)
    return (
        <div className="modal">
            <div className="content">
                <button style={{ float: 'right' }} onClick={props.getClose}>Close</button>
                <img src={props.data.image} />
                <br />
                <div>
                    <span>Tên pokemon: </span><input type="text" value={props.data.name} onChange = {(e) => {
                       const newPokemon = {
                        ...props.data,
                        name: e.target.value
                       }
                       props.onChangePokemon(newPokemon);
                    }} />
                </div>
                <div>
                    <span>Hệ: </span><select>
                        <option value="">Lửa</option>
                        <option value="">Nước</option>
                    </select>
                </div>
            </div>

            <button className='save' onClick={props.onSave}>Lưu</button>
        </div>
    )
}

export default Modal;