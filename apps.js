// Selector

const todoInupt = document.querySelector('.todo_input');
const todoBtn = document.querySelector('.todo_btn');
const todoList = document.querySelector('.todo_list');


// EventListener

todoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (todoInupt.value !== '') {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const todoLi = document.createElement('li');
        todoLi.innerText = todoInupt.value.trim();
        todoDiv.appendChild(todoLi);

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete_btn');
        completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        todoDiv.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete_btn');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        todoDiv.appendChild(deleteBtn);

        todoList.appendChild(todoDiv);

        todoInupt.value = "";
    } else {
        alert('Please Input A ToDo.')
    }

})

todoList.addEventListener('click', (e) => {
    const item = e.target;
    const delEl = item.parentElement;
    console.log(delEl)
    console.log(item.classList)

    if (item.classList[0] === "delete_btn") {
        delEl.classList.add('animate')
        delEl.addEventListener('transitionend', () => {
            delEl.remove();
        })
    } else if (item.classList[0] === "complete_btn") {
        delEl.classList.toggle('completed')
    }
})