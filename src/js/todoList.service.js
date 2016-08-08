(function() {
    'use strict';

    angular.module('todoApp')
        .factory('toDoList', ToDoListService);

    /**
     * returns an object that has functions for the service provides
     * @return  {Object}    contains service methods
     */
    function ToDoListService() {
        return {
            getList: getList,
            addItem: addItem,
            updateItem: updateItem,
            calcIncomplete: calcIncomplete,
            makeComplete: makeComplete,
            removeItem: removeItem,
            clearCompleted: clearCompleted
        };
    }



    function clearCompleted() {
        var taskList = getList();
        taskList.forEach(function(item) {
            if(item.complete) {
                var itemToDelete = taskList.indexOf(item);
                taskList.splice(itemToDelete, 1);
                localStorage.setItem('taskList', angular.toJson(taskList));
            }
        });
    }

    function removeItem(id) {
        var taskList = getList();
        taskList.forEach(function(item) {
            if (item.id === id) {
                var itemToDelete = taskList.indexOf(item);
                taskList.splice(itemToDelete, 1);
                localStorage.setItem('taskList', angular.toJson(taskList));
                return;
            }
        });
    }

    /**
     * changes the item.complete value to be the opposite boolean value
     * @param  {Number}   id    the id value from the item
     * @return {Void}
     */
    function makeComplete(id) {
        var taskList = getList();
        taskList.forEach(function(item) {
            if (item.id === id) {
                item.complete = !item.complete;
                localStorage.setItem('taskList', angular.toJson(taskList));
                return;
            }
        });
    }

    /**
     * Calculates the number of items that are incomplete.
     * @return {Number}     The total number of incomplete items
     */
    function calcIncomplete() {
        var taskList = getList();
        var incompleteItems = 0;
        taskList.forEach(function(item) {
            if (!item.complete) {
                incompleteItems++;
            }
        });
        return incompleteItems;
    }

    /**
     * compares the id to the each item in the taskList array. If id matches,
     * then updates the task for that specific item.
     * @param  {Object}     data    contains the updated task info
     * @param  {Number}     id      number to uniquely identify the task
     * @return {void}
     */
    function updateItem(data, id) {
        var taskList = getList();

        taskList.forEach(function(item) {
            if(item.id === id) {
                item.theTask = data.updatedToDo;
                return;
            }
        });

        localStorage.setItem('taskList', angular.toJson(taskList));
    }

    /**
     * Add an item to the local storage
     * @param {Object}   data    a task object with details about task
     */
    function addItem(data) {
        if (!data) {
            console.log('no data'); //TODO DELETE
            return null;
        }

        var taskList = checkTaskList();

        var newItem = {
            id: taskList.length + 1,
            theTask: data.newToDo,
            complete: false
        };


        taskList.push(newItem);
        console.log('list: ', taskList); //TODO DELETE
        console.log('item: ', newItem); //TODO DELETE
        localStorage.setItem('taskList', angular.toJson(taskList));
        return newItem;
    }

    /**
     * gets 'taskList' from the local storage and returns it
     * @return {Array}  contains objects for each task
     */
    function getList() {
        return checkTaskList();
    }

    /**
     * Checks to see if taskList exists and if it is an array of data, if not
     * converts taskList into an array and returns that array.
     * @return {Array}  Items   stored in localStorage
     */
    function checkTaskList() {
        var taskList;
        try {
            taskList = JSON.parse(localStorage.getItem('taskList'));
        } catch (err) {
        //Nothing is done with error because all we care about is that taskList
        //is an array, so a check for that first, and if not we go to finally.
        //Error is thrown because taskList could not be parsed and is not
        //in JSON format.
        } finally {
            if (!(taskList instanceof Array)) {
                taskList = [];
            }
        }
        return taskList;
    }

})();
