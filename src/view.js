import { createElement, getValues } from "./heplers";

const view = {
    interfaceEl: {
        field: document.getElementById('type-task-field'),
        list: document.getElementById('list'),
    },
    addTaskEvent: () => {
        const _cashDOM = document;
        const listenButton = _cashDOM.getElementById('add-button');

        listenButton.addEventListener('click', () => {
            getValues(view.interfaceEl.field.value, Date.now());
        });
    },

    findListItem: (id) => {
        return document.getElementById(`${id}`);
    },

    addItem: (todo) => {
        const list = document.getElementById('list');
        const newItem = createElement(todo);

        view.interfaceEl.field.value = '';
        list.insertBefore(newItem, null);
    },

    editListItem: (todo) => {
        const findLi = view.findListItem(todo.id);
        let changedItem = findLi.querySelector("label");
        let clearInp = findLi.querySelector("input");

        changedItem.textContent = todo.title;
        clearInp.value = '';
    },

    removeListItem: (id) => {
        const removeItem = document.getElementById(`${id}`);

        removeItem.parentNode.removeChild(removeItem);
    },
};

export default view;