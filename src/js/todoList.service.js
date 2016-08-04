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


    function addItem() {
        
    }

    function findAll() {
        try {
            return JSON.parse(localStorage.getItem('list'));
        } catch(error) {}
    }

})();
