import React from 'react';
import Description from "../../UI/Description";
import CustomButton from "../../UI/CustomButton";
import styles from "./Tagline.module.css"
import buttonStyles from '../../UI/CustomButton.module.css'

function Tagline({modalHandler}) {
    return (
        <div className={styles.taglineBlock}>
            <h1 className={styles.mainTag}>the</h1>
            <h1 className={`${styles.mainTag} ${styles.colored}`}>drone</h1>
            <Description className={styles.descriptionBlock}>Massa vitae tortor condimentum lacinia quis vel eros
                donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
                augue lacus viverra vitae congue eu consequat ac felis donec et
                odio pellentesque diam volutpat commodo sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend donec pretium vulputate sapien
                nec sagittis aliquam
            </Description>
            <div className={styles.buttonLine}>
                <CustomButton className={buttonStyles.customButtonDefault}>read more</CustomButton>
                <CustomButton onClick={modalHandler} className={buttonStyles.customButtonColored}>purchase</CustomButton>
            </div>
        </div>
    );
}

export default Tagline;