function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";    
    
    }
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyA5Rr6_ZHjgtxrLsHbB8FaWGK8E2OYzGvE",
    authDomain: "kwitter-8c305.firebaseapp.com",
    databaseURL: "https://kwitter-8c305-default-rtdb.firebaseio.com",
    projectId: "kwitter-8c305",
    storageBucket: "kwitter-8c305.appspot.com",
    messagingSenderId: "150627753746",
    appId: "1:150627753746:web:71b47f2d6c96b078725dcb"
  };
