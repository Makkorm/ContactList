(function(){

    angular
        .module('app')
        .controller('MainCtrl',['$scope','$timeout','$http', MainCtrl]);
    
    MainCtrl.$inject = ['$scope','$timeout','$http'];

    function MainCtrl($scope,$timeout, $http){

        // массив изначальных контактов
        $scope.contacts = [];

        $scope.newContact = {
            name : '',
            lastName : '',
            patronymic : '',
            dateOfBirth : '',
            mobilePhone : {
                number : '',
                isDefault : true
            },
            homePhone : {
                number : '',
                isDefault : false
            },
            workPhone : {
                number : '',
                isDefault : false
            },
            address : '',
            workMail : {
                emailAddress : '',
                isDefault : true
            },
            homeMail : {
                emailAddress : '',
                isDefault : false
            }
        };

        $scope.phoneIsDefaultList = [
            {name : 'Мобильынй', id : 'mobilePhone'},
            {name : 'Домашний', id : 'homePhone'},
            {name : 'Рабочий', id : 'workPhone'}
        ];
        $scope.phoneIsDefault = 'Мобильный';
        $scope.mailIsDefaultList = [
            {name : 'Рабочая', id : 'workMail'},
            {name : 'Домашняя', id : 'homeMail'}
        ];
        $scope.mailIsDefault = 'Рабочая';

        $scope.addNewContact = addNewContact;
        $scope.clearForm = clearForm;
        $scope.changeDefPhone = changeDefPhone;
        $scope.changeDefMail = changeDefMail;



        $http.get('contacts.json')
            .then(function(data){
                $scope.contacts = data.data;
            });


        // functions

        function addNewContact(){
            var closeButton = $('#closeForm');

            $scope.contacts.push($scope.newContact);
            $timeout(function(){
                closeButton.click();
            }, 100)
        }

        function clearForm(){
            $scope.newContact = {};
        }

        function changeDefPhone(name){
            $scope.newContact.mobilePhone.isDefault = false;
            $scope.newContact.homePhone.isDefault = false;
            $scope.newContact.workPhone.isDefault = false;

            $scope.newContact[name.id].isDefault = true;
        }

        function changeDefMail(name){
            $scope.newContact.workMail.isDefault = false;
            $scope.newContact.homeMail.isDefault = false;

            $scope.newContact[name.id].isDefault = true;
        }


    } // end MainCtrl

})();