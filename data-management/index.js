// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v9.1.3 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID", // optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore();
 

// READ DATA
db.collection("posts")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  })
  .catch((error) => {
    console.error("Error getting documents: ", error);
  });
