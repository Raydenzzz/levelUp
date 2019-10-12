firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("entranceImg").style.display = "none";
    document.getElementById("user_div").style.display = "block"; //initial maybe
    document.getElementById("login_div").style.display = "none";
    document.getElementById("greeting").style.display = "none";
    document.getElementById("loggedGreet").style.display = "block";

    window.location = 'main.html';

    

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified; // for verification...
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
  document.getElementById("loggedGreet").innerHTML = "Greetings user " + email + ", you're logged in.";
  
}
  } 
  else 
  {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("entranceImg").style.display = "block"; 
    document.getElementById("greeting").style.display = "block";
    document.getElementById("loggedGreet").style.display = "none";

  }
});



function login()
{
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}



function create_acc()
{
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}



function logout()
{
  firebase.auth().signOut();
}

