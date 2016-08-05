(function() {
    'use strict';

    angular.module('todoApp', []);

})();

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
        if (!data) {
            console.log('no data'); //TODO DELETE
            return null;
        }
        if(!data.newToDo) {
            return null;
        }
        var taskList;
        taskList = checkTaskList();

        console.log(data); //TODO DELETE
        console.log('list: ', taskList); //TODO DELETE
        var newItem = {
            theTask: data.newToDo
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
    function findAll() {
        var taskList;
        taskList = checkTaskList();
        return taskList;
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

//# sourceMappingURL=main.js.map