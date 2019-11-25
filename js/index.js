
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
             navigator.serviceWorker.register('/sw.js');
         });
     }
 

function run() {
    let btn = document.querySelector('#add-todo');
    btn.addEventListener('click', addNewToDo);
    loadToDos();
}

function addItem(item) {
    const db = window.localStorage;
    const list = document.querySelector('#list-todo');
    const node = document.createRange().createContextualFragment(db.getItem(item));
    list.appendChild(node);
}



function loadToDos() {
     const db = window.localStorage;
    // const list = document.querySelector('#todo-list');
    Object.keys(db).forEach(addItem);
    // Object.keys(db).forEach((item) => {
    //     const node = document.createRange().createContextualFragment(db.getItem(item));
    //     list.appendChild(node);
    // });
}

function checkBoxUpdate(cb) {
    if (cb.checked) {
        cb.setAttribute('checked', cb.checked);
    } else {
        cb.removeAttribute('checked');
    }
    const itemString = new XMLSerializer().serializeToString(cb.parentNode);
    const id = cb.id;
    window.localStorage.setItem(id, itemString);
}

function addNewToDo(event) {
    event.preventDefault();

    const todo = document.querySelector('#label-todo');
    const value = todo.value;

    if (value.length > 0) {
        const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4) + Math.random().toString(36).substr(3, 4)).toUpperCase();

        const id = `todo-select-${hash}`;
        const template = document.querySelector('#todo-item');
        const item = document.importNode(template.content, true);
        const label = item.querySelector('label[for]');
        const input = item.querySelector('#todo-select')
        const list = document.querySelector('#list-todo');

        input.setAttribute('id', id);
        label.setAttribute('for', id);

        label.textContent = value;

        const db = window.localStorage;
        const itemString = new XMLSerializer().serializeToString(item);
        db.setItem(id, itemString);

        list.appendChild(item);
    }

    todo.value = '';
}

run();