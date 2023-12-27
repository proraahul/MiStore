import React from 'react';
import './ProductReviewCard.css'

const ProductReviewCard = ({price, name, image, review}) => {
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt={name} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard