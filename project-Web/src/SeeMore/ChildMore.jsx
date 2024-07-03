import './ChildMore.css'
import React from 'react'
const ChildMore = (props) => {
    const { products , search} = props;

     const filteredProductsChildren = products.filter((product) => 
        product.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className='products_lists'>
        <div className='categoryss'>Đồ Bé Gái</div>
        <div className="productss-a">
            {filteredProductsChildren.length > 0 ? (
                filteredProductsChildren.map((product, index) => (
                    <div className="products-as" key={index}>
                        <img src={product.image} alt={product.name} />
                        <div className="products-details-a">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{position:"absolute",left: "14px"}}>Không có sản phẩm nào</p>
            )}
        </div>
    </div>
    )
};

export default ChildMore;