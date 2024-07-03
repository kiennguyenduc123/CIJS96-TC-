import './Navbarzx.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStore,faBagShopping,faCartShopping, faCircleUser} from '@fortawesome/free-solid-svg-icons';

const Navbarzx = (props) => {

    const { handleSearchChange } = props;

    return (
           <div className='Web'> 
                 <div className='Navbar'>
                <img src="./001.png" className='img' />
                <div className='Navbar_name'>
                    <ul>
                        <li className='color_li'>Home</li>
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

            <div className='image'>
                <img src="./057.png" className='img1' />
            </div>
           </div>
    )
}

export default Navbarzx;