import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAf8kJbl-sU74haSt0ENQyEQ4FSnD1lG_M",
    authDomain: "dev-tools-dbbae.firebaseapp.com",
    projectId: "dev-tools-dbbae",
    storageBucket: "dev-tools-dbbae.appspot.com",
    messagingSenderId: "507877801135",
    appId: "1:507877801135:web:c04922ac3d4b45e843e85a",
    measurementId: "G-WTVR1E4N9F"
};
const firebaseReference = initializeApp(firebaseConfig);
export default firebaseReference;