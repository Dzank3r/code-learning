let taskList = document.getElementById('task-list');

let List = document.querySelector('ul');

let czajnikT;

function toLocal() {
    todos = List.innerHTML;
    localStorage.setItem('todos', todos)
}


document.getElementById('add-task-button').addEventListener('click', function () {
    let input = document.getElementById('input-task');

    let value = input.value.trim();


    if(value) {
        addTask(value);
    }
    toLocal();
});




function addTask(text) {
    let task = document.createElement('li');

    let span = document.createElement('span');
    span.innerText = text;
    span.className = "task";
    let chBox = document.createElement('input');
    chBox.type = "checkbox";

    let delBtn = document.createElement('button');
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(chBox);
    task.appendChild(span);
    task.appendChild(delBtn);

    taskList.appendChild(task);

    toLocal();
}

if (localStorage.getItem('todos')) {
    List.innerHTML = localStorage.getItem('todos');
}