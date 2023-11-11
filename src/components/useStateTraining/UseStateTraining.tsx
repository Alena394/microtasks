import {useState} from "react";


export const UseStateTraining = () => {
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        return setA(++a)
    }

    const onClickReset = () => {
        return setA(0)
    }
    return (
        <div>
            <p className={"number"}>{a}</p>
            <div className={"btn"}>
                <button onClick={onClickHandler}>Click</button>
                <button onClick={onClickReset} >Reset</button>
            </div>

        </div>
    );
}
