(function(){
    'use strict';

    var assert =  chai.assert;

    suite('todo controller', function() {

        var todoController, $rootScope;
        var mockToDoListService = {};

        setup(module('todoApp'));

        setup(module(function($provide) {
            $provide.value('toDoList', mockToDoListService);
        }));

        setup(inject(function($controller, _$rootScope_) {
            $rootScope = _$rootScope_;
            mockToDoListService.addItem = function(data) {
                mockToDoListService.addItem.called++;
                return {theTask: data.newToDo};
            };
            mockToDoListService.getList = function() {
                return [];
            };
            mockToDoListService.calcIncomplete = function() {
                return 0;
            };
            mockToDoListService.addItem.called = 0;
            todoController = $controller('ToDoController');
        }));



        test('todo controller has data', function() {
            assert.isObject(todoController.newItem, 'controller has a new item object');
            assert.strictEqual(Object.keys(todoController.newItem).length, 0,
                                                'newItem is an empty object');
            assert.isArray(todoController.getList, 'getList method on controller returns an array');
            assert.isFunction(todoController.addItem, 'controller has an addItem function');

            $rootScope.$digest();
        });

        test('todo controller can add item', function() {
            todoController.addItem({newToDo: 'test task'});
            assert.strictEqual(mockToDoListService.addItem.called, 1,
                            'Service add item method was able to be called');

            $rootScope.$digest();
        });


    });

})();
