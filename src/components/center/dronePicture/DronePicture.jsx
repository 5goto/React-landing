import React from 'react';
import drone from "../../../assets/drone.png";
import styles from './DronePicture.module.css'

function DronePicture( props ) {
    return (
        <img className={styles.dronePicture} src={drone} alt="frame"></img>
    );
}

export default DronePicture;