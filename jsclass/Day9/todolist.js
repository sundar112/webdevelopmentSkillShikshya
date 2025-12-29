/** @format */

const input = document.getElementById('todoInput');
const button = document.getElementById('addTodo');
const list = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos();

button.addEventListener('click', () => {
	if (input.value.trim() === '') return;
	const newTodo = {
		text: input.value,
		completed: false,
	};
	todos.push(newTodo);
	saveTodos();
	// console.log(localStorage.getItem('todos'));
	renderTodos();

	input.value = '';
});

function saveTodos() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
	todos.forEach((todo, index) => {
		const li = document.createElement('li');
		li.className =
			'flex items-center justify-between bg-gray-200 px-3 py-2 rounded';
		//console.log(todo.text);
		li.textContent = todo.text;
		list.appendChild(li);
	});
}
