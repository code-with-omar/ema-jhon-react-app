import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({cart,handleRemoveFullCart,children}) => {
   
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // product.quantity=product.quantity|| 1;
        total = total + (product.price * product.quantity);
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity
    }
    const tax = (total + totalShipping) * 7 / 100;
    const totalPrice = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h2 className='order-summary'>Order summary </h2>
            <div className='order-summary-info'>
                <h3 className='selected-items spacing'>Selected Items: {quantity}</h3>
                <h3 className='spacing'>Total Price:${total.toFixed(2)}</h3>
                <h3 className='spacing'>Total Shipping Charge: ${totalShipping.toFixed(2)}</h3>
                <h3 className='spacing'>Tax: ${tax.toFixed(2)}</h3>
                <h1 className='grand-total'>Grand Total: ${totalPrice.toFixed(2)}</h1>
                <button onClick={handleRemoveFullCart}className='clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                {children}
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
};
export default Cart;