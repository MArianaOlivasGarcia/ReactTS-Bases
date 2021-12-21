import { useReducer } from 'react'
import { doIncreaseBy, doReset } from './actions/actions';
import { CounterState } from './interfaces/interfaces'
import { counterReducer } from './state/counterReducer';


const initialState: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}



export const CounterReducer = ( ) => {

    const [ state , dispatch] = useReducer(counterReducer, initialState);

    const handleClickReset = () => {
        dispatch( doReset() )
    }

    const handleClickIncrease = ( value: number ) => {
        dispatch( doIncreaseBy( value ) )
    }

    return (
        <>
            <h1>CounterReducer Segmentado { state.counter }</h1>

            <pre>
                { JSON.stringify( state, null, 2 ) }
            </pre>

            <button onClick={ handleClickReset }>
                Reset
            </button>

            <button onClick={ () => handleClickIncrease(1) }>
                +1
            </button>

            <button onClick={ () => handleClickIncrease(10) }>
                +10
            </button>
        </>
    )
}
