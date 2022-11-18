import React from 'react'
import { useReducer } from 'react'

type CounterState = {
    count: number
}
type UpdateValue ={
    type: 'increment' | 'decrement' 
    payload: number
}
type ResetValue ={
    type: 'reset'
}
type CounterAction = UpdateValue | ResetValue

// read only ref for a dom of element or mutable value like instant value
//complex state logic where next state dependice in prv state use reducer preferable

const initialState = {count: 0 }
//responsible for updating state
//action.type update the count value
function reducer (state: CounterState, action: CounterAction){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }

}
//[ there are components]
export const Counter = () => {
    const [state, dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        count: {state.count}
        <button onClick={()=> dispatch({type:'increment', payload:10})}>Increment 10</button>
        <button onClick={()=> dispatch({type:'decrement', payload:10})}>decrement 10</button>
        <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}
