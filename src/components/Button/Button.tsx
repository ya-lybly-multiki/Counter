import React from 'react';
import s from './Button.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {SettingsStateType} from "../../state/settingsReducer";
import {CounterStateType} from "../../state/counterReducer";


type ButtonPropsType = {
    title: string
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, callback}) => {

    const {
        error,
        settingsMode,
    } = useSelector<AppRootStateType, SettingsStateType>(state => state.settings)

    const {
        startValue,
        maxValue,
        counterValue,
    } = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

    const setDisabletForButton = (title: string) => {
        let isDisabled = false;
        switch (title) {
            case 'set' :
                return !settingsMode || error;
            case 'inc' :
                return counterValue === maxValue || error || settingsMode;
            case 'reset' :
                return maxValue === startValue || error || settingsMode;

            default:
                return isDisabled
        }
    }
    let disabled = setDisabletForButton(title)


    const setClass = disabled ? `${s.button} ${s.disabled}` : s.button

    return <button className={setClass} onClick={callback} disabled={disabled}>
        {title}
    </button>

}