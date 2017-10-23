import controller from './controller';

export const createElement = (todo) => {

    const _cashDom = document;

    const label = _cashDom.createElement("label");
    label.textContent = todo.title;

    const input = _cashDom.createElement("input");

    const editButton = _cashDom.createElement("button");
    editButton.className = 'worked';
    editButton.id = 'edit';
    editButton.textContent = 'Edit'; // todo maybe this insert eventListener ?
    editButton.addEventListener('click', (e) => {
        const editableTitle = editButton.parentNode.childNodes[0].textContent;
        let editableID = editButton.parentNode.id;
        let editableData = e.target.previousSibling.value;

        controller.editModel(editableData, editableID);
    });

    const deleteButton = _cashDom.createElement("button");
    deleteButton.className = 'worked';
    deleteButton.id = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        controller.deleteFromModel(deleteButton.parentNode.id);
    });

    const createdLiBlock = _cashDom.createElement("li");
    createdLiBlock.id = todo.id;
    createdLiBlock.insertBefore(label, null);
    createdLiBlock.appendChild(input);
    createdLiBlock.appendChild(editButton);
    createdLiBlock.appendChild(deleteButton);

    return createdLiBlock;
};

export const getValues = (value, id) => {
    if (value === '') return;

    controller.updateModel({title: value, id: id});
};