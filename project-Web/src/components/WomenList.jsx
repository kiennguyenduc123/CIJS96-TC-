import './WomenList.css';
import React from 'react';

const WomenList = (props) => {
    const { products,search, onProductClick  } = props;

    const filteredProductsWomen = products.filter((product) => 
           product.name.toLowerCase().includes(search.toLowerCase())
    )

    return ( 
        <div className='product_lists'>
            <div className='categorys'>Đồ Nữ</div>
            <div className="productss">
                {filteredProductsWomen.length > 0 ? (
                    filteredProductsWomen.map((product, index) => (
                        <div className="products-a" key={index} onClick={() => onProductClick(product)} >
                            <img src={product.image} alt={product.name} />
                            <div className="products-details">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <button className="add-to-cart-btnsg" >
                                    Add modal
                                </button>
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

export default WomenList;