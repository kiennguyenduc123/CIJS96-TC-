import React from "react";
import "./Film.css"

const Film = (props) => {

    return (
            <div className='img_content'>
                    <img src={props.image}  />
                    <p>{props.episode}</p>
                    <span>{props.name}</span>
            </div>
    )
}

export default Film;