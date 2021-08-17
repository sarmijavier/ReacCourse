import { useState } from 'react'

export const useCounter = ( initialState = 10) => {
    //f2 to change all names
    const [counter, setCounter] = useState(initialState)    

    const reset = () => {
        setCounter( initialState )
    }

    const increment = () => {
        setCounter( counter + 1)
    }

    const decrement = () => {
        setCounter( counter - 1)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
