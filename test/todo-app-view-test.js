YUI.add('todo-app-view-test', function(Y){
	"use strict";
	var Assert      = Y.Assert,
    TodoAppView 	= new Y.TodoAppView(),
    suite;

	// -- Suite --------------------------------------------------------------------
	suite = new Y.Test.Suite('TodoAppView Suite');

	// -- Add Test Cases to our Suite --------------------------------------------------------------------
	
	// -- Todo App View Tests --------------------------------------------------------------------
	suite.add(new Y.Test.Case({

        name : "Todo App View Tests",

		'Creating a TodoAppView creates a todo list as well' : function () {
			// Placeholder test.
            Assert.isNotNull(TodoAppView.todoList);
        }

    }));

	// -- Add our Suite to the Test Runner --------------------------------------------------------------------
	Y.Test.Runner.add(suite);

}, 0.1, {requires:['todo-app-view']});