import "./Card.css"

const Card = (props) => {

    let poppuu = document.getElementById("popuu");

    function openPopuu (){
        poppuu.classList.add("open-popuu");
    }
    function closePopuu (){
        poppuu.classList.remove("open-popuu");
    }
    return (
        <>
            <div className='student'>
                <p className='student_id'>{props.id}</p>
                <p className='student_name'>{props.name}</p>
                <p className='student_address'>{props.address}</p>
                <p className='stdutent_identification'>{props.identification}</p>
                <div className="container">
                    <button type="submit" className="btn" onClick={openPopuu}>Submit</button>
                    <div className="popuu" id="popuu">
                        <img src="./tick.png"/>
                        <h2>Thank you</h2>
                        <p>Your details has been successfully submit. Thank!!</p>
                        <button type="submit" onClick={closePopuu}>OK</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;