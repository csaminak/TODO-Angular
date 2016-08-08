(function() {
    'use strict';

    angular.module('todoApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['toDoList'];

    /**
     * A constructor function that defines the scope for any object.
     * @param {Object}   toDoList   the service constructor fn that returns an object
     */
    function ToDoController(toDoList) {
        var that = this;
        this.getList = toDoList.getList();
        this.addItem = addItem;
        this.newItem = {};
        this.showInput = false;
        this.updateItem = updateItem;
        this.updatedToDo = {};
        this.calcIncomplete = toDoList.calcIncomplete();
        this.makeComplete = makeComplete;
        this.removeItem = removeItem;
        this.clearCompleted = clearCompleted;
        this.showComplete = showComplete;
        this.showActive = showActive;
        this.showAll = showAll;



        function showAll() {
            that.getList = toDoList.getList();
        }

        function showActive() {
            var activeItems = [];
            var allItems = toDoList.getList();
            allItems.forEach(function(item) {
                if(!item.complete) {
                    activeItems.push(item);
                }
            });
            that.getList = activeItems;
        }

        function showComplete() {
            var completedItems = [];
            var allItems = toDoList.getList();
            allItems.forEach(function(item) {
                if(item.complete) {
                    completedItems.push(item);
                }
            });
            that.getList = completedItems;
        }

        function clearCompleted() {
            toDoList.clearCompleted();
            that.getList = toDoList.getList();
            that.calcIncomplete = toDoList.calcIncomplete();
        }

        function removeItem(id) {
            toDoList.removeItem(id);
            that.getList = toDoList.getList();
            that.calcIncomplete = toDoList.calcIncomplete();
        }

        function makeComplete(id) {
            console.log(id);
            toDoList.makeComplete(id);
            that.getList = toDoList.getList();
            that.calcIncomplete = toDoList.calcIncomplete();
        }

        /**
         * passes an object with data into a function and send it to the
         * toDoList service function updateItem and then sets the updatedToDo
         * to be an empty object to reset updatedToDo.
         * @param  {Object}     data    contains the updated task info
         * @param  {Number}     id      number to uniquely identify the task
         * @return {Void}
         */
        function updateItem(data, id) {
            if (!data || Object.keys(data).length === 0) {
                return;
            }
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
            if (!data || Object.keys(data).length === 0) {
                return;
            }
            toDoList.addItem(data);
            that.getList = toDoList.getList();
            that.incomplete = toDoList.calcIncomplete();
            that.newItem = {};
        }
    }

})();
