import React, {useState, useContext} from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    const alreadyInCart = cartItems.some(item => item.id === img.id)
    
    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>

            {<i 
                className={`ri-heart-${img.isFavorite ? "fill" : hovered ? "line" : ""} favorite `} 
                onClick={() => toggleFavorite(img.id)}
            ></i>}

            {alreadyInCart ? 
            <i 
                className="ri-shopping-cart-fill cart" 
                onClick={() => removeFromCart(img.id)}
            ></i> : 
            hovered ? 
            <i 
                className="ri-add-circle-line cart"
                onClick={() => addToCart(img)}
            ></i> : ""}
            
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
