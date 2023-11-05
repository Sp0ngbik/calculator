import React from 'react';
import style from './buttons.module.css'

type T_Buttons = {
    buttonsHelper: (el: number) => void
    currentOperator: (el: string) => void
}

const Buttons: React.FC<T_Buttons> = ({buttonsHelper, currentOperator}) => {
    return (
        <div className={style.buttonPad}>
            <div>
                <button onClick={() => {
                    buttonsHelper(7)
                }}>7
                </button>
                <button onClick={() => {
                    buttonsHelper(8)
                }}>8
                </button>
                <button onClick={() => {
                    buttonsHelper(9)
                }}>9
                </button>
                <button onClick={() => currentOperator('*')}>*
                </button>
            </div>
            <div>
                <button onClick={() => {
                    buttonsHelper(4)
                }}>4
                </button>
                <button onClick={() => {
                    buttonsHelper(5)
                }}>5
                </button>
                <button onClick={() => {
                    buttonsHelper(6)
                }}>6
                </button>
                <button onClick={() => {
                    currentOperator('-')
                }}>-
                </button>

            </div>
            <div>
                <button onClick={() => {
                    buttonsHelper(1)
                }}>1
                </button>
                <button onClick={() => {
                    buttonsHelper(2)
                }}>2
                </button>
                <button onClick={() => {
                    buttonsHelper(3)
                }}>3
                </button>
                <button onClick={() => {
                    currentOperator('+')
                }}>+
                </button>
            </div>
            <div>
                <button onClick={() => {
                    buttonsHelper(0)
                }}>0
                </button>
                <button onClick={() => {
                    // currentOperator('c')
                }}>C
                </button>
                <button className={style.equal} onClick={() => {
                    currentOperator('=')
                }}>=
                </button>
            </div>
        </div>
    );
};

export default Buttons;