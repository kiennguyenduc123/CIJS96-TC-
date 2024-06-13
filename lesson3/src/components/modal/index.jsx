import React from 'react';
import './styles.css';

const Modal = (props) => {
    // console.log(props.data)



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