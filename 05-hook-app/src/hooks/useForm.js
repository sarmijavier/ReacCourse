import { useState } from 'react'


export const useForm = ( initialState= {} ) => {
    // here we can do validations, or extra procces
    const [values, setValues] = useState(initialState)
    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value

        })
    }

    return [ values, handleInputChange ]
}