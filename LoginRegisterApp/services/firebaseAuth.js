// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW9YrjKkxXF2P1WqeRJt-Uuwf-926BHks",
  authDomain: "react-native-auth-demo-35b57.firebaseapp.com",
  projectId: "react-native-auth-demo-35b57",
  storageBucket: "react-native-auth-demo-35b57.appspot.com",
  messagingSenderId: "1076719696780",
  appId: "1:1076719696780:web:74ef14e6e7ba3dc1a974a9"
};

let auth;

if (getApps().length == 0) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
} else {
    auth = getAuth();
}

export default auth;