import react, { useState } from 'react';
import { Task } from '../TodoListItem';
import './TodoForm.css';
    
const TodoForm = (props) => {
    const [todoList, setTodoList] = useState([]);
    const [taskInput, setTaskInput] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = new Task(taskInput);
        const newTodoList = [...todoList, task]; 
        setTodoList(newTodoList);
        props.onNewTask(newTodoList);
        setTaskInput("");
    };

    const updateTodoListInput = (e) => {
        setTaskInput(e.target.value);
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>To-Do List</h1>
            <h3>Add Tasks</h3>
            <input type="text" placeholder="Type the task..." value={taskInput} onChange={updateTodoListInput}/>
            <input type="submit" value="Add" />
        </form>
    );
};
    
export default TodoForm;