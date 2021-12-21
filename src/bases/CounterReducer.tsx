import { useReducer, useState } from 'react'

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}


const initialState: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}


type CounterAction = 
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch ( action.type ) {
        
        case 'reset':
            return {
                ...initialState,
            }

        case 'increaseBy':
            return {
                ...initialState,
                counter: action.payload.value + state.counter,
                previous: state.counter,
                changes: state.changes + 1
                }
    
        default:
            return initialState;
    }

}


export const CounterReducer = ( ) => {

    const [ state , dispatch] = useReducer(counterReducer, initialState);

    const handleClickReset = () => {
        dispatch({ type: 'reset' })
    }

    const handleClickIncrease = ( value: number ) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }

    return (
        <>
            <h1>CounterReducer { state.counter }</h1>

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
