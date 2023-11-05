import React from 'react';
import style from './history.module.css'

type T_History = {
    calcSettings: {
        numbers: number[],
        operator: string,
        history: string[]
    }
}
const History: React.FC<T_History> = ({calcSettings}) => {
    console.log(calcSettings.history)
    return (
        <div className={style.historyBlock}>
            {calcSettings.history.map(number => {
                return <div key={crypto.randomUUID()}>
                    <ul>
                        <ol>
                            {number}
                        </ol>
                    </ul>
                </div>
            })}
        </div>
    );
};

export default History;