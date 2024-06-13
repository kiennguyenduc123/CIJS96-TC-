import './Card.css'
const Card = () => {


    return (
        <>
            <div className='Card'>
                <div className='navbar'>
                    <div className='navbar_name'>
                        <span className='item1'>Animation</span>
                        <span className='item2'>Home</span>
                        <span className='item2'>List anime</span>
                    </div>
                    <div className='navbar_input'>
                        <input type="text" placeholder='Search anime or movie' />
                    </div>
                </div>
                  <div className='Content'>
                    <h1>Explore</h1>
                    <p>What are you gonna watch today ?</p>
                    <div className='Image'>
                        <img src="./img1.png" alt="" /> 
                        <div className='overlay'>
                            <h1>Weather With You</h1>
                            <p>Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize thẻ thin veneer of peace between neighboring countries Ostania and Westalis.</p>
                        </div>
                    </div>                    
                </div>

                <div className='img'>
                    <h1>New Release</h1>
                </div>
                {/* <div className='Img'> 
                    <h1>New Release</h1>
                    <div className='Img_content'>
                        <img src="./img2.png" alt="" />
                        <p>Episode 1018</p>
                        <span>One Piece</span>
                    </div>
                    <div className='Img_content'>
                        <img src="./img3.png" alt="" />
                        <p>Eplsode 250</p>
                        <span className='span1'>Boruto Naruto Next Generation</span>
                    </div>
                    <div className='Img_content'>
                        <img src="./img4.png" alt="" />
                        <p>Episode 07</p>
                        <span>Spy X Family</span>
                    </div>
                    <div className='Img_content'>
                        <img src="./img5.png" alt="" />
                        <p>Eplsode 28</p>
                        <span>Shingeki no kyoujin</span>
                    </div>
                    <div className='Img_content'>
                        <img src="./img6.png" alt="" />
                        <p>Eplsode 28</p>
                        <span>Captain Tsubasa</span>
                    </div>
                    <div className='Img_content'>
                        <img src="./img7.png" alt="" />
                        <p>Epsisode 28</p>
                        <span>Aoashi</span>
                    </div>
                </div>  */}
            </div>
        </>
    )
}

export default Card;