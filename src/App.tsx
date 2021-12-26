import React, {useEffect} from 'react';
import {SettingsBlock} from "./components/Settings/SettingsBlock";
import {CounterBlock} from "./components/Counter/CounterBlock";
import {Button} from "./components/Button/Button";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {increaseValueAC, setCounterValueAC} from "./state/counterReducer";
import {setError, setSettingsMode} from "./state/settingsReducer";
import {Dispatch} from "redux";


function App() {

    let dispatch = useDispatch<Dispatch>()
    let startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)


    useEffect(() => {

        if (startValue >= maxValue || startValue < 0) {
            dispatch(setError(true))
        } else {
            dispatch(setError(false))
        }
    }, [startValue, maxValue])

//увеличивает значение в счетчике
    const increaseValue = () => {
        dispatch(increaseValueAC())
    }

//устанавливает значение счетчика
    const setCounterValue = () => {
            dispatch(setCounterValueAC(startValue))
            dispatch(setSettingsMode(false))
    }

    return (
        <div className="cover">

            <div className={'settingsBlock'}>
                <SettingsBlock/>
                <Button title='set' callback={setCounterValue}/>
            </div>
            <div className={'counterBlock'}>
                <CounterBlock/>
                <Button title='inc' callback={increaseValue}/>
                <Button title='reset' callback={setCounterValue}/>
            </div>

        </div>
    );
}

export default App;
