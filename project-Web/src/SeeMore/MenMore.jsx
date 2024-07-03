import './MenMore.css'
import React from 'react'
const MenMore = (props) => {
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
        </div>
    );
}

export default MenMore;