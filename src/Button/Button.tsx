import React from "react";


type PropsType = {
    title: string
    callBack:()=> void
    disabled?:boolean
}

export function Button (props:PropsType) {



    const onClickHandler = () => {
        props.callBack()
    }



    return (
        <button className="btn"  onClick={onClickHandler} disabled={props.disabled}>{props.title}</button>
    )
}