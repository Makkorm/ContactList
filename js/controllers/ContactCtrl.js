(function(){

    angular
        .module('app')
        .controller('ContactCtrl',['$scope','$stateParams', ContactCtrl]);

    ContactCtrl.$inject = ['$scope','$stateParam'];

    function ContactCtrl($scope,$stateParam){

        $scope.contactNumber = $stateParam.name;
        $scope.contact = $scope.contacts[$scope.contactNumber];

        // клонируем объект, что бы редакнировать данные
        $scope.contactCopy = jQuery.extend(true, {}, $scope.contact);

        $scope.isEdit = false;

        $scope.initEdit = initEdit;
        $scope.changeDefPhone = changeDefPhone;
        $scope.changeDefMail = changeDefMail;
        $scope.stopEdit = stopEdit;
        $scope.saveEdit = saveEdit;



        function initEdit(){
            $scope.isEdit = true;
        }


        function changeDefPhone(name){
            $scope.contactCopy.mobilePhone.isDefault = false;
            $scope.contactCopy.homePhone.isDefault = false;
            $scope.contactCopy.workPhone.isDefault = false;

            $scope.contactCopy[name.id].isDefault = true;
        }

        function changeDefMail(name){
            $scope.contactCopy.workMail.isDefault = false;
            $scope.contactCopy.homeMail.isDefault = false;

            $scope.contactCopy[name.id].isDefault = true;
        }

        function stopEdit(){
            $scope.isEdit = false;
            $scope.contactCopy = jQuery.extend(true, {}, $scope.contact);
        }

        function saveEdit(){
            $scope.isEdit = false;
            $scope.contacts[$scope.contactNumber] = $scope.contactCopy;

            console.log($scope.contactCopy.homeMail.isDefault);
        }


    }

})();