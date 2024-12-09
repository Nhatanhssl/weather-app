import React, { useEffect, useState } from "react";
import { getCurrentWeather } from "../api";

function CurrentWeather({ location }) {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		fetch(getCurrentWeather(location.lat, location.lon))
			.then((res) => res.json())
			.then((data) => setWeather(data));
	}, [location]);

	return (
		<div className="current-weather">
			{weather ? (
				<>
					<h2>Current Weather</h2>
					<p>{weather.name}</p>
					<p>{weather.weather[0].description}</p>
					<p>{weather.main.temp}°C</p>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default CurrentWeather;
