angular.module('blog',[
  'ngRoute',
  'blog.list.component',
  'blog.post.read.component',
  'blog.post.edit.component'
]).config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/list', {
    template: '<blog-list></blog-list>'
  })
  .when('/post/new',{  //? means it is optional
    template: '<blog-post-edit />'
  })
  .when('/post/edit/:postId?',{  //? means it is optional
    template: '<blog-post-edit />'
  })
  .when('/post/:postId', {
    template: '<blog-post-read></blog-post-read>'
  })
  .otherwise({
    redirectTo: '/list'
  });
}]);
