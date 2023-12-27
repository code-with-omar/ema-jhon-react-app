import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Orders.css'
import ReviewItem from "../ReviewIteam/ReviewItem";

const Orders = () => {
    const carts=useLoaderData()
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                   carts.map(cart=><ReviewItem key={cart.id} product={cart}></ReviewItem>) 
                }
            </div>
            <div className='cart-container'>
                <Cart cart={carts}></Cart>

            </div>
        </div>
    );
};

export default Orders;