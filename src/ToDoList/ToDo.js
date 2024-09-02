import React, { useCallback, useState } from 'react';
const ulref = React.createRef()
const TodoList = () => {
    // State variable to store todos
    const [todos, setTodos] = useState([]);
    // State variable to store the input value
    const [todoInput, setTodoInput] = useState('');

    // Function to handle adding a new todo
    const addTodo = () => {
        // Implement adding todo logic here
        setTodos([...todos, { title: todoInput, completed: false }])
        setTodoInput('')
    };

    const handlePress = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }

    }
    // Function to handle marking a todo as completed
    const toggleTodo = (index) => {
        setTodos(todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };

    // Function to handle deleting a todo
    const deleteTodo = (index) => {
        // Implement deleting todo logic here
        setTodos(todos.filter((_, i) => i !== index))
    };
    const handleChange = useCallback((e) => {
        setTodoInput(e.target.value)
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={todoInput}
                onChange={handleChange}
                onKeyPress={handlePress}
                placeholder="Enter a new todo..."
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul ref={ulref}>
                {/* Map over todos array and render each todo */}
                {todos.map((todo, index) => (
                    <li key={index}>
                        {/* Checkbox to mark todo as completed */}
                        <input
                            type="checkbox"
                            ref={ulref}
                            // checked={todo.completed}
                            onChange={() => toggleTodo(index)}
                        />
                        {/* Display todo title */}
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.title}
                        </span>
                        {/* Button to delete todo */}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
