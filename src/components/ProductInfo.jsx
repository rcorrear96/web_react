import React from 'react';
import '../styles/ProductInfo.scss'

const ProductInfo = () => {
    return (
        <>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div className="ProductInfo">
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its functional and practical design, this bike also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your house.</p>
                <button className="primary-button add-to-cart-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="" />Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;