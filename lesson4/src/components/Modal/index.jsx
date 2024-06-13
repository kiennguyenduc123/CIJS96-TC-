import React from 'react'
import './styles.css'

const Modal = (props) => {
    console.log(props.student);
    return(
        <div className='modal'>
            <div className='content'>
                <img className='img' src="./002.png" />
                <br />
                <div>
                    <span>Tên: </span><input type="text" value={props.student.name}/>
                </div>
                <div>
                    <span>Hệ: </span><select name="" id="">
                        <option value="">Lửa</option>
                        <option value="">Nước</option>
                        <option value="">Kim</option>
                        <option value="">Mộc</option>
                    </select>
                </div>


            </div>
        </div>
    )
}

export default Modal;