YUI.add('todo-model', function(Y){
// -- Model --------------------------------------------------------------------

// The TodoModel class extends Y.Model and customizes it to use a localStorage
// sync provider (the source for that is further below) and to provide
// attributes and methods useful for todo items.

TodoModel = Y.TodoModel = Y.Base.create('todoModel', Y.Model, [], {
    // This tells the Model to use a localStorage sync provider (which we'll
    // create below) to save and load information about a todo item.
    sync: LocalStorageSync('todo'),

    // This method will toggle the `done` attribute from `true` to `false`, or
    // vice versa.
    toggleDone: function () {
        this.set('done', !this.get('done')).save();
    }
}, {
    ATTRS: {
        // Indicates whether or not this todo item has been completed.
        done: {value: false},

        // Contains the text of the todo item.
        text: {value: ''}
    }
});

}, '0.1', { requires: ['event-focus', 'model', 'local-storage-sync'] });