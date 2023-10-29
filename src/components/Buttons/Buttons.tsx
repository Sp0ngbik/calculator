import React from 'react';
import style from './buttons.module.css'

type T_Buttons = {
    buttonsHelper: (el: number) => void
}

const Buttons: React.FC<T_Buttons> = ({buttonsHelper}) => {
    return (
        <div className={style.buttonPad}>
            <div>
                <div onClick={() => {
                    buttonsHelper(7)
                }}>7
                </div>
                <div onClick={() => {
                    buttonsHelper(8)
                }}>8
                </div>
                <div onClick={() => {
                    buttonsHelper(9)
                }}>9
                </div>
                <div>*
                </div>
            </div>
            <div>
                <div onClick={() => {
                    buttonsHelper(4)
                }}>4
                </div>
                <div onClick={() => {
                    buttonsHelper(5)
                }}>5
                </div>
                <div onClick={() => {
                    buttonsHelper(6)
                }}>6
                </div>
                <div onClick={() => {
                    // buttonsHelper(*)
                }}>-
                </div>

            </div>
            <div>
                <div onClick={() => {
                    buttonsHelper(1)
                }}>1
                </div>
                <div onClick={() => {
                    buttonsHelper(2)
                }}>2
                </div>
                <div onClick={() => {
                    buttonsHelper(3)
                }}>3
                </div>
                <div onClick={() => {
                    // buttonsHelper(3)
                }}>+
                </div>
            </div>
            <div>
                <div>*</div>
                <div onClick={() => {
                    buttonsHelper(0)
                }}>0
                </div>
                <div>C</div>
                <div>=</div>
            </div>
        </div>
    );
};

export default Buttons;