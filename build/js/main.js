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
        this.remainingToDo = toDoList.remainingToDo();


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

//# sourceMappingURL=main.js.map