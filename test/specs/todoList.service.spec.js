(function(){
    'use strict';

    var assert = chai.assert;


    suite('todoList service', function() {

        var ToDoListService, $rootScope;

        setup(module('todoApp'));

        setup(inject(function(toDoList, _$rootScope_) {
            ToDoListService = toDoList;
            $rootScope = _$rootScope_;
        }));

        test('toDoList service functions exist', function() {
            assert.isFunction(ToDoListService.addItem, 'addItem is a function');
            assert.isFunction(ToDoListService.findAll, 'findAll is a function');
        });

        test('toDoList findAll returns an array', function() {
            assert.isArray(ToDoListService.findAll(), 'array is returned');
        });

        test('toDoList addItem returns an object', function() {
            assert.isObject(ToDoListService.addItem({newToDo: 'the task'}), 'object is returned');
            assert.strictEqual(ToDoListService.addItem(), null,
                                    'function will return null without an argument');
        });



    });


})();
