firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    

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
  //var str = "Please locate where 'locate' occurs!";
  var pos = email.indexOf("@");
  name = email.slice(0, pos);

  var temp = name.charAt(0);
  var temp = temp.toUpperCase()
  var name = name.replace(name.charAt(0), temp);
  document.getElementById("mainGreet").innerHTML = "Greetings player " + name + ", <br> your level is 1.";
  
}
  } 
  else 
  {
    // No user is signed in.
    window.location.replace("login.html");
  }
});




//firebase.auth().onAuthStateChanged(function(user) {
//  if (user == null) {
 //     window.location.replace("login.html");
 // }
//});



function logout()
{
firebase.auth().signOut();
}
