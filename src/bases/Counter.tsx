import { useState } from 'react'

interface CounterProps {
    initialValue: number
}

export const Counter = ({ initialValue }: CounterProps ) => {

    const [counter, setCounter] = useState( initialValue );

    const handleClick = () => {
        setCounter( counter+1 )
    }

    return (
        <>
            <h1>Counter { counter }</h1>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
