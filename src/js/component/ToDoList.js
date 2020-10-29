import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
	// this is for a single todo
	const [singleTodo, setSingleTodo] = useState({
		label: "",
		done: false
	});
	// this for a our list of todos
	const [todos, setTodos] = useState([]);
	const fetchURL =
		"https://3000-d840d8e8-fbb7-4e76-994b-47f0e00054f6.ws-us02.gitpod.io/todo/sam";
	useEffect(() => {
		fetch(fetchURL)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				setTodos(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	const handleChange = e => {
		setSingleTodo({ label: e.target.value, done: false });
	};

	const handleClick = e => {
		fetch(fetchURL, {
			method: "POST", // or 'POST'
			body: JSON.stringify({
				label: singleTodo.label
			}), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				console.log("Success:", response);
				fetch(fetchURL)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setTodos(responseAsJson);
					})
					.catch(function(error) {
						console.log(
							"Looks like there was a problem: \n",
							error
						);
					});
			})
			.catch(error => console.error("Error:", error));

		// setTodos(todos.concat(singleTodo));
		setSingleTodo({ label: "", done: false });
	};

	const deleteTodo = id => {
		var newTodos = todos.filter((task, index) => {
			return task.id != id;
		});
		console.log(newTodos);
		setTodos(newTodos);
		fetch(fetchURL + "/" + id, {
			method: "DELETE", // or 'PUT'
			// body: JSON.stringify(newTodos), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => {
				console.log("Success:", response);
				fetch(fetchURL)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setTodos(responseAsJson);
					})
					.catch(function(error) {
						console.log(
							"Looks like there was a problem: \n",
							error
						);
					});
			})
			.catch(error => console.error("Error:", error));
	};

	const deleteAllTodos = indice => {
		const newTodos = [...todos];
		newTodos.splice(indice, todos.length);
		setTodos(newTodos);
	};

	return (
		<div className="container">
			<form onSubmit={e => e.preventDefault()}>
				<input
					id="userInput"
					onChange={e =>
						setSingleTodo({ ...singleTodo, label: e.target.value })
					}
					type="text"
					name="todo"
					placeholder="Stop being lazy and JUST DO IT!!"
					value={singleTodo.label}
				/>
				<button onClick={handleClick}>
					<strong>SUBMIT</strong>
				</button>
				<button onClick={deleteAllTodos}>
					<strong>CLEAR</strong>
				</button>
			</form>
			{todos.map((task, index) => (
				<ToDo
					todo={task}
					key={index}
					index={index}
					deleteTodo={deleteTodo}
				/>
			))}
			<div className="item-counter">{todos.length} items </div>
		</div>
	);
};

export default ToDoList;
