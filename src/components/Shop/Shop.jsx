import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newAddCart = [...cart, product];
        setCart(newAddCart);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {products.map(product =>
                    <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className='cart-container'>
                <h2 className='order-summary'>Order summary </h2>
                <div className='order-summary-info'>
                    <h3 className='selected-items spacing'>Selected Items: {cart.length}</h3>
                    <h3 className='spacing'>Total Price:</h3>
                    <h3 className='spacing'>Total Shipping Charge: $</h3>
                    <h3 className='spacing'>Tax: $</h3>
                    <h1 className='grand-total'>Grand Total: $</h1>
                </div>

            </div>
        </div>
    );
};

export default Shop;