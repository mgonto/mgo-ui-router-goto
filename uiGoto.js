angular.module('mgo.ui.router.directives', []);

angular.module('mgo.ui.router.directives').directive('uiGoto', function() {
    return {
        restrict : 'A',
        controller: ['$scope', '$element', '$attrs', '$state', 
             function ($scope, $element, $attrs, $state) {
            
            
            
            $element.click(function(e) {
                e.preventDefault();
                var state = $attrs.uiGoto;
                
                var params = {};
                if ($attrs.uiGotoParams) {
                    var params = $scope.$eval($attrs.uiGotoParams);
                    if (!_.isObject(params)) {
                        throw new Error("Parameters for uiGotoParams must be an object");
                    }
                }
                
               $scope.$apply(function() {
                   $state.transitionTo(state, _.extend($state.params, params));
               }) 
            });
            
        }]
    }
});
