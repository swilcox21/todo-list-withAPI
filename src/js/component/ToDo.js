import React from "react";
import PropTypes from "prop-types";

const ToDo = ({ todo, index, deleteTodo }) => {
	return (
		<div className="container pt-3 col-8">
			<div className="todo d-flex justify-content-between">
				<h5 className="text-left">{todo.label}</h5>
				<button
					className="btn-delete"
					onClick={() => deleteTodo(todo.id)}>
					<i className="fas fa-times" />
				</button>
			</div>
			<div className="line" />
		</div>
	);
};

export default ToDo;

ToDo.propTypes = {
	todo: PropTypes.object,
	index: PropTypes.number,
	deleteTodo: PropTypes.func
};
