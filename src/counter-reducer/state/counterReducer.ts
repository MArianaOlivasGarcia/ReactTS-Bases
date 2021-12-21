import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";


export const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {

    switch ( action.type ) {
        
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }

        case 'increaseBy':
            return {
                counter: action.payload.value + state.counter,
                previous: state.counter,
                changes: state.changes + 1
                }
    
        default:
            return state;
    }

}