import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    // const valueInput = "Eric";
    const [valueInput, setValueInput] = useState("Eric")

    const { addNewTodo } = props;
    // addNewTodo("eric");
    const handleClick = () => {
        console.log(">>>> check valueInput: ", valueInput)
    }
    const handleChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}
export default TodoNew;