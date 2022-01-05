

var user_name=localStorage.getItem("user_name");

function name(user_name){
   
    document.getElementById("name").innerHTML= user_name;
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9OEtCuBrmtdP010W5BkJlw1saD57iXls",
    authDomain: "p-94andetc.firebaseapp.com",
    databaseURL: "https://p-94andetc-default-rtdb.firebaseio.com",
    projectId: "p-94andetc",
    storageBucket: "p-94andetc.appspot.com",
    messagingSenderId: "480449063436",
    appId: "1:480449063436:web:5ad91e872406590403dc29"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
