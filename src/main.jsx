import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { FirebaseContext } from "./context/firebase";
import { GlobalStyles } from "./global-styles";

const firebaseConfig = {
	apiKey: "AIzaSyD4fEAGpQdSbYp_sp-dbF2G3yQ4FcmxXBQ",
	authDomain: "netflix-clone-3356f.firebaseapp.com",
	projectId: "netflix-clone-3356f",
	storageBucket: "netflix-clone-3356f.appspot.com",
	messagingSenderId: "116595341258",
	appId: "1:116595341258:web:908a22e5e81cd79c788133"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
	<FirebaseContext.Provider value={{ firebase: app }}>
		<GlobalStyles />
		<App />
	</FirebaseContext.Provider>
);
