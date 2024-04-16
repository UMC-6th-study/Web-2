import React, { useState } from 'react';
import './App.css';

const TodoApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleCompleteTodo = (index) => {
        const completedTodo = todos[index];
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        setCompletedTodos([...completedTodos, completedTodo]);
    };

    const handleDeleteCompletedTodo = (index) => {
        const newCompletedTodos = completedTodos.filter((_, i) => i !== index);
        setCompletedTodos(newCompletedTodos);
    };

    return (
        <div className="container">
            <h1>UMC STUDY PLAN</h1>
            <hr />
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') handleAddTodo();
                    }}
                    placeholder="UMC 스터디 계획을 작성해보세요!"
                />
            </div>
            <div className="split">
                <div>
                    <h3>해야할 일</h3>
                    <ul className="list">
                        {todos.map((todo, index) => (
                            <li key={index}>
                                {todo}
                                <button className="success-btn" onClick={() => handleCompleteTodo(index)}>완료</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>해낸 일</h3>
                    <ul className="list">
                        {completedTodos.map((todo, index) => (
                            <li key={index}>
                                {todo}
                                <button className="delete-btn" onClick={() => handleDeleteCompletedTodo(index)}>삭제</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
