(function() {
    'use strict';

    angular.module('todoApp', []);

})();

(function() {
    'use strict';

    angular.module('todoApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['toDoList'];

    function ToDoController(/*toDoList*/) {

    }

})();

(function() {
    'use strict';

    angular.module('todoApp')
        .factory('toDoList', ToDoListService);

    function ToDoListService() {
        
    }

})();

//# sourceMappingURL=main.js.map