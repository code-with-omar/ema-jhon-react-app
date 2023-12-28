import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Orders.css'
import ReviewItem from "../ReviewIteam/ReviewItem";
import { useState } from "react";
import { removeFromDb } from "../../../utilities/fakedb";

const Orders = () => {
    const saveCarts = useLoaderData()
    const [carts, setCart] = useState(saveCarts);
    const handleReviewItemRemove = (id) => {
        const reaminigIteam = carts.filter(product => product.id !== id);
        removeFromDb(id)
        setCart(reaminigIteam);
        console.log('hello');
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
                }></Cart>

            </div>
        </div>
    );
};

export default Orders;