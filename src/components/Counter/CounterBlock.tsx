import React from 'react';
import s from './CounterBlock.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {SettingsStateType} from "../../state/settingsReducer";
import {CounterStateType} from "../../state/counterReducer";


export const CounterBlock = () => {

    const {
        counterValue,
        maxValue,
    } = useSelector<AppRootStateType, CounterStateType>(state => state.counter)

    const {
        error,
        settingsMode,
    } = useSelector<AppRootStateType, SettingsStateType>(state => state.settings)

    const setClass = error ? `${s.message} ${s.error}` : s.message
    const setClassForCounterValue = counterValue >= maxValue ? `${s.counterValue} ${s.error}` : s.counterValue


    return (

            <div className={'counter'}>
                {settingsMode &&
                <div className={setClass}>
                    {error
                        ? `Enter correct values`
                        : `Enter values and press 'set'`}
                </div>}


                <div className={setClassForCounterValue}>
                    {!error && counterValue}
                </div>

            </div>
    )
}