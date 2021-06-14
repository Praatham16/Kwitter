// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBFGEziJZdPV9h3QDkwwEmPWT6H0EMsanI",
      authDomain: "kwitter-13d70.firebaseapp.com",
      databaseURL: "https://kwitter-13d70-default-rtdb.firebaseio.com",
      projectId: "kwitter-13d70",
      storageBucket: "kwitter-13d70.appspot.com",
      messagingSenderId: "825145727647",
      appId: "1:825145727647:web:7444aa220a9f58092160aa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
//GET USERNAME FROM THE LOCAL STORAGE AND DISPLAY IT ON THE SCREEN

username=localStorage.getItem("user")
document.getElementById("welcome").innerHTML="Welcome "+username
function addRoom() {
      room_name=document.getElementById("room_input").value;
      firebase.database().ref("/").child(room_name).update({
            status: "added successfully"
      })
      localStorage.setItem("room", room_name)
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      row=`<div class="room_name" id=${Room_names} onclick="gotoroom(this.id)">${Room_names}</div><hr>`
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function gotoroom(roomid) {
      localStorage.setItem("room",roomid)
      window.location="kwitter_page.html"
}
function logout() {
      localStorage.removeItem("room")
      localStorage.removeItem("user")
      window.location="index.html"
}