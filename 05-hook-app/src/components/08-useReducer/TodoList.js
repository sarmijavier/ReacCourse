import TodoListItem from "./TodoListItem"

function TodoList({todos, handleDelete, handleToggle}) {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    //TodoListItem, todo, index, handleToggle, handleDelete
                    <TodoListItem todo={todo} i={i} handleToggle={handleToggle} handleDelete={handleDelete} />
                ))
            }
        </ul>
    )
}


export default TodoList

