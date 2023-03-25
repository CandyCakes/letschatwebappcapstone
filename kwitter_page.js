var firebaseConfig = {
    apiKey: "AIzaSyCUunaq8sGJpWt3XZwwJqFC9K0fxD-gFpI",
    authDomain: "let-schatwebapp-8c5ec.firebaseapp.com",
    databaseURL: "https://let-schatwebapp-8c5ec-default-rtdb.firebaseio.com",
    projectId: "let-schatwebapp-8c5ec",
    storageBucket: "let-schatwebapp-8c5ec.appspot.com",
    messagingSenderId: "1044898308938",
    appId: "1:1044898308938:web:fbaa425ac08219dd6697b3",
    measurementId: "G-DQSX9DSV6G"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start

//End code
 } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });

 document.getElementById("msg").value = "";
}
