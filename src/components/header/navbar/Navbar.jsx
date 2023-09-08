import React from 'react';
import ListItem from "../../UI/ListItem";
import styles from './Navbar.modue.css'

function Navbar( {links} ) {
    return (
        <nav className='navbar'>
            <ul className='navbar_ul'>
                {links.map((item, index) => <ListItem className='navLi' children={item.name} key={index}></ListItem>)}
            </ul>
        </nav>
    );
}

export default Navbar;