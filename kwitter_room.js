// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCqtKGQtzJlW3sznv3ZFt5_JUUaaX8ShK4",
      authDomain: "project-95-734b3.firebaseapp.com",
      projectId: "project-95-734b3",
      storageBucket: "project-95-734b3.appspot.com",
      messagingSenderId: "919060340528",
      appId: "1:919060340528:web:9b26ac2593096ff5a432f5",
      measurementId: "G-8CN0ZESGZ3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
      user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }