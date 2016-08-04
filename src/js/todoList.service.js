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
     * [addItem description]
     * @param {[type]} data [description]
     */
    function addItem(data) {
        var taskList = JSON.parse(localStorage.getItem('taskList'));

        if (!data) {
            return null;
        }

        var newItem = {
            theTask: data.theTask
        };

        taskList.push(newItem);
        localStorage.setItem('taskList', angular.toJson(newItem));
        return newItem;
    }

    /**
     * [findAll description]
     * @return {[type]} [description]
     */
    function findAll() {
        try {
            return JSON.parse(localStorage.getItem('taskList'));
        } catch(error) {}
    }


})();
