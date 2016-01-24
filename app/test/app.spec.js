describe('FieldEditorPageController test', function(){
    var scope;

    beforeEach(angular.mock.module('FieldEditor'));
    beforeEach(angular.mock.inject(function($controller,$rootScope){
        scope = $rootScope.$new();

        $controller('FieldEditorPageController as pageCtrl', {$scope: scope});
    }));

    it('Check intial intial Button Length', function(){
        expect(scope.pageCtrl.fields.length).toBe(1);
    });
    
     it('Add Button test', function(){
        scope.pageCtrl.newField()
        expect(scope.pageCtrl.fields.length).toBe(2);
    });
}); 