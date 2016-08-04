(function(){
    'use strict';

    /*
    var assert =  chai.assert;

    suite('registrar controller', function() {

        var regController, $rootScope;
        var mockStudentService = {};
        setup(module('school'));
        setup(module(function($provide) {
            $provide.value('student', mockStudentService);
        }));
        setup(inject(function($controller, $q, _$rootScope_) {
            $rootScope = _$rootScope_;

            mockStudentService.findAll = function() {
                var def = $q.defer();
                def.resolve([]);
                return def.promise;
            };
            mockStudentService.add = function(data) {
                mockStudentService.add.called++;
                return {
                    id: 1,
                    name: data.name,
                    grade: data.grade,
                    datAdded: new Date()
                };
            };
            mockStudentService.add.called = 0;

            regController = $controller('RegistrarController');
            //name of the controller you are going to run tests
        }));

        test('registrar controller has expected data', function() {
            // assert.isString(regController.path, 'path exists');
            assert.isArray(regController.students, 'controller has students array');
            assert.isObject(regController.newStudent,
                                        'controller has new student object');
            assert.strictEqual(Object.keys(regController.newStudent).length, 0,
                                        'controller has an empty object');
            assert.isFunction(regController.addStudent,
                                        'controller has method to add Student');

            $rootScope.$digest();
        });

        test('registrar can add student', function() {
            regController.addStudent({name: 'John', grade: 50});
            assert.strictEqual(mockStudentService.add.called, 1,
                                        'the student service add method was executed');

            $rootScope.$digest();
        });

    });
    */


})();
