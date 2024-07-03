import { useState } from 'react'
import './More.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Navbarcs from './Navbarcs';
import MenMore from './MenMore'
import WomenMore from './WomenMore'
import ChildMore from './ChildMore'
import ChildMenMore from './ChildMenMore';

const More = () => {
  const productMen = [
    {image:"./037.png",name: "Bộ Đồ Thể Thao Nam",price: "899.000"},
    {image:"./038.png" ,name: "Áo PoLo Nam",price: "499.000"},
    {image:"./040.png" ,name: "Áo PoLo Nam Hoa Tiet",price: "399.000"},
    {image:"./041.png" ,name: "Áo Sơ Mi Nam Dài Tay Flannel",price: "299.000"},
  ]
  

  const productWomen = [
    {image:"./042.png" ,name: "Áo T-Shirt Nữ Dáng Rộng ",price: "199.000"},
    {image:"./043.png" ,name: "Áo Len Nữ Ngắn Tay Dệt Kẻ",price: "399.000"},
    {image:"./044.png" ,name: "Áo PoLo Nữ Mắt Chim",price: "299.000"},
    {image:"./045.png" ,name: "Đầm Tiệc Nữ Sang Trọng",price: "399.000"},
  ]
  const productChildren = [
    {image:"./046.png",name: "Áo Thun Trẻ Em Cổ Tròn Cotton", price: "99.500"},
    {image:"./050.png",name: "Áo Khoác Gió Trẻ Em Chống Nước", price: "299.000"},
    {image:"./048.png", name: "Áo Thun Trẻ Em Dài Tay Unicorn", price: "199.000"},
    {image:"./051.png",name: "Đầm Kid Hoạ Tiết Trái Tim", price: "299.000"}
  ]

  const productChildrenMen = [
    {image:"./047.png",name: "Áo Khoác Kid Nhỏ Gia Đình 3c Pro", price: "99.500"},
    {image:"./049.png",name: "Quần Dài Trẻ Em KaKi Túi Sườn", price: "299.000"},
    {image:"./055.png", name: "Sơ Mi Trẻ Em Phối Mũ Nỉ", price: "199.000"},
    {image:"./056.png",name: "Áo PoLo Thể Thao Trẻ Em", price: "299.000"}
  ]

  const [search,setSearch] = useState('');
  const  handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  //Filer Search
  // const filteredProductsMen = productMen.filter((product) => {
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // })

  // const filteredProductsWomen = productWomen.filter((product) => {
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // })

  // const filteredProductsChildren = productChildren.filter((product) => {
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // })


  return (
    <>
      <div className='wrapper'>
        <Navbarcs handleSearchChange = {handleSearchChange} />
      </div>
      <div className='product'>
        <h1 className='h_pro'>Danh Sách Sản Phẩm</h1>
        <button className='chat_support'>
          <FontAwesomeIcon icon={faComment} className='icon_chat'  />
          <p className='support'>Hỗ trợ</p>
        </button>
        <div className="product-content">
          <MenMore products={productMen} search = {search} />
        </div>
        <div className="product-contents">
          <WomenMore products={productWomen} search = {search} />
        </div>
        <div className="product-contentss">
          <ChildMore products={productChildren} search = {search}/>
        </div>
        <div className="product-contentsss">
          <ChildMenMore products={productChildrenMen} search = {search}/>
        </div>
      </div>

      <div className='contentbn'>
          <h1 className='content_a'><Link to="/" target='_blank' style={{textDecoration: "none", color: "black",opacity: "90%"}}>Trang Chủ</Link></h1>
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
                <li>Trang chủ</li>
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

export default More;
