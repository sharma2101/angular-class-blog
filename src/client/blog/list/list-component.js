function BlogListController() {
  this.posts = [
    { id:1, title: 'Hello', content: 'The first post'},
    { id:2, title: 'Things ', content: 'We have things to say'}
  ];
}


function BlogListComponent() {
  this.restrict = 'E';
  this.controller = BlogListController;
  this.controllerAs = 'state';
  this.templateUrl = 'blog/list';
  this.scope = {};
}

BlogListComponent.factory = function () {
  return new BlogListComponent();
};

angular.module('blog.list.component', [
  'blog.list.template']).directive('blogList', BlogListComponent.factory);
