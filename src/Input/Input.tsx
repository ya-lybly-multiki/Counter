import React, {ChangeEvent} from "react";
import styles from "./Input.module.css"

type InputType = {
    callback:(e: ChangeEvent<HTMLInputElement>) => void
    value: number
    startValue:number
    finishValue:number
}


export function Input ({startValue,finishValue,value,callback}:InputType) {

    const errorClass = finishValue < 0 ||
    startValue < 0 ||
    startValue === finishValue ||
    startValue > finishValue ? styles.error : ""
    

    return (
        <input className={errorClass} value={value} type="number" onChange={callback}/>
    )
}