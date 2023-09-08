import React from 'react';
import Tagline from "./tagline/Tagline";
import DronePicture from "./dronePicture/DronePicture";
import styles from './CenterFrame.module.css'

function CenterFrame( {modalHandler} ) {
    return (
        <div className={styles.centerFrame}>
            <Tagline modalHandler={modalHandler}></Tagline>
            <DronePicture></DronePicture>
        </div>
    );
}

export default CenterFrame;