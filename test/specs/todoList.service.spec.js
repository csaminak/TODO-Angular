(function(){
    'use strict';

    var assert = chai.assert;


    suite('todoList service', function() {

        var ToDoListService, $rootScope;

        setup(module('todoApp'));

        setup(inject(function(todoApp, _$rootScope_) {
            ToDoListService = todoApp;
            $rootScope = _$rootScope_;
        }));

        test('service functions exist', function() {


        });


    });


})();
