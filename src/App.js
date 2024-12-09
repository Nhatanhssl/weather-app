import React, { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import AirQuality from "./components/AirQuality";
import WeatherMap from "./components/WeatherMap";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";

function App() {
	const [location, setLocation] = useState({ lat: 21.0285, lon: 105.8542 }); // Hà Nội

	return (
		<div className="app">
			<h1>Weather App</h1>
			<SearchBar setLocation={setLocation} />
			<CurrentWeather location={location} />
			<Forecast location={location} />
			<AirQuality location={location} />
			<WeatherMap location={location} />
		</div>
	);
}

export default App;
