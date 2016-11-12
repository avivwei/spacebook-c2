

var posts = [];

var createNewPost = function(text){
  var post = {
    text: text
  };

  
  if(posts.length === 0){
    post.id = 0;
  } else {
    var lastId = posts[posts.length - 1].id ;
    post.id = lastId + 1;
  }

  posts.push(post);
}


var addPost = function()  {
   
    $('.posts').empty();

    for (var i = 0; i < posts.length; i++) {
       
       
    $('.posts').append('<p data-id="' + posts[i].id + '"><a href="#" class="remove">remove</a>' + posts[i].text + ' ' + '</p>' + '<br>')
    
    }
}

$('.add-post').on("click", function(e){
  e.preventDefault();

  var text = $('#post-name').val();
  createNewPost(text);
  addPost();
});



$('.posts').on('click', ".remove", function(){
$(this).closest('p').remove();
 });







