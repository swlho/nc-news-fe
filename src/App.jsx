import { Routes, Route } from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import ArticlePage from "./components/ArticlePage";
import FrontPage from "./components/FrontPage";
import UserContext from './context/UserContext';
import {useState} from 'react'
import SignInButton from "./components/SignInButton";

function App() {

	const [loggedInUser, setLoggedInUser] = useState(
		{
			username: "tickle122",
			name: "Tom Tickle",
			avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
		})

	const [signedIn, setSignedIn] = useState(false)

	return (
		<UserContext.Provider value = {{loggedInUser:loggedInUser, setLoggedInUser: setLoggedInUser, signedIn:signedIn, setSignedIn:setSignedIn}}>
			<Logo />
			<Header />
			<Navbar />
			<SignInButton/>
			<div id="content">
				<Routes>
					<Route path="/" element={<FrontPage />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/articles/:topic" element={<Articles />} />
					<Route path="/articles/:topic/:article_id" element={<ArticlePage />} />
				</Routes>
			</div>
		</UserContext.Provider>
	);
}

export default App;
