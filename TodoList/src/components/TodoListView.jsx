import React from 'react';
import './TodoListView.css';

const TodoListView = (props) => {

    const handleTaskUpdateStatus = (index) => {
        props.onUpdateTaskStatus(index);
    };

    const handleDeleteTask = (index) => {
        props.onDeleteTask(index);
    };

    return (
        <div className="todo-list-container">
            {props.todoList.length === 0 ? (
                <label className="empty-list-message">
                    No tasks were added to your To-Do list, yet.
                </label>
            ) : (
                props.todoList.map((item, index) => (
                    <div className="task-item" key={index}>
                        <label
                            className={item.completed ? 'completed' : ''}
                        >
                            {item.text}
                        </label>
                        <input 
                            type="checkbox" 
                            checked={item.completed} 
                            onChange={() => handleTaskUpdateStatus(index)} 
                        />
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default TodoListView;