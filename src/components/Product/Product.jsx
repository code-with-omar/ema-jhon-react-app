import './Product.css';
import PropTypes from 'prop-types';
const Product = (props) => {
    console.log(props.product)
    const { name, price, img, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="Image does not found" />
            <div className='product-item'>
                <h2 className='product-name'>{name}</h2>
                <p className='price'>Price : ${price}</p>
                <p className='manufacturer'>Manufacturer :{seller}</p>
                <p className='rating'>Ratings: {ratings} Star</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object.isRequired,

};
export default Product;