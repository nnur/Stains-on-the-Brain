
myapp.controller('mystainsController', function($scope, $http) {
    

    $scope.pageClass = 'page-about';

    var mystainCount = 1;

    //asynchronous callback
    currentUser.getMystains(function(data) {
        //do things with mystains
        $('#Container').append("<img src='../images/raw_stains/" + 1 + ".png'/>"); // TODO - for testing, remove
    })

    // $http.get("/mystains/" + currentUser.username).success(function(data) {
    //     $('#Container').append("<img src='../images/raw_stains/" + 1 + ".png'/>"); // TODO - for testing, remove
    // });

});