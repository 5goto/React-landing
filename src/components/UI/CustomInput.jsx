import React from 'react';
import styles from './CustomInput.module.css'

function CustomInput( props ) {
    return (
        <input className={styles.customInput} {...props}/>
    );
}

export default CustomInput;