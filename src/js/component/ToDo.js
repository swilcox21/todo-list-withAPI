import React from "react";

const ToDo = ({ todo, index, deleteTodo }) => {
	return (
		<>
			<div className="todo d-flex justify-content-between">
				<h5>{todo}</h5>
				<button
					className="btn-delete"
					onClick={() => deleteTodo(index)}>
					x
				</button>
			</div>
			<div className="line" />
		</>
	);
};

export default ToDo;
