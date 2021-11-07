import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Settings} from "./Settings/Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [finishValue, setFinishValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(startValue)
    const [error, setError] = useState<string | null>(null)
    const [enter, setEnter] = useState<string | null>(null)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [edit, setEdit] = useState<boolean>(false)



    useEffect(() => {
        if (startValue === 0 && finishValue === 0) {
            setEdit(true)
            setEnter('enter value and press "set"')
        }

    },[])

    useEffect(() => {

        if (startValue < 0 || startValue > finishValue || finishValue < 0 || (startValue>0 && finishValue>0 && startValue === finishValue)) {
            setError('Incorrect value')
            setEdit(true)
        } else if (startValue > 0 || startValue < finishValue || finishValue > 0) {
            setError(null)
            setEdit(true)
            setEnter('enter value and press "set"')
        }
    },[startValue, finishValue])

    useEffect(() => {
        let minString = localStorage.getItem('minValue')
        if (minString) {
            let minNumber = JSON.parse(minString)
            setStartValue(minNumber)
            setCounter(minNumber)
        }
        setDisabled(true)

        let maxString = localStorage.getItem('maxValue')
        if (maxString) {
            let maxNumber = JSON.parse(maxString)
            setFinishValue(maxNumber)
        }

    }, [])


    const callBackHandlerForSet = () => {
        setCounter(startValue)
        setDisabled(true)
        setEdit(false)
        localStorage.setItem("minValue", startValue.toString())
        localStorage.setItem("maxValue", finishValue.toString())
    }

    const minInput = (min: number) => {
        setStartValue(min)
        setDisabled(false)

    }

    const maxInput = (max: number) => {
        setFinishValue(max)
        setDisabled(false)

    }


    return (
        <div className="App">
            <Settings
                startValue={startValue}
                finishValue={finishValue}
                minInput={minInput}
                maxInput={maxInput}
                callBackHandlerForSet={callBackHandlerForSet}
                disabled={disabled}
                error={error}
                setError={setError}
                setEdit={setEdit}
            />
            <Counter
                value={counter}
                disabled={disabled}
                edit={edit}
                startValue={startValue}
                finishValue={finishValue}
                counter={counter}
                setCounter={setCounter}
                setError={setError}
                setEdit={setEdit}
                error={error}
                enter={enter}
                setEnter={setEnter}

            />

        </div>
    );
}

export default App;
