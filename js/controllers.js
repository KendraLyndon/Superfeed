angular.module('animateApp', ['ngAnimate']);

app.controller('MainController', function($scope) {
  $scope.view = {};
  $scope.form = {};
  $scope.commentForm = {};
  $scope.view.formShowing = false;
  $scope.view.order = 'date';
  $scope.view.keyword = '';
  $scope.toggleForm = function(){
    $scope.view.formShowing = !$scope.view.formShowing;
  };
  $scope.view.clearForm = function(){
    $scope.form = {};
  };
  $scope.view.addPost = function(){
    $scope.form.date = moment().calendar();
    $scope.form.votes = 0;
    $scope.form.comments = [];
    $scope.form.commentsVisible = false;
    $scope.form.commentFormVisible = false;
    $scope.posts.push($scope.form);
  };
  $scope.checkKeyword = function(post){
    var keyword = $scope.view.keyword.toLowerCase();
    if(keyword.length > 0){
      if(post.title.toLowerCase().indexOf(keyword) === -1 &&
      post.author.toLowerCase().indexOf(keyword) === -1 &&
      post.description.toLowerCase().indexOf(keyword) === -1){
        return false;
      }
    }
    return true;
  };
  $scope.toggleComments = function(post){
    post.commentsVisible = !post.commentsVisible;
  };
  $scope.toggleCommentForm = function(post){
    post.commentFormVisible = !post.commentFormVisible;
  };
  $scope.addComment = function(post){
    post.comments.push($scope.commentForm);
  };
  $scope.clearCommentForm = function(post){
    $scope.commentForm = {};
  };
  $scope.commentText = function(post){
    return post.comments.length === 1 ? 'comment' : 'comments';
  }
  $scope.styleVote = function(post){
    if(post.votes < 0){
      return 'red'
    } else if(post.votes > 0){
      return 'green'
    } else {
      return 'black'
    }
  };
  $scope.posts = [
    {
      title:'Hello from the other side',
      author:'Adele',
      image:'https://pbs.twimg.com/profile_images/657199367556866048/EBEIl2ol.jpg',
      description:"I'm rolling in the deep",
      date: moment().subtract(1, 'days').calendar(),
      votes: 10,
      comments: [
       {
         author: "George",
         text: "I love cashews"
       }
      ],
      commentsVisible: false,
      commentFormVisible: false
    },
    {
      title:'Dani California',
      author:'Flea',
      image:'http://ta1.universaltelegra.netdna-cdn.com/wp-content/uploads/2016/01/Flea.jpg',
      description:"Getting born in the state of Mississippi Papa was a copper and Mama was a hippie",
      date: moment().subtract(1, 'months').calendar(),
      votes: 2,
      comments: [
      ],
      commentsVisible: false,
      commentFormVisible: false
    },
    {
      title:'Girls run the world!',
      author:'Beyonce',
      image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkQ_fyEUTS4sgv5HHO7aB055tH6bFB0vQ1ldFEgSVUArBDC4r3',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: moment().subtract(36, 'minutes').calendar(),
      votes: -1,
      comments: [
       {
         author: "Julie",
         text: "Yeah they do"
       },
       {
         author: "Cartman",
         text: "Fuck you guys"
       }
      ],
      commentsVisible: false,
      commentFormVisible: false
    },
    {
      title:'Flip it and Reverse it',
      author:'Missy Elliot',
      image:'http://cdn01.cdn.justjared.com/wp-content/uploads/headlines/2015/11/missy-elliott-wild-video-pharrell-williams.jpg',
      description:"Ti esrever dna ti pilf, nwod gniht ym tup",
      date: moment().subtract(5, 'days').calendar(),
      votes: 0,
      comments: [],
      commentsVisible: false,
      commentFormVisible: false
    },
    {
      title:'Bassface',
      author:'Este',
      image:'http://static.gigwise.com/artists/wenn21497887.jpg',
      description:"I don’t know if you saw our set but we like to bang a drum now and again",
      date: moment().subtract(20, 'days').calendar(),
      votes: 9,
      comments: [
        {
          author: "Kendra",
          text: "get dat bass face"
        }
      ],
      commentsVisible: false,
      commentFormVisible: false
    }
  ]
})
