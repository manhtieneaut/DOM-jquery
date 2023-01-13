//Viết code chwenf phần tử vào dom
const todoList = document.querySelector('ul');

const newTodo = document.createElement('li');
newTodo.textContent = 'Do homework';
todoList.appendChild(newTodo);

//chèn một phần tử trước một phần tử đã tồn tại
const another = document.createElement('li');
another.textContent = 'Pay bills';
todoList.insertBefore(another,todoList.firstElementChild);

//Thay thế một phần tử
const modifiedTodo = document.createElement('li');
modifiedTodo.textContent = 'feed the dog';
todoList.replaceChild(modifiedTodo,todoList.children[3]);

// xóa một phần tử
todoList.children[1].remove();
