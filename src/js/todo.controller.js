(function() {
    'use strict';

    angular.module('todoApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['toDoList'];

    function ToDoController(/*toDoList*/) {

    }

})();
