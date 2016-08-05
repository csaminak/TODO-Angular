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
            mockToDoListService.findAll = function() {
                return [];
            };
            mockToDoListService.addItem.called = 0;
            todoController = $controller('ToDoController');
        }));

        test('todo controller *has data*', function() {
            assert.isObject(todoController.newItem, 'controller has a new item object');
        });

    });


    /*
        test('registrar controller has expected data', function() {
            // assert.isString(regController.path, 'path exists');
            assert.isArray(regController.students, 'controller has students array');
            assert.isObject(regController.newStudent,
                                        'controller has new student object');
            assert.strictEqual(Object.keys(regController.newStudent).length, 0,
                                        'controller has an empty object');
            assert.isFunction(regController.addStudent,
                                        'controller has method to add Student');

            $rootScope.$digest();
        });

        test('registrar can add student', function() {
            regController.addStudent({name: 'John', grade: 50});
            assert.strictEqual(mockStudentService.add.called, 1,
                                        'the student service add method was executed');

            $rootScope.$digest();
        });

    });
    */


})();
