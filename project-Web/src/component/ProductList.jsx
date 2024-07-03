import './ProductList.css'
import React from 'react'
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const { products , search } = props;

    const filteredProductsMen = products.filter((product) =>  {
         return  product.name.toLowerCase().includes(search.toLowerCase())
})
    return ( 
        <div className='product_list'>
            <div className='category'>Đồ Nam</div>
            <div className='products'>
                {
                    filteredProductsMen.length > 0 ? (
                        filteredProductsMen.map((product, index) => (
                            <div className="products-as" key={index}>
                                <img src={product.image} alt={product.name} />
                                <div className="products-details-a">
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                            ))
                        ) : (
                            <p className='nothing'>Không có sản phẩm nào</p>
                        )
                }
            
            </div>
            {/* <div className='category'>Đồ Nữ</div>
            <div className="products">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <img src={product.image} alt={product.name} />
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default ProductList;