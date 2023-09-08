import React from 'react';
import cl from './ModalWindow.module.css'

function ModalWindow( {children, visible, setVisible} ) {
    const rootClasses =[cl.ModalWindow]
    if(visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={setVisible}>
            <div className={cl.ModalWindowContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default ModalWindow;