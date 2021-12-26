import React, {ChangeEvent} from 'react';

type InputType = {
    labelText: string
    inputName: string
    className: string
    value: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputType) => {

    return (
        <div>

            {props.labelText}
            <input className={props.className}
                   type={"number"}
                   name={props.inputName}
                   value={props.value}
                   onChange={props.callback}/>
            <br/>
            <br/>
        </div>

    )
}