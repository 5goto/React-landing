import React from 'react';
import styles from './Description.module.css'

function Description( {children, ...props}) {
    return (
        <div className={styles.descriptionUnit} {...props}>{children}</div>
    );
}

export default Description;