$(function() {

  Parse.$ = jQuery;

  // Replace this line with the one on your Quickstart Guide Page
  Parse.initialize("rriccses0xkmfyCu8JHUbRB3n4mJW1H3okqs1Sjh", "z8QtkGlujwURiXFdYzi4SV7L9X6BxWdQG6bVecA2");

  // login function
  $("#login").submit(function(event) {

    var currentUser = Parse.User.current();
    if (currentUser) {
      Parse.User.logOut();
    }

    event.preventDefault();

    var name = $("#login-name").val();
    var pass = $("#login-password").val();

    Parse.User.logIn(name, pass, {

      success: function(user){
        window.location = "welcome.html";
      },
      error: function(user, error){
        alert('Incorrect Username and/or Password');
      }

    });

  });

  // signup function
  $("#signup").submit(function(event) {
    // logout session before signing up
    var currentUser = Parse.User.current();
    if (currentUser) {
      Parse.User.logOut();
    }

    event.preventDefault();

    var name = $("#signup-name").val();
    var pass = $("#signup-password").val();

    // create new parse user and sets the username/password
    var user = new Parse.User();

    user.set("username", name);
    user.set("password", pass);

    user.signUp(null, {

      success: function(user){
        alert('Welcome! Please login with your new account.');
        window.location = "login.html";
      },
      error: function(user, error){
        alert(error.message);
      }

    });

  });

});

function modalClose() {
    if (location.hash == '#openModal') {
        location.hash = '';
    }
}

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modalClose();
    }
});

var modal = document.querySelector('#openModal');
modal.addEventListener('click', function(e) {
    modalClose();
}, false);

modal.children[0].addEventListener('click', function(e) {
    e.stopPropagation();
}, false);
