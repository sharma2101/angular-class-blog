EditController.$inject = ['Post', '$routeParams'];
function EditController(Post, $routeParams) {
  this.Post = Post;
  if($routeParams.postId){
    this.editing = true;
    this.post = Post.get({postId: $routeParams.postId});
  } else{
    this.editing = false;
    this.post = new Post();
  }

}
EditController.prototype = Object.create ( {
  save: function () {
    if(this.editing){
      return this.Post.update({postId: this.post.id}, this.post);
    }else{
      return this.post.$save();
    }

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
