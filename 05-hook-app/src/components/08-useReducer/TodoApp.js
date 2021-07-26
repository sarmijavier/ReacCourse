
import { useEffect, useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'

//localstorage, we can save on it, but the user can delete it, or if
//the browser needs sources it deletes it

const init = () => {

                    //if null return an empty array 
    return JSON.parse(localStorage.getItem('todos')) || []
/*     return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }] */
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init)//[] this is the inial state
    //and it is init's return value

    const [ {description}, handleInputChange, reset ] =  useForm({
        description: '' //same name as the form
    })

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
        //localStorage only saves strings
    }, [todos])

    const handleDelete = ( todoId ) => {
        //crear la action
        const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch( action )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action )
        reset()
    }

    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center">{i + 1}. {todo.desc}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            handleDelete(todo.id)}
                                        }
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="description"
                          className="form-control"
                          placeholder="Aprender ..."
                          autoComplete="off" 
                          value={description}
                          onChange={ handleInputChange }
                        />

                        <button
                        type="submit"
                            className="btn btn-outline-primary mt-1 btn-block w-100"
                        >
                            Agregar
                        </button>


                    </form>
                </div>
            </div>
        </div>
    )
}
