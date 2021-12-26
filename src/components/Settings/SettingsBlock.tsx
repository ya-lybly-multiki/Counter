import React, {ChangeEvent} from 'react';
import s from './SettingsBlock.module.css'
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from '../../state/store';
import {CounterStateType, setMaxValueAC, setStartValueAC} from '../../state/counterReducer';
import {setSettingsMode} from "../../state/settingsReducer";
import {Dispatch} from "redux";


export const SettingsBlock = () => {

const dispatch = useDispatch<Dispatch>()

    const {
        startValue,
        maxValue,
    } = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    const error = useSelector<AppRootStateType,boolean>(state => state.settings.error)

    let setClassNameForInput = error ? s.error : s.input;

    //изменяет значение в инпутах
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let currentValue = Number(e.currentTarget.value)
        dispatch(setSettingsMode(true))

        switch (e.currentTarget.name) {
            case 'startValue':
                dispatch(setStartValueAC(currentValue))
                break;
            case 'maxValue':
                dispatch(setMaxValueAC(currentValue))
                break;
        }
    }


    return (

            <div className='settings'>
                <Input labelText={'start value:'}
                       className={setClassNameForInput}
                       inputName={'startValue'}
                       value={startValue}
                       callback={changeValue}/>

                <Input labelText={'max value:'}
                       className={setClassNameForInput}
                       inputName={'maxValue'}
                       value={maxValue}
                       callback={changeValue}/>
            </div>
    )
}