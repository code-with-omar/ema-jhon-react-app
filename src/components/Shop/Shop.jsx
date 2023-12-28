import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    //Add product in local store
    const handleAddToCart = (product) => {
        const newAddCart = [...cart, product];
        setCart(newAddCart);
        addToDb(product.id)
    }
    // fetch saved products data in local store here

    useEffect(() => {
        const storedData = getShoppingCart();
        const savedCart = [];
        // step 1: get id
        // console.log(storedData)
        for (const id in storedData) {
            const savedProduct = products.find(product => product.id === id);
            const quantity = storedData[id];
            if (savedProduct) {
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
        }

        setCart(savedCart);
    }, [products])

    const handleRemoveFullCart=()=>{
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {products.map(product =>
                    <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFullCart={handleRemoveFullCart}></Cart>

            </div>
        </div>
    );
};

export default Shop;