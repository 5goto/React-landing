import {useState} from "react";
import './App.css';
import BottomFrame from "./components/bottomFrame/bottomFrame";
import CenterFrame from "./components/center/CenterFrame";
import Header from "./components/header/Header";
import ModalWindow from "./components/UI/ModalWindow";
import PurchaseForm from "./components/postForm/PurchaseForm";
import Promo from "./components/promo/Promo";



function App() {
    const [modal, setModal] = useState(false)
    const [inputData, setInputData] = useState({})
    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.id]: e.target.value });
        console.log(inputData)
    };

  return (
    <div className="App">
        <Header/>
        <CenterFrame modalHandler={()  => setModal(true)}/>
        <BottomFrame></BottomFrame>
        <ModalWindow visible={modal} setVisible={() => setModal(false)}>
            <Promo/>
            <PurchaseForm setModal={() => setModal(false)}
                          valueObject={inputData} handleChange={handleChange}
                          addHandler={() => console.log('SUBMIT')}
            />
        </ModalWindow>
    </div>
  );
}

export default App;
