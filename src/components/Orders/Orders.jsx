import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Orders.css'
import ReviewItem from "../ReviewIteam/ReviewItem";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../../utilities/fakedb";

const Orders = () => {
    const saveCarts = useLoaderData()
    const [carts, setCart] = useState(saveCarts);
    const handleReviewItemRemove = (id) => {
        const reaminigIteam = carts.filter(product => product.id !== id);
        removeFromDb(id)
        setCart(reaminigIteam);
    }
    const handleRemoveFullCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    carts
                        .map(cart => <ReviewItem key={cart.id} product={cart} handleReviewItemRemove={handleReviewItemRemove}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={carts
                } handleRemoveFullCart={handleRemoveFullCart}></Cart>

            </div>
        </div>
    );
};

export default Orders;