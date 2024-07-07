import './Navbarjs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore,faBagShopping,faCartShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Navbarjs = (props) => {

    const { handleSearchChange } = props;

    return (
           <div className='Web'> 
                 <div className='Navbar'>
                <img src="./001.png" className='img' />
                <div className='Navbar_name'>
                    <ul>
                        <Link to= "/" style={{textDecoration: "none"}}><li className='color_li'>Home</li></Link>
                        <li>Đồ Nam</li>
                        <li>Đồ Nữ</li>
                        <li>Đồ Bé Trai</li>
                        <li>Đồ Bé Gái</li>
                    </ul>
                </div>
                <div className='input_nav'>
                    <input 
                        type="text" 
                        placeholder='Bạn Muốn Tìm gì...'
                        onChange={handleSearchChange}
                    />
                    <label htmlFor="" className='icon-a' >
                        <FontAwesomeIcon icon={faSearch} className='icon-b' onClick={handleSearchChange} />
                    </label>
                </div>
                <div className='image_nav'>
                    <FontAwesomeIcon icon={faCircleUser} className='icon' />
                    <FontAwesomeIcon icon={faStore} className='icon' />
                    <FontAwesomeIcon icon={faBagShopping} className='icon' />
                    <FontAwesomeIcon icon={faCartShopping} className='icon' />               
                </div>
            </div>
           </div>
    )
}

export default Navbarjs;