angular.module('blog.post.service', [
  'ngResource']).factory('Post', ['$resource', function ($resource) {
    return $resource('api/blog/posts/:postId');
  }]);
