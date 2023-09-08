import React from 'react';

function CustomButton( {children, ...props} ) {
    return (
        <button {...props}>{children}</button>
    );
}

export default CustomButton;