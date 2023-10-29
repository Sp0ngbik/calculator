import React, {ChangeEvent, useState} from 'react';
import './app.module.css';
import Display from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";
import style from './app.module.css'
import History from "./components/History/History";

function App() {
    const [elements, setElements] = useState<number[]>([])

    const buttonsHelper = (value: number) => {
        setElements((prevState) => [...prevState, value])
    }

    return (
        <div className={style.appWrapper}>
            <div className={style.calc_wrapper}>
                <Display
                         displayedValue={elements.join('')}/>
                <Buttons buttonsHelper={buttonsHelper}/>
            </div>
            <History/>
        </div>
    );
}

export default App;
