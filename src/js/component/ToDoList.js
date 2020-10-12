import React, { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
	// this is for a single todo
	const [singleTodo, setSingleTodo] = useState({});
	// this for a our list of todos
	const [todos, setTodos] = useState([]);

	const handleChange = e => {
		setSingleTodo({ [e.target.name]: e.target.value });
	};

	const handleClick = e => {
		setTodos([...todos, singleTodo]);
	};

	const deleteTodo = indice => {
		const newTodos = [...todos];
		newTodos.splice(indice, 1);
		setTodos(newTodos);
	};

	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input
					onChange={handleChange}
					type="text"
					name="todo"
					placeholder="Stop being lazy and JUST DO IT!!"
				/>
				<button onClick={handleClick}>SUBMIT</button>
			</form>
			{todos.map((value, index) => (
				<ToDo
					todo={value.todo}
					key={index}
					index={index}
					deleteTodo={deleteTodo}
				/>
			))}
			<div className="item-counter">{todos.length} items </div>
		</>
	);
};

export default ToDoList;
