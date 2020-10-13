import React, { useState } from "react";
import ToDoList from "./ToDoList";

//create your first component
// chase your dreams!
export function Home() {
	return (
		<div className="container text-center mt-2">
			<div className="heading">toDos</div>
			<div className="container listContent">
				<ToDoList />
			</div>
		</div>
	);
}
// made a small change to push