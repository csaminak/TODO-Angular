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
            addItem: addItem,
            findAll: findAll
        };
    }


    var taskList;

    /**
     * Add an item to the local storage
     * @param {Object}   data    a task object with details about task
     */
    function addItem(data) {
        if (!data) {
            console.log('no data');
            return null;
        }
        if(!data.newToDo) {
            return null;
        }

        console.log(data);

        var newItem = {
            theTask: data.newToDo
        };

        console.log('list: ' + taskList, 'item: ' + newItem);

        taskList.push(newItem);
        localStorage.setItem('taskList', angular.toJson(taskList));
        return newItem;
    }

    /**
     * gets 'taskList' from the local storage and returns it
     * @return {Array}  contains objects for each task
     */
    function findAll() {
        try {
            taskList = JSON.parse(localStorage.getItem('taskList'));
            if (!taskList) {
                taskList = [];
            }
        } catch(error) {}
        console.log(taskList);
        return taskList;
    }


})();
