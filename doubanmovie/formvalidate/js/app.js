angular.module('myApp', [])
	.controller('signUpController', ['$scope', function($scope) {
		$scope.userdata = {
			// username: '1234',
			// password: '1234'
		};
		$scope.sibmitForm = function() {
			// if ($scope.signUpForm.$invalid) {
			// 	alert('请检查您的信息');
			// } else {
			// 	alert('提交成功!');
			// }

			console.log($scope.userdata);
			if ($scope.signUpForm.$invalid) {
				alert("请检查表单输入");
			} else {
				alert("提交成功");
			}
		};

		// $scope.myFilter = function(item) {
		// 	return item.age === 20;
		// };

	}])
	//directve
	.directive('compare', function() {
		var o = {};
		o.strict = 'AE';
		o.scope = {
			orgTxt: '=compare'
		}
		o.require = 'ngModel';
		o.link = function(sco, ele, att, con) {
			con.$validators.compare = function(v) {
				return v == sco.orgTxt;
			}
			sco.$watch('orgTxt', function() {
				con.$validate();
			});
		}
		return o;
	})