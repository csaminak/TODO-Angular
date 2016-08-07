(function() {
    'use strict';

    angular.module('todoApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['toDoList'];

    /**
     * A constructor function that defines the scope for any object.
     * @param {[type]} toDoList [description]
     */
    function ToDoController(toDoList) {
        var that = this;
        this.getList = toDoList.getList();
        console.log(toDoList.getList());
        this.addItem = addItem;
        this.newItem = {};
        // this.showInput = false;
        // this.showText = false;
        // this.updatedItem = {};
        // this.remainingToDo = toDoList.remainingToDo();

        /**
         * passes an object with data into function and sends it to the
         * toDoList service function addItem, and then sets newItem to
         * an empty object once done, so a newItem can be added.
         * @param   {Object}     data     contains a info about toDoItem
         */
        function addItem(data) {
            console.log(data);
            toDoList.addItem(data.newToDo);
            that.getList = toDoList.getList();
            that.newItem = {};
        }
    }

})();
