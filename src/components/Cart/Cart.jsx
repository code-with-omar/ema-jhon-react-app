import PropTypes from 'prop-types';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax=(total+totalShipping)*7/100;
    const totalPrice=total+totalShipping+tax;
    return (
        <div className='cart'>
            <h2 className='order-summary'>Order summary </h2>
            <div className='order-summary-info'>
                <h3 className='selected-items spacing'>Selected Items: {cart.length}</h3>
                <h3 className='spacing'>Total Price:${total.toFixed(2)}</h3>
                <h3 className='spacing'>Total Shipping Charge: ${totalShipping.toFixed(2)}</h3>
                <h3 className='spacing'>Tax: ${tax.toFixed(2)}</h3>
                <h1 className='grand-total'>Grand Total: ${totalPrice.toFixed(2)}</h1>
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired,
};
export default Cart;