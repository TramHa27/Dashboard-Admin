import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Layout from "./components/layout/Layout.jsx";
import "./assets/css/index.css";
import "./assets/css/theme.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV8yL280GbAb4J3fmsgiBvAyZXCkkNmmk",
  authDomain: "dashboard-admin-852dd.firebaseapp.com",
  projectId: "dashboard-admin-852dd",
  storageBucket: "dashboard-admin-852dd.appspot.com",
  messagingSenderId: "225842265644",
  appId: "1:225842265644:web:b34bdcdd4ab930b8745b89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.title = "Dashboard Admin";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
