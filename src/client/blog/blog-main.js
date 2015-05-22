angular.module('blog',[
  'ngRoute',
  'blog.list.component',
  'blog.post.read.component'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/list', {
    template: '<blog-list></blog-list>'
  })
  .when('/post/:postId', {
    template: '<blog-post-read></blog-post-read>'
  })
  .otherwise({
    redirectTo: '/list'
  });
}]);
