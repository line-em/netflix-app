import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/signin" element="">
					signin
				</Route>
				<Route path="/signup" element="">
					login
				</Route>
				<Route path="/browse" element="">
					browse
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

{
	/* <Router>
	<Switch>
		<Route path="/signin">
			<p>I will be the sign in page</p>
		</Route>
		<Route path="/signup">
			<p>I will be the sign up page</p>
		</Route>
		<Route path="/browse">
			<p>I will be the browse page</p>
		</Route>
		<Route path="/">
			<p>I am going to be a cloned Netflix application</p>
		</Route>
	</Switch>
</Router>; */
}
