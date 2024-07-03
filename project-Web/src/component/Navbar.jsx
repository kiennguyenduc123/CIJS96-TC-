import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore,faBagShopping,faCartShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {useState} from 'react'
const Navbar = (props) => {
    const { handleSearchChange } = props;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
           <div className='Web'> 
                 <div className='Navbar'>
                <img src="./001.png" className='img' />
                <div className='Navbar_name'>
                    <ul>
                        <li className='color_li'>Home</li>
                        <li><Link to="/men" target='_blank' style={{textDecoration: "none", color: "black"}}>Đồ Nam</Link></li>
                        <li><Link to="/women" target='_blank' style={{textDecoration: "none", color: "black"}}>Đồ Nữ</Link></li>
                        <li><Link to="/childrenmen" target='_blank' style={{textDecoration: "none", color: "black"}}>Đồ Bé Trai</Link></li>
                        <li><Link to="/children" target='_blank' style={{textDecoration: "none", color: "black"}}>Đồ Bé Gái</Link></li>
                    </ul>
                </div>
                <div className='input_nav'>
                    <input 
                        type="text" 
                        placeholder='Bạn Muốn Tìm gì...'
                        onChange={handleSearchChange}
                    />
                    <label htmlFor="" className='icon-a' onClick={handleSearchChange}>
                        <FontAwesomeIcon icon={faSearch} className='icon-b' onClick={handleSearchChange} />
                    </label>
                </div>
                <div className='image_nav'>
                    <div className="user-icon-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <FontAwesomeIcon icon={faCircleUser} className='icon' />
                        {isHovered && (
                            <div className="hover-options">
                               <p><Link to="/Login" target='_blank'className='hover_pro'>Đăng nhập</Link></p>
                               <p><Link to="/Register" target='_blank'className='hover_pro'>Đăng ký</Link></p>
                            </div>
                        )}
                    </div>
                    <Link to = "/google.html" target='_blank' style={{textDecoration: "none", color: "white"}}> <FontAwesomeIcon icon={faStore} className='icon' /></Link>
                    <FontAwesomeIcon icon={faBagShopping} className='icon' />
                    <FontAwesomeIcon icon={faCartShopping} className='icon' />               
                </div>
            </div>

            <div className='image'>
                <img src="./image 5.png" className='img1' />
            </div>
           </div>
    )
}

export default Navbar;