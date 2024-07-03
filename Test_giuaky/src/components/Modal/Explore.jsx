import React from 'react';
import "./Explore.css"

const Explore = (props) => {

    return (
        <div className="movie_card">
                        <div className="img_card">
                            <img src={props.data.image}/>
                        </div>
                        <div className="infomation_movie">
                            <h3 className='name_movie'>{props.data.name}</h3>
                            <p className='movie_epi'>{props.data.episode}</p>
                            <p className='movie_des'>{props.data.description}</p>
                        </div>
        </div>
    )
}

export default Explore;