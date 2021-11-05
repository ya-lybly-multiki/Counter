import React from "react";
import './App.css';
import classes from "./Counter.module.css"
import {Button} from "./Button/Button";
import {CounterBoard} from "./CounterBoard/CounterBoard";




type PropsType = {
    value: number
    disabled:boolean
    edit:boolean
    startValue: number
    finishValue: number
    counter:number
    setCounter:(counter:number)=> void
    error:string | null
    setError:(error:string | null)=> void
    setEdit:(edit:boolean)=> void
    enter: string | null
    setEnter: (enter:string | null)=> void
}


export function Counter({value, counter,
                            startValue,
                            finishValue,
                            setCounter,
                            setEdit,
                            setError,
                            error, edit,setEnter,enter, disabled}: PropsType) {


    const disabledForInc =  finishValue <= startValue || startValue < 0 || value === finishValue
    const disabledForReset = finishValue <= startValue || startValue < 0
    const errorMessage = startValue < 0 || finishValue < 0 || startValue > finishValue
    const startMessage = startValue === 0 && finishValue === 0




    const incHandler = () => {
        if (counter >= finishValue) {
            return
        }
        let result = counter + 1
        setCounter(result)
    }
    const resetHandler = () => {
        setCounter(startValue)
    }

    return (
        <div className="container">

          <CounterBoard
              edit={edit}
              value={value}
             error={error}
              enter={enter}
              finish={finishValue}
          />

            <div className="btn__container">
                <Button title={"INC"} disabled={!disabled || disabledForInc} callBack={incHandler}/>
                <Button title={"RESET"}  disabled={!disabled || disabledForReset} callBack={resetHandler}/>
            </div>
        </div>
    )
}