EditController.$inject = ['Post'];
function EditController(Post) {
  this.post = new Post();
}
EditController.prototype = Object.create ( {
  save: function () {
    return this.post.$save();
  }
});

function EditComponent() {
  this.restrict = 'E';
  this.controller = EditController;
  this.controllerAs = 'state';
  this.scope = {};
  this.templateUrl = 'blog/post/edit';
}
EditComponent.factory = function () {
  return new EditComponent();
};

angular.module('blog.post.edit.component', [

  'blog.post.service',
  'blog.post.edit.template'
]).directive('blogPostEdit',  EditComponent.factory

);
