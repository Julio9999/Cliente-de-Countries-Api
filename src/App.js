import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CountryDetails } from "./pages/CountryDetails";
import { LandingPage } from "./pages/LandingPage";
import { useContext } from "react";
import ThemeContext from './context/ThemeProvider';


function App() {

	const { theme } = useContext(ThemeContext)

	return (
		<BrowserRouter>
				<div className={theme ? "App light" : "App"} >
					<Header />
					<Routes>
						<Route path="/countries/:name" element={<CountryDetails />} />
						<Route path="/" element={<LandingPage />} />
					</Routes>
				</div>
		</BrowserRouter>
	);
}

export default App;
