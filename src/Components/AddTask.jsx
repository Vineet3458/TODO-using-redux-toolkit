import { useState } from "react"; 
import { useDispatch } from "react-redux";
import { addTask } from "../Features/task/taskSlice";

const AddTask = () => {

    const [text,setText] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(text))
        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" 
            placeholder="Add a Text"
            className="input"
            value = {text}
            onChange={(event) => setText(event.target.value)}/>

            <button className="button" type="submit">Add</button>
        </form>
    )
}

export default AddTask;