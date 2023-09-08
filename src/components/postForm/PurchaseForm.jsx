import React from 'react';


function PurchaseForm( {setModal, valueObject, handleChange, addHandler} ) {
    function handleSubmit(e) {
        e.preventDefault();
        addHandler();
        console.log(valueObject)
        setModal()
    }
    return (
        <form onSubmit={handleSubmit} id="form" className="topBefore">

            <input value={valueObject.name || ''} onChange={handleChange} id="name" type="text" placeholder="NAME"></input>
            <input value={valueObject.email || ''} onChange={handleChange} id="email" type="email" placeholder="E-MAIL"></input>
            <textarea value={valueObject.message || ''} onChange={handleChange} id="message" type="text" placeholder="MESSAGE"></textarea>
            <input id="submit" type="submit" value="CONTACT US"></input>

        </form>
    );
}

export default PurchaseForm;