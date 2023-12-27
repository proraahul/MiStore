import React from 'react';
import ProductReviewCard from './ProductReviewCard';
import './ProductReview.css';

const ProductReview = ({ProductReviews}) => {
  return (
    <div className='ProductReview'>
        {
            ProductReviews.map((item, index)=>{
                return(
                    <ProductReviewCard key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} index={index} />
                )
            })
        }
    </div>
  )
}

export default ProductReview