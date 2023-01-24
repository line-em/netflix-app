import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseContext } from "./context/firebase";
import { GlobalStyles } from "./global-styles";
import { seedDatabase } from "./seed";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

seedDatabase(db);

ReactDOM.createRoot(document.getElementById("root")).render(
	<FirebaseContext.Provider value={{ firebase, auth, db }}>
		<GlobalStyles />
		<App />
	</FirebaseContext.Provider>
);
