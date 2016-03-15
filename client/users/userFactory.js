angular.module('userFactory',[])
.factory('User', function($http){
	var userInfo = {};

	// userInfo.getOneInfo = function (){
	// 	data = {
	// 		user_id: AuthId
	// 	};

	// 	return $http({
	// 		method : 'GET',
	// 		url : '/api/users/:user_id',
	// 		params: data
	// 	});
	// };

	userInfo.getOneInfo = function (user){
		return $http({
			method : 'GET',
			url : '/api/users/' + user
		});
	};

	return userInfo;
});