import { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoListView from './components/TodoListView';

function App() {
  const [currentTodoList, setCurrentTodoList] = useState([]);
    
    const newTodoList = ( newTodoList ) => {
      setCurrentTodoList( newTodoList );
    }

    const updateTaskStatus = (index) => {
      const updatedList = currentTodoList.map((item, i) => 
        i === index ? { ...item, completed: !item.completed } : item
      );
      setCurrentTodoList(updatedList);
    };

    const deleteTask = (index) => {
      const updatedList = currentTodoList.filter((_, i) => i !== index);
      setCurrentTodoList(updatedList);
    };

  return (
    <>
      <TodoForm onNewTask={ newTodoList } />
      <TodoListView todoList={currentTodoList} onUpdateTaskStatus={updateTaskStatus} onDeleteTask={deleteTask}/>
    </>
  )
}

export default App
