import React, {useState} from 'react';
import './app.module.css';
import style from './app.module.css'
import Display from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";
import History from "./components/History/History";

export type T_Calc = {
    numbers: number[],
    operator: string,
    history: string[]
}

function App() {
    const [calcSettings, setCalcSettings] = useState<T_Calc>({
        numbers: [],
        operator: '',
        history: []
    })
    const buttonsHelper = (value: number) => {
        setCalcSettings(prevState => {
                return {
                    ...prevState, numbers: [value, ...prevState.numbers]
                }
            }
        )
    }


    const currentOperator = (operator: string) => {
        setCalcSettings((prevState) => {
            return {
                ...prevState,
                operator: '',
                numbers: [],
                history: [...prevState.history, calcSettings.numbers.join(''), operator]
            }
        })
    }
    return (
        <div className={style.appWrapper}>
            <div className={style.calc_wrapper}>
                <Display
                    displayedValue={calcSettings.numbers.join('')}/>
                <Buttons currentOperator={currentOperator} buttonsHelper={buttonsHelper}/>
            </div>
            <History calcSettings={calcSettings}/>
        </div>
    );
}

export default App;
