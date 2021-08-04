
import { useEffect, useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

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
    
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
        //localStorage only saves strings
    }, [todos])
    
    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDelete = ( todoId ) => {
        //crear la action
        const action = {
            type: 'delete',
            payload: todoId
        }

        //dispatch
        dispatch( action )
    }


    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    } 

    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    
                    <TodoList
                    
                      todos={todos}
                      handleToggle={handleToggle}
                      handleDelete={handleDelete} 
                    
                    />

                </div>
                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>
            </div>
        </div>
    )
}
