import controller from './controller';

const model = {
    state: [],
    addData: (todo) => {
        if (todo.title !== '') {
            model.state.push(todo);
        }
        model.state.forEach(elem => {

            controller.updateView(elem);
        });
        console.log(model.state, 'My state');
    },
    editData: (title, id) => {
        model.state.forEach(elem => {
            if (elem.id === +id) {
                elem.title = title
            }
        });
        controller.editView({id: id, title: title});
        console.log(model.state, 'NEW EDIT');
    },
    removeData: (id) => {
        const index = model.state.findIndex(elem => elem.id === +id);
        if (index > -1) {
            model.state.splice(index, 1);
            controller.deleteFromView(id);
            console.log(model.state, "NEW STATE");
        }
    },
};

export default model;