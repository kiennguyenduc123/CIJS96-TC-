import './MenHome.css';
import React from 'react';

const MenHome = (props) => {
    const { products,search,onProductClick } = props;

    const filteredProductsWomen = products.filter((product) => 
           product.name.toLowerCase().includes(search.toLowerCase())
    )

    return ( 
        <div className='product_listz'>
            <div className='categoryz'>Thời Trang Mặc Nhà</div>
            <div className="productsz">
                {filteredProductsWomen.length > 0 ? (
                    filteredProductsWomen.map((product, index) => (
                        <div className="products_ax" key={index}  onClick={() => onProductClick(product)}>
                            <img src={product.image} alt={product.name} />
                            <div className="productsz-detail">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <button className="add-to-cart-btns" >
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

export default MenHome;