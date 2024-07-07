import './ProductWomen.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const ProductWomen = (props) => {
    const { products,search,onProductClick } = props;

    const filteredProductsWomen = products.filter((product) => 
           product.name.toLowerCase().includes(search.toLowerCase())
    )


    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    useEffect(() => {
        console.log(cartItems)

    },[cartItems])

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    };

    return ( 
        <div className='product_lists'>
            <div className='categorysb'>Đồ Nữ</div>
            <div className="productssz">
                {filteredProductsWomen.length > 0 ? (
                    filteredProductsWomen.map((product, index) => (
                        <div className="products-a" key={index} onClick={() => onProductClick(product)}>
                            <img src={product.image} alt={product.name}  />
                            <div className="products-details">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <div className='add-remove-container'>
                                        {!cartItems[product.id] ? (
                                            <FontAwesomeIcon icon={faPlus} className="add" onClick={() => addToCart(product.id)} />
                                        ) : (
                                             <div className='product-item-counter'>
                                                <FontAwesomeIcon icon={faMinus} onClick={() => removeFromCart(product.id)} />
                                                <p>{cartItems[product.id]}</p>
                                                <FontAwesomeIcon icon={faPlus} onClick={() => addToCart(product.id)} />
                                                </div>
                                         )}
                                </div>
                                <button className="add-to-modal-btn" onClick={(e) => e.stopPropagation()}>
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

export default ProductWomen;