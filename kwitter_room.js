
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyAmM606WXRjGLZIf-C4IC4IMnzZz-QYcfs",
      authDomain: "kwitter-app-3a09a.firebaseapp.com",
      databaseURL: "https://kwitter-app-3a09a-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-3a09a",
      storageBucket: "kwitter-app-3a09a.appspot.com",
      messagingSenderId: "373768363284",
      appId: "1:373768363284:web:bb776d1318b40e4e37f601",
      measurementId: "G-7V04SFFESV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").nodeValue;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
    }
    
    function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
