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
	renderTodos();

	input.value = '';
});

function saveTodos() {
	localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
	list.innerHTML = '';

	todos.forEach((todo, index) => {
		const li = document.createElement('li');
		li.className =
			'flex items-center justify-between bg-gray-200 px-3 py-2 rounded';

		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.checked = todo.completed;

		checkbox.addEventListener('change', () => {
			todos[index].completed = checkbox.checked;
			saveTodos();
			renderTodos();
		});

		const span = document.createElement('span');
		span.textContent = todo.text;
		span.className = checkbox.checked ? 'line-through text-gray-500' : '';

		const deleteBtn = document.createElement('button');
		deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

		deleteBtn.addEventListener('click', () => {
			todos.splice(index, 1);
			saveTodos();
			renderTodos();
		});

		li.appendChild(checkbox);
		li.appendChild(span);
		li.appendChild(deleteBtn);

		list.appendChild(li);
	});
}
