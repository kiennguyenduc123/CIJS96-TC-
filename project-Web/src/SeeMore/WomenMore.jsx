import './WomenMore.css';
import React from 'react';
const WomenMore = (props) => {
    const { products,search } = props;

    const filteredProductsWomen = products.filter((product) => 
           product.name.toLowerCase().includes(search.toLowerCase())
    )

    return ( 
        <div className='product_lists'>
            <div className='categorys'>Đồ Nữ</div>
            <div className="productss">
                {filteredProductsWomen.length > 0 ? (
                    filteredProductsWomen.map((product, index) => (
                        <div className="products-a" key={index}>
                            <img src={product.image} alt={product.name} />
                            <div className="products-details">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Không có sản phẩm nào</p>
                )}
            </div>
        </div>
    );
}

export default WomenMore;