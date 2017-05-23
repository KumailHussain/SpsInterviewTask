'use strict'

angular.module('spsnetTaskApp')
    .controller('commentCtrl',function($scope,getService,sharedService,$location) {
        $scope.error=false;
        $scope.loading=false;
        $scope.showGrid=true;

        var columnDefs = [
            {headerName: "POSTID", field: "postId"},
            {headerName: "ID", field: "id"},
            {headerName: "Name", field: "name"},
            {headerName: "Email", field: "email"},
            {headerName: "Body", field: "body"}

        ];
        $scope.getAll=function(){
            console.log($scope.loading)

            getService.getApi().then(function(response) {
                $scope.gridOptions.api.setRowData(response.data);
                $scope.paged=$scope.gridOptions.api.paginationGetTotalPages();
                $scope.currentPage=$scope.gridOptions.api.paginationGetCurrentPage() + 1;
                $scope.rowsCount=$scope.gridOptions.api.paginationGetPageSize();
                $scope.currentEntries = $scope.rowsCount;
                $scope.totalEntries=$scope.gridOptions.api.paginationGetRowCount();
                $scope.pageSize=100;
                $scope.loading=true;
                console.log($scope.loading)



            })
                .catch(function(err) {
                    $scope.error=true
                });
        }
        $scope.gridOptions = {
            columnDefs: columnDefs,
            rowSelection: 'single',
            pagination: true,
            suppressPaginationPanel:true,
            rowHeight: 48,
            onRowClicked: function(event) {

                sharedService.commentedUser=event.node.data;
                $scope.showGrid=false;
                $scope.$apply();

            },

        };
        $scope.selectPage=function(index){

            $scope.gridOptions.api.paginationGoToPage(index);
            $scope.currentPage=$scope.gridOptions.api.paginationGetCurrentPage() + 1
            $scope.rowsCount=$scope.gridOptions.api.paginationGetPageSize();
            $scope.currentEntries = $scope.rowsCount * (index+1);
            $scope.totalEntries=$scope.gridOptions.api.paginationGetRowCount();

            if($scope.currentEntries> $scope.totalEntries)
            {
                $scope.currentEntries=$scope.totalEntries
            }


        }

        $scope.preComment=function(index) {

            $scope.gridOptions.api.paginationGoToPreviousPage();

            if ($scope.currentPage >= 2)
            {
                $scope.currentPage = $scope.currentPage - 1;
                $scope.currentEntries = $scope.rowsCount * ( $scope.currentPage);
                $scope.totalEntries=$scope.gridOptions.api.paginationGetRowCount();
            }
        }

        $scope.nextComment=function(){

            $scope.gridOptions.api.paginationGoToNextPage();

            if( $scope.currentPage<$scope.paged)
            {
                $scope.currentPage= $scope.currentPage+1;
                $scope.currentEntries = $scope.rowsCount * ( $scope.currentPage);
            }

            if($scope.currentEntries> $scope.totalEntries)
            {
                $scope.currentEntries=$scope.totalEntries
            }

        }

        $scope.onPage = function(value) {

            $scope.gridOptions.api.paginationSetPageSize(Number(value));
            $scope.paged=$scope.gridOptions.api.paginationGetTotalPages();
            $scope.currentPage=$scope.gridOptions.api.paginationGetCurrentPage() + 1;
            $scope.rowsCount=$scope.gridOptions.api.paginationGetPageSize();
            $scope.pageSize=parseInt(value);
            $scope.currentEntries = $scope.rowsCount * ( $scope.currentPage);
            if($scope.currentEntries> $scope.totalEntries)
            {
                $scope.currentEntries=$scope.totalEntries
            }
        }

        $scope.back = function () {
            $scope.showGrid=true;
        }

    });
