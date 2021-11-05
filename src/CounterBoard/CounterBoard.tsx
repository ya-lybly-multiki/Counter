import React from "react";
import styles from './CounterBoard.module.css'

type PropsType = {
    edit:boolean
    value:number
    error:string | null
    enter:string | null
    finish:number
}


export function CounterBoard ({edit, value, enter, error,  finish}:PropsType) {

    const classNameCount = value === finish ? styles.BoardCountMax : styles.BoardCount

    const classNameErrorEnter = error ? styles.BoardError : styles.BoardStart

    return (
        edit
      ? <div className={styles.Board}>
            <p className={classNameErrorEnter}>{error || enter}</p>
        </div>

       : <div className={styles.Board}>
            <p className={classNameCount}>{value}</p>
        </div>
    )
}