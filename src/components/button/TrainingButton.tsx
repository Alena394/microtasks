export const TrainingButton = () => {
    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (num: number) => {
        console.log(num)
    }

    return (
        <div className={"button"}>
            <button onClick={foo1}>1</button>
            <button onClick={() =>foo2(100200)}>2</button>
        </div>
    )
}