import React from 'react';
import "./Explore.css"

const Explore = (props) => {

    return (
        <div className="Explore">
            <div className="content">
                <img src={props.data.image} />
                <br />
                <div>
                    <span>Tên Phim: {props.name} </span>
                </div>
                <div>
                    <span>Miêu tả phim: {props.description}</span>   
                </div>
                <div>
                    <span>Thể loại : {props.episode}</span>
                </div>
            </div>
        </div>
    )
}

export default Explore;