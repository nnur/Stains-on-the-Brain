var mixmixFunky = function() {
    $(function() {
        $('#Container').mixItUp();
    });
}

// create the controller and inject Angular's $scope
myapp.controller('mystainsController', function($scope, $http) {

    var mystainCount = 1;

    //asynchronous callback
    currentUser.getMystains(function(data) {
        console.log(data)
    })

    $http.get("/mystains/" + currentUser.username).success(function(data) {
        $('#Container').append("<img src='../images/raw_stains/" + 1 + ".png'/>"); // TODO - for testing, remove
        // mixUp(mystainCount);

    });


    function mixUp(mystainCount) {

        $(document).ready(function() {

                //add all the mystains to the view
                for (var i = 1; i <= mystainCount; i++) {
                    $('#Container').append("<img class='mix category-1' data-myorder='" + i + "' src='../images/raw_stains/" + i + ".png'/>");
                }
                // mixmixFunky();

            }

        );
    }
});