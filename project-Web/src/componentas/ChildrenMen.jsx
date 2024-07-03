import './ChildrenMen.css'
import Navbaraz from './Navbaraz.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import MenSweater from './MenSweater.jsx';
import MenHome from './MenHome.jsx';
import { Link } from 'react-router-dom';
const ChildrenMen = () => {

    const productMen = [
        {image:"./027.png",name: "Áo Len Bé Trai Cổ 3 Phân",price: "499.000"},
        {image:"./028.png" ,name: "Áo Len Bé Trai",price: "299.000"},
        {image:"./029.png" ,name: "Áo Len Bé Trai Đẹp",price: "399.000"},
        {image:"./030.png" ,name: "Áo Len Bé Trai GiLe  ",price: "299.000"},
      ]

    const productStyle = [
        {image:"./031.png" ,name: "Bộ Shorts Kate Bé Trai ",price: "699.000"},
        {image:"./032.png" ,name: "Bộ TOLE Lửng Bé Trai",price: "199.000"},
        {image:"./033.png" ,name: "Bộ Thun Lửng Bé Gái",price: "599.000"},
        {image:"./035.png" ,name: "Bộ Shorts Karty Bé Trai",price: "399.000"},
    ]

    const [search,setSearch] = useState('');
    const  handleSearchChange = (e) => {
        setSearch(e.target.value);
    }


    return (
        <>
          <div className='wrapper'>
            <Navbaraz handleSearchChange = {handleSearchChange} />
          </div>
          <div className='product_women'>
            <h1 className='h-pros'>Danh sách sản phẩm</h1>
            <button className='chat_support'>
              <FontAwesomeIcon icon={faComment} className='icon_chat'  />
              <p className='support'>Hỗ trợ</p>
            </button>
            <div className="product-custom-men">
                <MenSweater products={productMen} search = {search} />
            </div>
            <div className="product-customs">
              <MenHome products={ productStyle} search = {search} />
            </div>
          </div>
    
          <div className='contents'>
          <h1 className='content_a'><Link to="/seemore" target='_blank' style={{textDecoration: "none", color: "black",opacity: "90%"}}>XEM THÊM</Link></h1>
              <div className='content-main'>
                <div className='content-a'>
                  <h1>Về Chúng Tôi</h1>
                  <p>Vuong-Group - Khoác lên niềm vui gia đình Việt Nam 2022,Công ty Cổ Phần Thương mại về Dịch vụ Vuong -Group được thành lập với mục đích ban đầu được hoạt động
                      trong lĩnh vực sản xuất thời trang xuất khẩu với các sản phẩm chủ yếu làm từ len và sợi.Năm 2023 thương hiệu thời trang VPS ra đời, tự hào trở thành một cột mốc đáng
                      nhớ của doanh nghiệp Việt trong ngành thời trang. Mang đến niềm vui cho hàng triệu gia đình Việt VPS hướng đến mục tiêu mang lại niềm vui mặc mới mỗi ngày cho hàng triệu người tiêu
                       dùng Việt. Chúng tôi tin rằng người dân Việt Nam cũng đang hướng đến một cuộc sống năng động, tích cực hơn.
                  </p>
                </div>
                
                <div className='content-b'>
                  <h1>ĐƯỜNG DẪN</h1>
                  <ul>
                    <li><Link to="/" style={{textDecoration: "none", color:"white"}}>Trang chủ</Link></li>
                    <li>Về chúng tôi</li>
                    <li>Thông tin liên hệ</li>
                  </ul>
                </div>
    
                <div className='content-c'>
                  <h1>THÔNG TIN LIÊN HỆ</h1>
                      <ul>
                        <li>
                          <span >
                            <FontAwesomeIcon icon={faLocationDot} />
                             Địa chỉ: 125A6 Trần Huy Liệu Quận Ba Đình Hà Nội
                          </span>
                      </li>
    
                        <li>                  
                           <span >
                              <FontAwesomeIcon icon={faPhone} />
                              +84 363652758
                           </span>
                        </li>
    
                        <li>
                          <span >
                            <FontAwesomeIcon  />
                            <p>Facebook</p>
                          </span>                
                        </li>
    
                        <li>
                          <span >
                            <FontAwesomeIcon icon={faEnvelope} />
                             nguyenquocvuong27042002@gmail.com
                          </span>
                        </li>
                      </ul>
                      <input type="text" placeholder='Email address'/> 
                      <button>Gửi</button>
                    </div>
                </div>
          </div>
            
        </>
      )
    }

export default ChildrenMen;