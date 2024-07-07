import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import ProductList from './component/ProductList'
import ProductWomen from './component/ProductWomen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faLocationDot,faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import ProductChild from './component/ProductChild'
import { Link } from 'react-router-dom'
import ProductModal from './Modal/ProductModal'

function App() {
  const productMen = [
    {id: "1",image:"./image 29.png",name: "Áo Nam Tay Ngắn",price: "199.000",description: "Áo nam tay ngắn hàng cotton chất lượng cao và giá thành cực tốt."},
    {id: "2",image:"./image 27.png" ,name: "Áo Len Lông Cừu Úc",price: "499.000",description: "Áo len lông cừu Úc sang trọng, giữ ấm cực tốt vào mùa đông."},
    {id: "3",image:"./image 28.png" ,name: "Áo Len Nam Gile",price: "399.000",description: "Áo len lông cừu Úc sang trọng, giữ ấm cực tốt vào mùa đông."},
    {id: "4" ,image:"./image 26.png" ,name: "Áo Len Nam",price: "299.000",description: "Áo len lông cừu Úc sang trọng, giữ ấm cực tốt vào mùa đông."},
  ]
  

  const productWomen = [
    {id: "5",image:"./image 22.png" ,name: "Áo Tay Dài Nữ ",price: "299.000",description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh."},
    {id: "6",image:"./image 24.png" ,name: "Áo Len Cổ Tím",price: "399.000",description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh." },
    {id: "7",image:"./image 23.png" ,name: "Áo Len Tay Lửng Nữ",price: "299.000",description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh."},
    {id: "8",image:"./image 25.png" ,name: "Áo Len Nữ",price: "399.000",description: "Áo tay dài nữ thiết kế đơn giản, phù hợp với mọi hoàn cảnh."},
  ]

  const productChildren = [
    {id: "9",image:"./image 33.png",name: "Áo Nam Tay Dài", price: "199.000",description: "Áo nam tay dài thời trang, phong cách trẻ trung và năng động."},
    {id: "10",image:"./image 32.png",name: "Áo Nữ Tay Ngắn", price: "199.000",description: "Áo nữ tay ngắn, phù hợp cho những ngày nắng nóng." },
    {id: "11",image:"./image 31.png", name: "Áo Nam Tay Ngắn", price: "199.000",description: "Áo nam tay ngắn thiết kế đơn giản, phù hợp với các hoàn cảnh khác nhau."},
    {id: "12",image:"./image 30.png",name: "Áo Len Nữ Tay Dài ", price: "199.000",description: "Áo nam tay ngắn thiết kế đơn giản, phù hợp với các hoàn cảnh khác nhau."}
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


  const [selectedProduct, setSelectProduct] = useState(null);

  const handleClickProduct = (product) => {
    setSelectProduct(product);
  }

  const handleClosedModal = () => {
    setSelectProduct(null);
  }

  return (
    <>
      <div className='wrapper'>
        <Navbar handleSearchChange = {handleSearchChange} />
      </div>
      <div className='productg'>
        <h1 className='hs_pros'>Danh Sách Sản Phẩm</h1>
        <button className='chat_support'>
          <FontAwesomeIcon icon={faComment} className='icon_chat'  />
          <p className='support'>Hỗ trợ</p>
        </button>
        <div className="product-contenth">
          <ProductList products={productMen} search = {search} onProductClick = {handleClickProduct} />
        </div>
        <div className="product-contentsh">
          <ProductWomen products={productWomen} search = {search} onProductClick = {handleClickProduct} />
        </div>
        <div className="product-contentss">
          <ProductChild products={productChildren} search = {search} onProductClick = {handleClickProduct}/>
        </div>

        
      </div>

      <div className='contentcz'>
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
                <li>Trang chủ</li>
                <li><Link to="/introduce" target='_blank' style={{textDecoration: "none" , color: "white"}}>Về Chúng Tôi</Link></li>
                <li><Link to="/contactinfor" target='_blank' style={{textDecoration: "none" , color: "white"}}>Thông tin liên hệ</Link></li>
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
      {
          selectedProduct && <ProductModal product ={selectedProduct} onClose = {handleClosedModal} />
      }
    </>
  )
}

export default App;
