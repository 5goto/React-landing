import React from 'react';
import frame from "../../assets/frame.png"
import style from "./bottomFrame.module.css"

function BottomFrame() {
    return (
        <img className={style.bottomFrame} src={frame} alt="frame"></img>
    );
}

export default BottomFrame;