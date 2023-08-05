import { FC, useState, useMemo } from "react";
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'

interface ChildProps {
    value: number,
    setValue: (value: number) => void,
    squareRoot:number
}


let Counter: FC<{ Child: any }> = ({ Child }) => {

    const [value, setValue] = useState<number>(0);

    const findRoot = useMemo(() => { return Number(Math.sqrt(value)) }, [value])

    return (
        <Child value={value} setValue={setValue} squareRoot={findRoot}/>
    )

}

let ChildComponent: FC<ChildProps> = ({ value, setValue ,squareRoot}) => {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setValue(value + 1)}>
                    count is {value}
                </button>
                <p>The  square root is {squareRoot}</p>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

let CounterChildComponent: FC<{}> = ({ }) => {

    return (
        <Counter Child={ChildComponent} />
    )
}

export default CounterChildComponent;