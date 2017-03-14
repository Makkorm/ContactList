(function(){

    angular
        .module('app',['ui.router'])
        .config(uiRouterConfig);

    uiRouterConfig.$inject = ['$urlRouterProvider','$stateProvider'];

    function uiRouterConfig($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url : '/',
                templateUrl : 'templates/main.html'
            })
            .state('contact', {
                url: '/contact/:name',
                templateUrl: 'templates/contact.html',
                controller : 'ContactCtrl'
            })

    }



})();