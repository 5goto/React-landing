import React from 'react';

function ListItem( {children, ...props} ) {
    return (
        <li {...props}><a href="#">{children}</a></li>
    );
}

export default ListItem;