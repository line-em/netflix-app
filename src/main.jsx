import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { FirebaseContext } from "./context/firebase";
import "./index.css";

const firebaseConfig = {
	apiKey: "AIzaSyDEoGbmTFiRwRjXAh6zbj_1cUkURFimOCA",
	authDomain: "netflix-scrimba-5c3e6.firebaseapp.com",
	projectId: "netflix-scrimba-5c3e6",
	storageBucket: "netflix-scrimba-5c3e6.appspot.com",
	messagingSenderId: "814214750782",
	appId: "1:814214750782:web:a9c5124763f5cc533e676f"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
	<FirebaseContext.Provider value={{ firebase: app }}>
		<App />
	</FirebaseContext.Provider>
);
