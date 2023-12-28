import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css'
const ReviewItem = ({ product ,handleReviewItemRemove}) => {
    const { img, id, price, name, quantity } = product
    return (
        <div className='review-iteam'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='review-title'>{name}</p>
                <p>Price : <span className='orange'>${price}</span></p>
                <p>Order Quantity :<span className='orange'>{quantity}</span> </p>
            </div>
            <div className='delete-btn-wrap'>
                <button className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} onClick={()=>handleReviewItemRemove(id)}/></button>
            </div>
        </div>
    );
};

export default ReviewItem;