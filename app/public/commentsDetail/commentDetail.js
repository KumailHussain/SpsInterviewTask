angular
    .module('spsnetTaskApp')
    .component('commentDetail', {
            templateUrl: 'public/commentsDetail/commentDetail.html',
            controller:(function ($scope,sharedService) {
                $scope.commentedUser=sharedService.commentedUser;
            }),
        }
    );