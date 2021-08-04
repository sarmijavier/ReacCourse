import { useForm } from "../../hooks/useForm"

function TodoAdd({ handleAddTodo }) {

    const [ {description}, handleInputChange, reset ] =  useForm({
        description: '' //same name as the form
    })

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

        handleAddTodo( newTodo )
        reset()
    }

    return (
        <>
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
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block w-100"
                >
                    Agregar
                </button>


            </form>
        </>
    )
}

export default TodoAdd
