angular.module('FieldEditor', [])
    .controller("FieldEditorPageController",
        function () {

            var self = this;
            
            self.fields = [
               { type:'submit'}
            ];

            self.inputTypes = [             
                { value: "reset", title: "button[reset]" },
                { value: "cancel", title: "button[cancel]" },
                { value: "submit", title: "button[submit]" }
            ];

            self.newField = function () {
                self.fields.push({ type:'submit'});
            };

            self.removeField = function (field) {
                var index = self.fields.indexOf(field);
                if (index >= 0) {
                    self.fields.splice(index, 1);
                }
            };
        })
    .controller("appButtonController", ['$scope', '$attrs',  function ($scope, $attrs) {
        var self = this;
        var directiveScope = $scope.$parent;
        self.options = directiveScope.$eval($attrs.model);
        self.onOk = function (){
            alert( self.options.type + ' button clicked');
        }
    }])
    .directive('appButton', function ($compile) {
        return {
            transclude: true,
            template: '<button ng-click="buttonCtrl.onOk()" type="">{{type|uppercase}}</button>',
            scope: {
                title: '@',            
                type: '@'           
            },
            restrict: 'E',
            replace: true ,
            controller: 'appButtonController',
            controllerAs: 'buttonCtrl',
        }
    })
