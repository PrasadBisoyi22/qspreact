import React, { useState } from 'react'
import './Card.css'
const Card = ({productData}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-container">

      <div className="image-wrapper">
        <div className="category-tab">
          {productData.category}
        </div>
        <img 
          src={productData.image} 
          alt={productData.title} 
          className="product-image" 
        />
      </div>
      <div className="content-wrapper">
        {/* Title and Price Row */}
        <div className="title-price-row">
          <h2 className="product-title">{productData.title}</h2>
          <span className="price-badge">{productData.price}</span>
        </div>

        {/* Description */}
        <p className="product-description">{productData.description}</p>

        {/* Tags Row */}
        {/* <div className="tags-row">
          {productData.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div> */}

        {/* Add To Cart Button */}
        <button className="add-to-cart-btn">
          <svg 
            className="cart-icon" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            width="16" 
            height="16"
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Card;