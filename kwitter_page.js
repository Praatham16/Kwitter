//YOUR FIREBASE LINKS
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
    username=localStorage.getItem("user")
    room_name=localStorage.getItem("room")


    function send() {
          msg=document.getElementById("msg").value
          firebase.database().ref(room_name).push({
                NAME:username,
                MESSAGE:msg,
                LIKE:0
          })
          document.getElementById("msg").value=""
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
