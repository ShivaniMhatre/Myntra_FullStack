import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import api from '../Config/API';
import '../Product/YourProduct.css'
import { useNavigate } from 'react-router-dom';

const YourProduct = () => {
    const [YourProduct, setYourProduct] = useState([]);
   
    const route = useNavigate()

    useEffect(() => {
        async function getyourProduct() {
            const token = JSON.parse(localStorage.getItem('Token'))
            const response = await api.post('/yourProduct', { token })
            if (response.data.success) {
                setYourProduct(response.data.product)
            }
        } getyourProduct()
    }, [])

    
    return (
        <div>
            <Navbar />
            <div id='your_product_body'>

                {YourProduct?.length ?
                    <div id='inner_product'>
                        {YourProduct.map((product) => (
                            <div key={product._id} className='products' onClick={() => route(`/single/${product._id}`)}>
                                <div id='image'>
                                    <img src={product.image} />
                                </div>
                                <div id='detail'>
                                    <h2>{product.name}</h2>
                                    <h2>{product.price}</h2>
                                    <h3>{product.d_price}</h3>
                                </div>
                            </div>
                        ))}
                    </div> : <div>No Products found.</div>}
            </div>
           
        </div>
    )
}

export default YourProduct