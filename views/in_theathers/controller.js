/*
* @Author: 虚竹
* @Date:   2016-09-26 22:32:33
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-10 17:41:28
*/

;(function() {
	'use strict';
	angular.module('renren').controller('TheathersController', ['$scope',
	  function($scope) {

	  	$scope.show = false;
	  	$scope.showSub = function() {
	  		console.log("msg");
	  		$scope.show = true;
	  	}

	  	$scope.hideSub = function() {
	  		$scope.show = false;
	  	}
	    $scope.dataList = [{
	    	title: "技术",
	    	teles: [{
	    		href:"http://www.baidu.com",
	    		name:"Java"
	    	},
	    	{
	    		href:"http://www.baidu.com",
	    		name:"PHP"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"C"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"C++"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"Android"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"iOS"
	    	}]
	    },{
	    	title: "运营",
	    	teles: [{
	    		href:"http://www.baidu.com",
	    		name:"Java"
	    	},
	    	{
	    		href:"http://www.baidu.com",
	    		name:"PHP"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"C"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"C++"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"Android"
	    	},{
	    		href:"http://www.baidu.com",
	    		name:"iOS"
	    	}]
	    }];
	}]);

})();