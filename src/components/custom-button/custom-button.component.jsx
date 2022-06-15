import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({ children,isGoogleSign, ...otherCustomButtonProps }) => {
    return (
        <button className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`} {...otherCustomButtonProps}>
            {children}
        </button>
    )
}
export default CustomButton;