describe('Blog', function () {
  describe('List Component', function () {
    var component;

    beforeEach(module('blog.list.component'));

    beforeEach(module(function ($provide) {
      $provide.value('Post', {
        query: function(){
          return [
               { title: 'Hello', content: 'The first post'},
               { title: 'Things ', content: 'We have things to say'}
             ];

        }
      });
    }));
    
    beforeEach (function () {
      component = render('<blog-list></blog-list>');
    });

    describe('Controller', function () {
      it('Exposes blog posts', function () {
        component.find('li').length.should.equal(2);
      });
    });
  });
});
