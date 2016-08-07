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
        this.showInput = false;
        this.updateItem = updateItem;
        this.updatedToDo = {};

        function updateItem(data, id) {
            console.log('inside controller function update item: ', data, id);
            toDoList.updateItem(data, id);
            that.getList = toDoList.getList();
            that.updatedToDo = {};
        }

        /**
         * passes an object with data into function and sends it to the
         * toDoList service function addItem, and then sets newItem to
         * an empty object once done, so a newItem can be added.
         * @param   {Object}     data     contains a info about toDoItem
         */
        function addItem(data) {
            toDoList.addItem(data);
            that.getList = toDoList.getList();
            that.newItem = {};
        }
    }

})();
