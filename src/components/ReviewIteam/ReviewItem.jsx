
import './ReviewItem.css'
const ReviewItem = ({product}) => {
    const {img,id,price,name,quantity}=product
    return (
        <div className='review-iteam'>
           <img src={img} alt="" />
           <div className="review-details">
                <p className='review-title'>{name}</p>
                <p>Price : <span className='orange'>${price}</span></p>
                <p>Order Quantity :<span className='orange'>{quantity}</span> </p>
           </div>
           <div>
                <button className='delete-btn'>D</button>
           </div>
        </div>
    );
};

export default ReviewItem;