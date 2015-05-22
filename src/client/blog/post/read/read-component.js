BlogPostReadController.$inject = ['Post', '$routeParams'];
function BlogPostReadController(Post, $routeParams) {
  this.post = Post.get({postId: $routeParams.postId});
}

function BlogPostReadComponent() {
  this.restrict = 'E';
  this.controller = BlogPostReadController;
  this.controllerAs = 'state';
  this.scope = {};
  this.templateUrl = 'blog/post/read';

}

BlogPostReadComponent.factory = function () {
  return new BlogPostReadComponent();
};

angular.module('blog.post.read.component', [
  'ngRoute',
  'blog.post.service',
  'blog.post.read.template'
]).directive('blogPostRead',  BlogPostReadComponent.factory

);
