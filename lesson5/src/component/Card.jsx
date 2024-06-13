// import Img001 from '../assets/IMG/002.png'
import "./Card.css"
const Card = (props) => {
    
    const output = () => {
        alert(props.name + " Xin Chao ! ")
    }

    return ( 
        <>
            <div className="card" onClick={output}> 
                <img src={props.img}/>
                <p className="pokemon_id">{props.id}</p>
                <p className="pokemon_name">{props.name}</p>
                <div className="pokemon_class_wrapper">
                    {/* <span>{props.type[0]}</span>
                    <span style={{background: "#9056ce",color: 'white'}}>{props.type[1]}</span> */}
                    {
                        props.type.map((type,index) => {
                            return (
                                <span className={type} key={index}>{type}</span>
                            )
                        })
                    }
                </div> 
            </div>

             {/* <div className="card"> 
                <img src={Img001} />
                <p className="pokemon_id">#001</p>
                <p className="pokemon_name">Bulbasaur</p>
                <div className="pokemon_class_wrapper">
                    <span>Grass</span>
                    <span style={{background: "#9056ce",color: 'white'}}>Poison</span>
                </div>
            </div> */}


            {/* <div className="card"> 
                <img src={Img001} />
                <p className="pokemon_id">#001</p>
                <p className="pokemon_name">Bulbasaur</p>
                <div className="pokemon_class_wrapper">
                    <span>Grass</span>
                    <span style={{background: "#9056ce",color: 'white'}}>Poison</span>
                </div>
            </div>  */}
        </>
    )
}

export default Card