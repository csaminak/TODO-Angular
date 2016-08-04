(function() {
    'use strict';

    angular.module('todoApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['toDoList'];

    function ToDoController(toDoList) {
        var that = this;
        this.getList = toDoList.findAll();
        this.addItem = addItem;
        this.newItem = {};
        // this.remainingToDo = toDoList.remainingToDo();


        /**
         * passes an object with data into function and sends it to the
         * toDoList service function addItem, and then sets newItem to
         * an empty object once done, so a newItem can be added.
         * @param   {Object}     data     contains a info about toDoItem
         */
        function addItem(data) {
            toDoList.addItem(data);
            that.newItem = {};
        }
    }

})();
