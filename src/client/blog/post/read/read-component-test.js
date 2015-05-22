describe('Blog Post Read', function () {
  var element;

  beforeEach(module('blog.post.read.component'));

  beforeEach(module(function ($provide) {
    $provide.value('$routeParams', {
      postId: '123'
    });
    $provide.value('Post', {
      get: function (params) {
        params.postId.should.equal('123');
        return { id:'123', title: 'A Post', content: 'A test post.'

        };
      }
    });
  }));

  beforeEach(function () {
    element = render('<blog-post-read />');
  });

  it('renders a post to read', function () {
    element.find('h2').text().should.equal('A Post');
  });
});
