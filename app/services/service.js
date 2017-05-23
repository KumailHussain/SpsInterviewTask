angular.module('spsnetTaskApp')
    .service('getService', function($http,$q) {
        var d = $q.defer();

        this.getApi = function () {
        $http.get('https://jsonplaceholder.typicode.com/comments')
            .then(function(payload) {
                console.log(payload)
               return  d.resolve(payload);;

            })
            .catch(function(err) {
                console.log(err);
                return  d.resolve(err);;
            })
            return d.promise

        }
    });