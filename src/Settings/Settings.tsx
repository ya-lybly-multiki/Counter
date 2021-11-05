import React, {ChangeEvent} from "react";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import styles from "./Settings.module.css"



type SettingsType = {
    startValue: number
    finishValue: number
    maxInput:(max:number)=> void
    minInput:(min:number)=>void
    callBackHandlerForSet:()=> void
    disabled: boolean
    error:string | null
    setError:(error:string | null)=> void
    setEdit:(edit:boolean)=> void

}


export function Settings({startValue,
                             finishValue,
                             minInput,
                             maxInput,
                             callBackHandlerForSet,
                             disabled,
                            error
                            }:SettingsType) {

    const onChangeMinInput = (e:ChangeEvent<HTMLInputElement>) => {
        let minValue = e.currentTarget.value
        let min = JSON.parse(minValue)
        minInput(min)
    }

    const onChangeMaxInput = (e:ChangeEvent<HTMLInputElement>) => {
      let maxValue = e.currentTarget.value
        let max = JSON.parse(maxValue)
        maxInput(max)
    }

    const disForSet = disabled || finishValue <= startValue || startValue < 0

    return (
        <div>
            <div className={styles.settingsWrapper}>
                <p>max value:</p>
                <Input
                   value={finishValue}
                   startValue={startValue}
                   finishValue={finishValue}
                    callback={onChangeMaxInput}/>
            </div>
            <div className={styles.settingsWrapper}>
                <p>start value:</p>
                <Input
                    startValue={startValue}
                    finishValue={finishValue}
                   value={startValue}
                    callback={onChangeMinInput} />
            </div>
            <Button title="set"  disabled={disForSet} callBack={callBackHandlerForSet}/>


        </div>
    )
}