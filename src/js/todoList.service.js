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



    /**
     * Add an item to the local storage
     * @param {Object}   data    a task object with details about task
     */
    function addItem(data) {
        var taskList = JSON.parse(localStorage.getItem('taskList'));

        if (!data) {
            return null;
        }

        var newItem = {
            theTask: data.newToDo
        };

        taskList.push(newItem);
        localStorage.setItem('taskList', angular.toJson(newItem));
        return newItem;
    }

    /**
     * gets 'taskList' from the local storage and returns it
     * @return {Array}  contains objects for each task
     */
    function findAll() {
        try {
            return JSON.parse(localStorage.getItem('taskList'));
        } catch(error) {}
    }


})();
