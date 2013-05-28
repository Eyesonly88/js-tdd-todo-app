YUI.add('todo-list', function(Y){
// -- ModelList ----------------------------------------------------------------

// The TodoList class extends Y.ModelList and customizes it to hold a list of
// TodoModel instances, and to provide some convenience methods for getting
// information about the todo items in the list.

TodoList = Y.TodoList = Y.Base.create('todoList', Y.ModelList, [], {
    // This tells the list that it will hold instances of the TodoModel class.
    model: TodoModel,

    // This tells the list to use a localStorage sync provider (which we'll
    // create below) to load the list of todo items.
    sync: LocalStorageSync('todo'),

    // Returns an array of all models in this list with the `done` attribute
    // set to `true`.
    done: function () {
        return this.filter(function (model) {
            return model.get('done');
        });
    },

    // Returns an array of all models in this list with the `done` attribute
    // set to `false`.
    remaining: function () {
        return this.filter(function (model) {
            return !model.get('done');
        });
    }
});

}, '0.1', { requires: ['todo-model', 'local-storage-sync', 'model-list'] });