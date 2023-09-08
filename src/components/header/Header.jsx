import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import CustomInput from "../UI/CustomInput";
import styles from './Header.module.css'
import Navbar from "./navbar/Navbar";

function Header() {
    const [links, _] = useState([
        {name: 'Drones'},
        {name: 'Portable'},
        {name: 'Specialized'},
        {name: 'Support'},
        {name: 'About'},
    ])

    return (
        <header className={styles.header}>
            <div className={styles.headerLeftBlock}>
                <img src={logo} alt='logo'/>
                <CustomInput placeholder='search    '/>
                <img src={search} alt='search' style={{cursor: 'pointer'}}/>
            </div>
            <div>
                <Navbar links={links}/>
            </div>
        </header>
    );
}

export default Header;