angular.module('blog',[
  'ngRoute',
  'blog.list.component'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/list', {
    template: '<blog-list></blog-list>'
  })
  .otherwise({
    redirectTo: '/list'
  });
}]);
