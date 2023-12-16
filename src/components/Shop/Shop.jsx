import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>Wait product is comming</h2>
            </div>
            <div className='cart-container'>
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;