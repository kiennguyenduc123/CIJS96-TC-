import './MenSweater.css'
import React from 'react'

const MenSweater = (props) => {
    const { products , search,onProductClick } = props;

    const filteredProductsMen = products.filter((product) =>  {
         return  product.name.toLowerCase().includes(search.toLowerCase())
})
    return ( 
        <div className='product_list'>
            <div className='category'>Áo Len Bé Trai</div>
            <div className='products'>
                {
                    filteredProductsMen.length > 0 ? (
                        filteredProductsMen.map((product, index) => (
                            <div className="products-as" key={index} onClick={() => onProductClick(product)}>
                                <img src={product.image} alt={product.name} />
                                <div className="products-details-a">
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                    <button className="add-to-cart-btns" >
                                        Add modal
                                    </button>
                                </div>
                            </div>
                            ))
                        ) : (
                            <p className='nothing'>Không có sản phẩm nào</p>
                        )
                }
            
            </div>
        </div>
    );
}

export default MenSweater;