import view from './view';
import model from './model';

const controller = {
    activateListeners: (() => view.addTaskEvent())(),
    view: view,
    model: model,
    updateModel: (data) => {
        controller.model.addData({title: data.title, id: data.id});
    },
    updateView: (todo) => {
        let elementInDOM = view.findListItem(todo.id);
        if (elementInDOM) return;
        controller.view.addItem(todo);
    },
    deleteFromModel: (id) => {
        model.removeData(id);
    },
    deleteFromView: (id) => {
        view.removeListItem(id);
    },
    editModel: (title, id) => {
        model.editData(title, id)
    },
    editView: (newTitle) => {
        view.editListItem(newTitle);
    }
};

export default controller;