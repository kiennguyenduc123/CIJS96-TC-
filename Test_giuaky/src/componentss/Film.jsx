import React from "react";
import "./Film.css"

const Film = (props) => {
    return (
            <div className='img_content' onClick={props.getData} > 
                    <img src={props.image}  />
                    <p>{props.episode}</p>
                    <span>{props.name}</span>
            </div>
    )
}

export default Film;