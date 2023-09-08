import React from 'react';
import styles from './Promo.module.css'

function Promo( props ) {
    return (
        <div>
            <h2 className={styles.promo_h2}>
                Contact us
            </h2>
            <p className={styles.promo_p}>
                We respond very quickly, soon after contacting you will become the proud owner of our products!
            </p>
        </div>
    );
}

export default Promo;