import React from 'react';
import style from './display.module.css'

type T_Display = {
    displayedValue: string
    // onUserButtonsHelper: (key: ChangeEvent<HTMLInputElement>) => void
}

const Display: React.FC<T_Display> = ({displayedValue}) => {
    return (
        <input className={style.display} value={displayedValue} placeholder={'0'}/>
    );
};

export default Display;